const {Logger} = require('../../dist');

Logger.Create({
    logErrors: false,
    logErrorsInFile: false
});
Logger.Logger.Log("NoError", "Test log message!");
Logger.Logger.Error("NoError", "Test error message without attached error!");

const err = new Error("Test error");
Logger.Logger.Error("NoError", "Test error message with attached error!", err);