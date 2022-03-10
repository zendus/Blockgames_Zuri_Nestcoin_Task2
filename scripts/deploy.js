const main = async () => {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with account: ", deployer.address);

  const HelloWorldFactory = await hre.ethers.getContractFactory("HelloWorld");
  const HelloWorld = await HelloWorldFactory.deploy();
  await HelloWorld.deployed();

  console.log("HelloWorld address: ", HelloWorld.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();
