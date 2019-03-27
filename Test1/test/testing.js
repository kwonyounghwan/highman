/*
const BlbToken = artifacts.require("./BlbToken.sol");

contract("BlbToken", function(accounts) {

  it("Data Verification", async () => {

    BlbToken.deployed().then(function(instance) {
      return instance.getUserEth().call("0xA170fE267AEC499a202712dBa69BE3e56213F8dF");
    });
      .then(function(value) {
        assert.equal(value, 0, "value is 0");
      })
      .catch(e => {
        console.log(e);
      });

    let bi;
    beforeEach(async () => {
      bi = await BlbToken.getUserEth('0xA170fE267AEC499a202712dBa69BE3e56213F8dF')
    })

    console.log(bi);

  //  console.log(BlbToken.deployed().then(function(instance){return instance.getContractEth.call();}));
  //  console.log(BlbToken.deployed().then(function(instance){return instance.createToken('0x521D71b05e607af530306067b7a63F396280c268',10);}));
  //  console.log(BlbToken.deployed().then(function(instance){return instance.getUserEth.call('0xA170fE267AEC499a202712dBa69BE3e56213F8dF');}));

  });

});
*/

var BlbToken = artifacts.require("BlbToken");

contract("BlbToken", function(accounts) {
/*
  it("test 1", async function() {
    var t = await BlbToken.deployed();
    await t.createToken(5000000,"TST","TST",18);
    assert("CreateToken");
  });

  it("test 2", async function() {
    var t = await BlbToken.deployed();
    var l = await t.getUserEth.call("0xA170fE267AEC499a202712dBa69BE3e56213F8dF");
    console.log(l);
    assert.equal(1,1, 'should be empty');
  });
*/

  it("should value is 123 when i put the 123 about value", async () => {
    try {

      return BlbToken.deployed().then(function(instance) {
        createToken = instance;
        return createToken.createToken(5000000,"TST","TST",18);
      }).then(function(createToken) {
        console.log(createToken);
        //assert.equal(test, "test111", "sets the total supply");
      })

      return BlbToken.deployed().then(function(instance) {
        getContractEth = instance;
        return getContractEth.getContractEth.call("0xA170fE267AEC499a202712dBa69BE3e56213F8dF");
      }).then(function(getContractEth) {
        console.log(getContractEth);
//        assert.equal(test, "test111", "sets the total supply");
      })


      //BlbToken.deployed().then(function(instance){return instance.getContractEth.call("0xA170fE267AEC499a202712dBa69BE3e56213F8dF");})

    } catch (e) {
      console.log(e);
    }
  });


});

/*
var Test = artifacts.require("Test");

contract("Test", function(accounts) {

//  console.log("=====================Start");
//  console.log(Test.deployed().then(function(instance){return instance.get.call();}));
//  console.log(Test.deployed().then(function(instance){return instance.set(123);}));
//  console.log(Test.deployed().then(function(instance){return instance.get.call();}));
//  console.log("=====================End");

Test.deployed().then(function(instance){return instance.set(123);});

  it("should value is 0", function() {
    Test.deployed().then(function(instance) {
        return instance.get.call();
      })
      .then(function(value) {
        assert.equal(value, 0, "value is 0");
      })
      .catch(e => {
        console.log(e);
      });
  });
  it("should value is 123 when i put the 123 about value", async () => {
    try {
      let instance = await Test.deployed();
      await instance.set(123);

      let instance2 = await Test.deployed();
      let value = await instance2.get.call();

      console.log(value);

      assert.equal(value, 123, "value is 123"); // result value

    } catch (e) {
      console.log(e);
    }
  });

});
*/
