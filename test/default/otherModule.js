const {Logger} = require('../../dist');

module.exports = () => {
    Logger.Logger.Log("Module", "Log from another module.");
};