const a = {
    "Name": "Start Industries",
    "Year Founded": 2000,
    "Addresses": [{
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
    const x = key.split(' ')[0].toLowerCase();
    const y = key.split(' ')[1];
    const newKey = y?x+y:x
    console.log(newKey);
    a[newKey] = a[key];
    delete a[key]
})
console.log(a)
