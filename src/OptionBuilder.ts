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
    let newOptions = {} as any;
    
    for (const key in keys)
    {
        if (!options2[key])
        {
            newOptions[key] = options1[key];
        }
        else
        {
            newOptions[key] = options2;
        }
    }

    return newOptions;
}
