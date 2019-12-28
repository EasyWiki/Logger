const defaultOptions : LoggerOptions = {
    addDate: true,
    logErrors: false,
    maxEnties: 100000,
    logFolder: "logs",
    logErrorsInFile: true
}

export function OptionBuilder(options?: LoggerOptions)
{
    if(options)
    {
        return Merge(defaultOptions, options) as LoggerOptions;
    }
    else
    {
        return defaultOptions;
    }
}

function Merge(options1: any, options2: any)
{
    const keys = Object.keys(options1);
    let newOptions = {} as any;
    
    for (const i in keys)
    {
        const key = keys[i];
        if (options2.hasOwnProperty(key))
        {
            newOptions[key] = options2[key];
        }
        else
        {
            newOptions[key] = options1[key];
        }
    }

    return newOptions;
}
