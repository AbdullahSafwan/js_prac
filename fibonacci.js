function fibonacci(num){

	switch (num){
		case 1:
			return console.log(2)
			break;
		case 0:
			return console.log(0)
			break
		case -1:
			return console.log('not a number')}
	let arr=[0,1]
	
//	if (!arr[num-2]) arr=[0]

//	if (!arr[num-1]) {arr[num-1].push(1)}

	for (let i=2; i < num; i++){
		arr.push(arr[i-2]+arr[i-1])
	}
	console.log(arr)
}


fibonacci(7)
