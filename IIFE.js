"use strict";

// This is the IIFE that holds the private donor information

var Donor = (function (){

	const donorPerson = {name: "John Donut", pledge: 70, type: "per lap"};

	return {

			addDonor: function(){
				donorPerson.name = $("#fullname").val();
				console.log("this");
				donorPerson.pledge = $("#amount").val();
				if ($("#lump").prop("checked")){
					donorPerson.type = "Lump Sum";
				} else {
					donorPerson.type = "per lap";
					}
				Donor.setDonor();
				return donorPerson;

			},

			setDonor: function(){
				console.log("function setDonor called");
				let newTd = "";
				var tdName = document.getElementById("name");
				var tdEmail = document.getElementById("emailTd");
				var tdPledge = document.getElementById("pledge");
				var tdType = document.getElementById("type");
					tdName.innerHTML = `${donorPerson.name}`;
					tdEmail.innerHTML = document.getElementById("email").value;
					tdPledge.innerHTML = `${donorPerson.pledge}`;
					tdType.innerHTML = `${donorPerson.type}`;
			},

			clearDonor: function(){
				document.getElementById("fullname").value = "";
				document.getElementById("amount").value = "";
				document.getElementById("email").value = "";
				// $("#fullname").val() = "";
				// $("#amount").val() = "";
				// $("#email").val() = "";
				document.getElementById("name").value = "";
				document.getElementById("pledge").value = "";

			}


		}

})();
