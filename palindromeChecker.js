function palindrome(str) {
	let lowerCase = str.toLowerCase(); //Strings are immutable need to assign it a variable
	let removeNonAlpha = lowerCase.replace(/[\W_]/gi, ""); //remove non alpha-numeric characters
	let reversedString = "";

	for (let i = removeNonAlpha.length - 1; i >= 0; i--) {
		let characters = removeNonAlpha[i]; //reverse the string using a decrementing for loop
		//jks I was attempting to push and join the values which wont work in a loop
		//Just add them with +=
		reversedString += characters;
		if (reversedString === removeNonAlpha) {
			return true;
		}
	}
	return false;
}
