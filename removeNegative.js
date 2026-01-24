/**
Replace all negative numbers with 0 while keeping order.

Input: [-1,2,-3,4]
Output: [0,2,0,4]

**/


function approach1() {

    const x = [-1, 2, -3, 4]

    for (let num = 0; num < x.length; num++) {
        if (x[num] < 0) x[num] = 0
    }
    console.log(x)
}


function approach2() {
    const x = [-1, 2, -3, 4]

    const res = x.map(i => i < 0 ? 0 : i)
    console.log(res)
}

approach2()