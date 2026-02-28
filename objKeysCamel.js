const a = {
    "Name": "Start Industries",
    "Year Founded 1 WWW": 2000,
    "Addresses home": [{
        "Address Type": "Home",
        "Street Name": "Virginia",
        "Zip Code": 12345
    }, {
        "Address Type": "Work",
        "Street Name": "Maryland",
        "Zip Code": 67890
    }]
}


const toCamelCase = (obj) => {

    Object.keys(obj).forEach(key => {
        let newKey
        const splittedKey = (key.split(' '))
        if (splittedKey.length > 1) {
            newKey = splittedKey[0].toLowerCase();
            for (let i = 1; i < splittedKey.length; i++) {

                newKey += (splittedKey[i].at(0).toUpperCase() + splittedKey[i].slice(1).toLowerCase())
            }
        } else {
            newKey = splittedKey[0].toLowerCase();
        }
        obj[newKey] = obj[key];
        delete obj[key]
    })
    console.log(obj)

}

toCamelCase(a)
