const {Logger} = require('../../dist');

Logger.Create({
    logErrors: false
});
Logger.Logger.Log("Error", "Test log message!");
Logger.Logger.Error("Error", "Test error message without attached error!");

const err = new Error("Test error");
Logger.Logger.Error("Error", "Test error message with attached error!", err);