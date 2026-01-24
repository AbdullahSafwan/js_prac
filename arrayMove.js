/**
Move all zeros in an array to the end, maintaining order of non-zero elements.
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
**/

function arrayMove1() {
    const x = [0, 1, 0, 3, 12]
    const y = []

    x.map(i => {
        if (i !== 0) y.push(i)


    })
    x.map(i => {
        if (i === 0) y.push(i)
    })
    console.log(y)
}


function arrayMove2() {

    const x = [0, 1, 0, 3, 12]
    const y = []

    let zeroCount = 0;


    for (const num of x) {
        if (num == 0) zeroCount++;

        else y.push(num)

    }

    while (zeroCount--) {
        y.push(0)
    }

    console.log(y)
}


function arrayMove3() {
    const x = [0, 1, 0, 3, 12]
    let insertPos = 0
    
    for (let i = 0; i < x.length; i++) {
        if(x[i] !== 0 ){
		x[insertPos++] = x[i]
        }
    }
    while (insertPos< x.length){
	x[insertPos++] = 0
    }

	console.log(x)
}

arrayMove3();
