import fs from 'node:fs';

const readFileFrom = (path) => {
    const json = fs.readFileSync(path, "utf-8");
    return JSON.parse(json)
}

export const writeFileFrom = (path, newData) => {
    const data = readFileFrom(path)
    // console.log(data)
    fs.writeFileSync(path, JSON.stringify({...newData}))
}


// writeFileFrom("./data.json", possessions)