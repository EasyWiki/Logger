import Colors from './Colors';

export class Logger
{
    public static Logger : Logger;

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
            console.log(error.message);
            console.log(error.stack);
        }
    }

    private static Create()
    {
        this.Logger = new Logger();
        return this.Logger;
    }
}