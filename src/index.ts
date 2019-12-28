import Colors from './Colors';
import { OptionBuilder } from './OptionBuilder';

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
        const cEntry = Colors.Foreground.Yellow + origin + Colors.Reset + ": " + message;
        const entry = origin + ": " + message;

        console.log(cEntry);

        // Append to file
    }

    public Error(origin: string, message: string, error?: Error)
    {
        const cEntry = Colors.Background.Red + Colors.Foreground.White + origin + 
            Colors.Reset + ": " + message;

        const entry = origin + ": " + message;

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

    private static Create(options?: LoggerOptions)
    {
        if(!this.Logger)
        {
            this.Logger = new Logger(OptionBuilder(options));
            return this.Logger;
        }
    }
}