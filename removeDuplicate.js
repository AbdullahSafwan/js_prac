/**
Remove Duplicates (Sorted Array)
Given a sorted array, remove duplicates in-place so each element appears once.

Input: [1,1,2,2,3]
Output: [1,2,3]


**/



function approach1() {

    const x = [1, 1, 2, 2, 3]
    const y = []

    for (let i = 0; i < x.length; i++) {

        if (!y.includes(x[i])) {
            y.push(x[i])
        }
    }
    console.log(y)

}

function approach2() {

    const x = [1, 1, 2, 2, 3]
    let uniqueIndex = 0

    for (let i = 1; i < x.length; i++) {
        if (x[i] !== x[uniqueIndex]) {
            uniqueIndex++
            x[uniqueIndex] = x[i]
        }


    }

    x.length = uniqueIndex + 1
    console.log(x)

}



function approach3() {

    const x = [1, 1, 2, 2, 3]

    let duplicates = 0

    for (let i = 1; i < x.length; i++) {
        if (x[i] === x[i - 1]) {
            duplicates++

        } else {
            x[i - duplicates] = x[i]
        }
    }
    x.length = x.length - duplicates

    console.log(x)
}


approach3()