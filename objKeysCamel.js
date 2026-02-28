const a = {
    "Name": "Start Industries",
    "Year Founded 1": 2000,
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


Object.keys(a).map(key => {
    let newKey
    const splittedKey = (key.split(' '))
    if (splittedKey.length > 1) {
        newKey = splittedKey[0].toLowerCase();
        for (let i = 1; i < splittedKey.length; i++) {
            newKey += splittedKey[i]
        }
    } else {
        newKey = splittedKey[0].toLowerCase();
    }
    a[newKey] = a[key];
    delete a[key]
})
console.log(a)
