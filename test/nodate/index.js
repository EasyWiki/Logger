const {Logger} = require('../../dist');

Logger.Create({
    addDate: false
});

Logger.Logger.Log("NoDate", "Test log message!");
Logger.Logger.Error("NoDate", "Test error message without attached error!");

const err = new Error("Test error");
Logger.Logger.Error("NoDate", "Test error message with attached error!", err);