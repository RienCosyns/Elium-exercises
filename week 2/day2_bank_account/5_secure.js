/*
Imagine we're a bank and we have a lot of accounts!

Write a program for an ATM machine.

Create functionality so that only if the user supplies the correct PIN code,
he/she gets access to the showBalance, deposit and withdraw functions.

If the pincode does not match, output a message saying 'Incorrect pincode'

*/

var bank = [
	{name: 'Adrian', amount: 7800, pincode: 2345},
	{name: 'Anja', amount: 14600, pincode: 5630},
	{name: 'AryAnto', amount: 5400, pincode: 9395},
	{name: 'Avery', amount: 10300, pincode: 2355},
	{name: 'Cathrin', amount: 7800, pincode: 3436},
	{name: 'Evan', amount: 13500, pincode: 3745},
	{name: 'Franklyn', amount: 15300, pincode: 4969},
	{name: 'Gabriel', amount: 5400, pincode: 3906},
	{name: 'George', amount: -5400, pincode: 2123},
	{name: 'Jarrod', amount: 7600, pincode: 1205},
	{name: 'Kirill', amount: 8600, pincode: 3402},
	{name: 'Laurens', amount: 9400, pincode: 3060},
	{name: 'Nisha', amount: 4300, pincode: 3583},
	{name: 'Ola', amount: 5400, pincode: 2873},
	{name: 'Rien', amount: 12000, pincode: 7323},
	{name: 'Simas', amount: 11500, pincode: 5321},
	{name: 'Yasir', amount: 14600, pincode: 4382},
]


function enterPinCode(username, pincode, func, amount) {
	var pincodeIsValid = false;
	var returnMessage = "";

	bank.forEach(function(val){
		if (val.name === username){
			if (val.pincode === pincode){
				returnMessage =  func(username, amount);
			}else{
				returnMessage =  "Incorrect pincode"
			}
		}
	})
	return returnMessage;
}


function showBalance(username) {
	// the code from previous exercise
	var userAccount = bank.filter(function(user){
		return user.name === username
	});

	return userAccount[0].amount;
}

function deposit(username, amountToDeposit) {
	for (var i = 0; i < bank.length; i++){
		if (bank[i].name === username){
			bank[i].amount += amountToDeposit;
		}
	}
}

function withdraw(username, amountToWithdraw) {
	for (var i = 0; i < bank.length; i++){
		if (bank[i].name === username){
			if (amountToWithdraw <= bank[i].amount){
				bank[i].amount -= amountToWithdraw;
				return "Withdrawal of " + amountToWithdraw + " accepted";
			}else{
				return "Unsufficient funds"
			}	
		}
	}
}



console.log(enterPinCode('Laurens', 2356, withdraw, 1000))
// outputs Incorrect pincode
console.log(enterPinCode('Laurens', 3060, withdraw, 1000))
// outputs Withdrawal of 1000 accepted
console.log(enterPinCode('Laurens', 3060, showBalance))
// outputs 8400












