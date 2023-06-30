const amount = document.querySelector("#amount");
const tipPercentage = document.querySelector("#tip");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");

// Calculation of bill total and resetting empty values for variables
calculateBillPlusTip = () => {
	const totalBill = Number(((amount.value * tipPercentage.value)) + Number((amount.value))).toFixed(2);
	amount.value = "";
	tipPercentage.value = "";

	if(totalBill === "NaN") {
		totalAmount.textContent = "$0.00 due";
		showTotalAmount();
	}
	else {
		totalAmount.textContent = "Bill Total $" + totalBill;
		showTotalAmount();
	}
}

// Calculation of bill total and resetting empty values for variables
calculateTip = () => {
	const tip = (amount.value * tipPercentage.value).toFixed(2);
	amount.value = "";
	tipPercentage.value = "";

	if(tip === "NaN") {
		tipAmount.textContent = "Tip $0.00";
		showTipAmount();
	}
	else {
		tipAmount.textContent = "Tip $" + tip;
		showTipAmount();
	}
}

// 
showTipAmount = () => {
	let showTip = document.querySelector("#tip-amount");
  	// Add the "show-tip" class to DIV
	showTip.className = "show-tip";
	setTimeout(function(){ showTip.className = showTip.className.replace("show-tip", ""); }, 3000); // Will show for 3 seconds using setTimeout()
}

showTotalAmount = () => {
	let showTotal = document.querySelector("#total-amount");
  	// Add the "show-total" class to DIV
	showTotal.className = "show-total";
	setTimeout(function(){ showTotal.className = showTotal.className.replace("show-total", ""); }, 3000); // Will show for 3 seconds using setTimeout()
}