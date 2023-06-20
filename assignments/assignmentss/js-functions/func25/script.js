
function longest_country(countries) {

	const arr1=[]

	countries.forEach(element => {arr1.push(element.length)
		
	});
	var max = arr1[0];
    var maxIndex = 0;

    for (var i = 1; i < arr1.length; i++) {
        if (arr1[i] > max) {
            maxIndex = i;
            
        }
    }

	console.log(maxIndex)

	return countries[maxIndex]


}


countries=["Australia", "Germany", "United States of America"]



console.log(longest_country(countries))
