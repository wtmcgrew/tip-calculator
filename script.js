const amount = document.getElementById("amount");
const guests = document.getElementById("guests");
const tipPercentage = document.getElementById("tip");
const tipAmount = document.getElementById("tip-amount");


/*
Function code to calculate tip
Bill amount * tip percentage / number of gusts
Then reset the values to empty strings
Test case to check if fields are empty or show tip amout
*/
calculateBill = () => {
	const tip = ((amount.value * tip.value) / (guests.value)).toFixed(2); // toFixed() returns just 2 decimal places
	amount.value = "";
	guests.value = "";
	tip.value = "";

	if(tip === "NaN") { // Test case if input fields are left empty
		tipAmount.innerHTML = "Tip $0 each";
		showTipAmount();
	} else {
		tipAmount.innerHTMl = "Tip $" + tip + " each";
		showTipAmount();
	}
}

showTipAmount = () => {
	let show = tipAmount;
	show.className = "show";
	setTimeout(function(){show.className = show.className.replace("show", "");}, 3000);
}