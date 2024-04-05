import { ethers } from 'ethers';

const contractABI = [
  {
    "inputs": [],
    "name": "mintTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const contractAddress = '0x448886A579AE3E17d28cC07be15D266Dc155D908';

const privateKey = 'a987ff9541ec98d4f400969960c652f2b18a2485aabab5e425b9a2f360dd4ee5';

// Setup provider
const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/LFPBwGlJy3ohBxtSfMNW7iPvnTXf4cgf");

console.log(provider)


// Create a contract instance connected to the wallet
const contract = new ethers.Contract(contractAddress, contractABI, privateKey);

async function mintTokens() {
  try {
    // Call the mintTokens function
    const tx = await contract.mintTokens();
    console.log('Transaction submitted:', tx.hash);

    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    console.log('Transaction confirmed:', receipt);
  } catch (error) {
    console.error('Transaction failed:', error);
  }
}

// Execute the function
mintTokens();