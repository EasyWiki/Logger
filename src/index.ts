import Colors from './Colors';
import { OptionBuilder } from './OptionBuilder';
import moment from 'moment';

export class Logger
{
    public static Logger : Logger;

    private _options : LoggerOptions;

    private constructor(options: LoggerOptions)
    {
        this._options = options;
    }

    public Log(origin: string, message: string)
    {
        const cEntry = Colors.Foreground.Yellow + this.GetDateString() + origin + Colors.Reset + ": " + message;
        const entry = this.GetDateString() + origin + ": " + message;

        console.log(cEntry);

        // Append to file
    }

    public Error(origin: string, message: string, error?: Error)
    {
        const cEntry = Colors.Foreground.Red + this.GetDateString() +
            Colors.Background.Red + Colors.Foreground.White + origin + Colors.Reset + ": " + message;

        const entry = this.GetDateString() + origin + ": " + message;

        console.log(cEntry);

        // Append to file

        if(error)
        {
            if(this._options.logErrors)
            {
                console.log(Colors.Foreground.Red + error.stack + Colors.Reset);
            }
        }
    }

    private GetDateString(format = "DD/MM/YYYY HH:mm:ss")
    {
        if(this._options.addDate)
            return "[" + moment().format(format) + "] ";
        else
            return "";
    }

    private static Create(options?: LoggerOptions)
    {
        if(!this.Logger)
        {
            this.Logger = new Logger(OptionBuilder(options));
            return this.Logger;
        }
    }
}