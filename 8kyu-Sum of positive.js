function positiveSum(arr) {
	var sum = 0;
 	for(let i = 0; i < arr.length; i++) {
  		if([i] > 0) {
  			return sum += arr[i];
  		}
  	}
}