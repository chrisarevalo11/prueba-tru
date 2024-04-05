// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ITruToken {
    function mint(address to, uint256 amount) external;
}

contract TruTokenFaucet {
    
    ITruToken public truToken;
    mapping(address => uint256) public lastMint;

    uint256 public constant DAY_IN_SECONDS = 86400; // 24 * 60 * 60
    uint256 public constant MINT_AMOUNT = 1000 * 10**18; // Example mint amount, adjust as needed

    constructor(address _truTokenAddress) {
        require(_truTokenAddress != address(0), "TruToken address cannot be 0");
        truToken = ITruToken(_truTokenAddress);
    }

    /**
     * @dev Allows a user to mint tokens once per day.
     */
    function mintTokens() public {
        require(_canMint(msg.sender), "You can only mint once per day");
        lastMint[msg.sender] = block.timestamp;

        truToken.mint(msg.sender, MINT_AMOUNT);
    }

    /**
     * @dev Checks if the user can mint tokens (once per day).
     * @param user The user's address to check.
     * @return true if the user can mint tokens, otherwise false.
     */
    function _canMint(address user) private view returns (bool) {
        if (lastMint[user] == 0) {
            return true; // User has never minted before
        }
        return (block.timestamp - lastMint[user]) >= DAY_IN_SECONDS;
    }
}
