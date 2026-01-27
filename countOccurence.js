/** Input:  nums = [1, 2, 2, 3, 1, 2]
Output: { "1": 2, "2": 3, "3": 1 }
**/


const nums = [1, 2, 2, 3, 1, 2]


console.log(nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1
    return acc
}, {}));
