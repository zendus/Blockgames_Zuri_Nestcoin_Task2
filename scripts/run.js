const main = async () => {
  const [owner, _randomPerson] = await hre.ethers.getSigners();
  const HelloWorldContractFactory = await hre.ethers.getContractFactory(
    "HelloWorld"
  );
  const HelloWorldContract = await HelloWorldContractFactory.deploy();
  await HelloWorldContract.deployed();

  console.log("Contract deployed to:", HelloWorldContract.address);
  console.log("Contract deployed by:", owner.address);

  let incNum = await HelloWorldContract.inc();
  incNum = await HelloWorldContract.inc();
  incNum = await HelloWorldContract.inc();

  // try getting num with owner address
  let TotalNum = await HelloWorldContract.getNum();
  console.log(TotalNum);

  // Try getting num with random address, throws error due to require constraint
  //   TotalNum = await HelloWorldContract.connect(_randomPerson).getNum();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
