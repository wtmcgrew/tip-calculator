const amount = document.querySelector("#amount");
const guests = document.querySelector("#guests");
const tipPercentage = document.querySelector("#tip");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");

calculateBillPlusTip = () => {
	const totalBill = ((amount.value * tipPercentage.value) + (amount.value) / (guests.value)).toFixed(2);
	amount.value = "";
	guests.value = "";
	tipPercentage.value = "";

	if(totalBill === "NaN") {
		totalAmount.textContent = "$0 due"
		showTotalAmount();
	}
	else {
		totalAmount.textContent = "Bill Total $ " + totalBill;
		showTotalAmount();
	}

}

calculateTip = () => {
	const tip = ((amount.value * tipPercentage.value) / (guests.value)).toFixed(2);
	amount.value = "";
	guests.value = "";
	tipPercentage.value = "";

	if(tip === "NaN") {
		tipAmount.textContent = "Tip $0 each";
		showTipAmount();
	}
	else {
		tipAmount.textContent = "Tip $" + tip + " each";
		showTipAmount();
	}
}

showTipAmount = () => {
	let showTip = document.querySelector("#tip-amount");
  	// Add the "show-tip" class to DIV
	showTip.className = "show-tip";
	setTimeout(function(){ showTip.className = showTip.className.replace("show-tip", ""); }, 3000);
}

showTotalAmount = () => {
	let showTotal = document.querySelector("#total-amount");
  	// Add the "show-total" class to DIV
	showTotal.className = "show-total";
	setTimeout(function(){ showTotal.className = showTotal.className.replace("show-total", ""); }, 3000);
}