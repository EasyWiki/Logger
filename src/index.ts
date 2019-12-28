import moment from 'moment';
import fs from '@easywiki/betterfilesystem';
import path from 'path';

import Colors from './Colors';
import { OptionBuilder } from './OptionBuilder';

export class Logger
{
    public static Logger : Logger;

    private _options : LoggerOptions;
    private _entries : number = 0;
    private _fileName : string;

    private constructor(options: LoggerOptions)
    {
        this._options = options;

        this._fileName = this.GetDateString("YYYY-MM-DD_HH-mm-ss", true) + ".log";
        this.CeateFile();
    }

    public Log(origin: string, message: string)
    {
        const cEntry = Colors.Foreground.Yellow + this.GetDateString() + origin + Colors.Reset + ": " + message;
        const entry = this.GetDateString() + origin + ": " + message;

        console.log(cEntry);
        this.AppendToFile(entry);
    }

    public Error(origin: string, message: string, error?: Error)
    {
        const cEntry = Colors.Foreground.Red + this.GetDateString() +
            Colors.Background.Red + Colors.Foreground.White + origin + Colors.Reset + ": " + message;

        const entry = this.GetDateString() + origin + ": " + message;

        console.log(cEntry);
        this.AppendToFile(entry);

        if(error)
        {
            if(this._options.logErrors)
            {
                console.log(Colors.Foreground.Red + error.stack + Colors.Reset);
            }

            if(this._options.logErrorsInFile)
            {
                this.AppendToFile(error.stack as string, true);
            }
        }
    }

    private GetDateString(format = "DD/MM/YYYY HH:mm:ss", filename = false)
    {
        if(this._options.addDate || filename)
        {
            if(filename)
                return moment().format(format);
            else
                return "[" + moment().format(format) + "] ";
        }
        else
            return "";
    }

    private CeateFile()
    {
        fs.MakeFolder(this._options.logFolder);
        fs.WriteFile(path.join(this._options.logFolder, this._fileName), 
            this.GetDateString("DD/MM/YYYY HH:mm:ss", true) + "\n");
    }

    private AppendToFile(entry: string, isError = false)
    {
        if(!isError) this._entries++;

        fs.AppendFile(path.join(this._options.logFolder, this._fileName), entry + "\n");

        if(this._entries >= this._options.maxEnties)
        {
            this._fileName = this.GetDateString("YYYY-MM-DD_HH-mm-ss", true) + ".log";
            this.CeateFile();
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