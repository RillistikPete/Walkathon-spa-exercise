"use strict";

console.log("main.js");


$("#donate").click(function(){
	console.log("click works");
	Donor.addDonor();
});


$("#cancel").click(function(){
	Donor.clearDonor();
});
