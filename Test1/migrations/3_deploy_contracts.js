var BlbToken = artifacts.require("./BlbToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BlbToken);
};
