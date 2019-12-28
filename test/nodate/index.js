const {Logger} = require('../../dist');

Logger.Create({
    addDate: false
});

Logger.Logger.Log("Test", "Test log message!");
Logger.Logger.Error("Test", "Test error message without attached error!");

const err = new Error("Test error");
Logger.Logger.Error("Test", "Test error message with attached error!", err);