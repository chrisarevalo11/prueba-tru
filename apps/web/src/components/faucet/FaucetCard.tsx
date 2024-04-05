import { ConnectWallet, useConnectionStatus, useSigner } from "@thirdweb-dev/react";
import FaucetContract from '@/assets/contracts/faucet.json';
import { Contract } from "ethers";
import { useState } from "react";

export default function FaucetCard(): JSX.Element {
    const [isLoading, setIsLoading] = useState(false);
    const connectionStatus = useConnectionStatus();
    const signer = useSigner();
    const contract: Contract = new Contract(
        "0x23302a4f559398b68CDb1F5660a2D12032B70342",
        FaucetContract.abi,
        signer
    )

    const faucet = async () => {
        console.log(contract)
        try {
            setIsLoading(true);
            const tx = await contract.mintTokens();
            console.log('Transaction submitted:', tx.hash);

            const receipt = await tx.wait();
            console.log('Transaction confirmed:', receipt);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    return (
        <section className="w-full max-w-[700px] mx-auto flex flex-col gap-10 py-12 border rounded-lg px-10 z-[100] bg-background">
            <header className="text-center space-y-2">
                <h1 className="text-4xl font-bold">TRU Token Faucet</h1>
                <p className="opacity-70">Get TRU test tokens for building your next Dapp!</p>
            </header>
            {
                connectionStatus === "connected" ? (
                    <div className="flex flex-col justify-center items-center gap-3">
                        <p>Now get the TRU test tokens deposited to your wallet!</p>
                        <button className={`bg-accentPurple py-2 px-4 rounded-lg text-white font-bold ${isLoading ? "opacity-60 pointer-events-none" : "opacity-100"}`} onClick={faucet}>{isLoading ? "Loading..." : "Get Tokens"}</button>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center gap-3">
                        <p>Make sure your wallet is connected in order to deposit the tokens</p>
                        <ConnectWallet className="!bg-accentPurple !py-[10px] !text-white !font-bold" />
                    </div>
                )
            }
        </section>
    )
} 