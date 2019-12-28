const defaultOptions : LoggerOptions = {
    addDate: true,
    logErrors: true
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
    
    for (const key in keys)
    {
        if (options2.hasOwnProperty(key))
        {
            options1[key] = options2[key];
        }
    }

    return options1;
}
