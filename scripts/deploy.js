async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const NFTCollection = await ethers.getContractFactory("NFTCollection");
    const nftCollection = await NFTCollection.deploy();

    // Wait for deployment to complete
    await nftCollection.waitForDeployment();

    // Get the contract address (new way in Ethers.js v6+)
    const contractAddress = await nftCollection.getAddress();
    console.log("NFTCollection deployed to:", contractAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });