const parseEnv = () => {
    let resStr = '';
    const env = process.env;

    Object.keys(env).forEach(key => {
        if(key.includes("RSS"))
            resStr += `${key}=${env[key]}; `
    });

    console.log(resStr.slice(0, -2));
};

parseEnv();