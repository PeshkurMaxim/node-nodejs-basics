const parseArgs = () => {
    let resStr = '';

    process.argv.slice(2).forEach( (arg, index) => {

        if (arg.slice(0,2) === '--') {

            const argFlag = arg.slice(2);
            const argValue = process.argv[index + 3];
            resStr += `${argFlag} is ${argValue}, `;

        }
    });

    console.log(resStr.slice(0, -2));
};

parseArgs();