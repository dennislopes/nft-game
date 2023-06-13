const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
      ["Akuma", "Blanka", "Ryu", "Ken"],
          [
              //"https://i.imgur.com/FJxla2Q.png",
              //"https://i.imgur.com/Onziibu.png",
              //"https://i.imgur.com/D6sH0yq.png",
              //"https://i.imgur.com/mWGddxW.png",
              "QmSD8TCqHvpUwmjwSxY5iA4MEcskjNRdgpmXghKzDb9qkH",
              "QmfY7isoaXMEUdqX7dAE7bnJKUayvi23SxdqDJ6vPhKXdQ",
              "QmPRLLpBcJGZpN3VMN9iWG4TAZpzHfQNknXeQ5pvw3isNk",
              "QmcGYeoEYnUEUKvuWDj5fEVwqsBtjBmBRoxxHVd33YtLkB",
          ],
      [800, 700, 400, 430], // HP values
      [200, 300, 140, 150], // Attack damage values
      "M. Bison",
      //"https://i.imgur.com/cq2kwyi.jpg",
      "QmbW2BzpRjB9y5XRkP8MPFuevSv1T5JhmfQy9qPTWwgzzb",
      20000,
      100
    );
    await gameContract.deployed();
    console.log("Contrato implantado no endereço:", gameContract.address);
    
    //let txn;
    //txn = await gameContract.mintCharacterNFT(2);
    //await txn.wait();
    
    //txn = await gameContract.attackBoss();
    //await txn.wait();
    
    //txn = await gameContract.attackBoss();
    //await txn.wait();

    //txn = await gameContract.attackBoss();
    //await txn.wait();
    
    //txn = await gameContract.attackBoss();
    //await txn.wait();

    //console.log("Done!");
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