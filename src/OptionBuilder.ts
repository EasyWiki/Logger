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
    
    for (const key in keys)
    {
        if (!options2[keys[key]])
        {
            newOptions[keys[key]] = options1[keys[key]];
        }
        else
        {
            newOptions[keys[key]] = options2;
        }
    }

    return newOptions;
}
