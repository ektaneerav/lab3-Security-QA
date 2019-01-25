//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.
function test__checkHumbrId(valueIn, expected){
	"use strict";
	let result = checkHumbrId(valueIn);
	let resultVal;
	if(result === expected){
		resultVal = "<span style='color:green'>==PASSED== </span>" ;
	}
	else{
		resultVal = "<span style='color:red'>xxFAILEDxx</span>";
	}

	let msg = "Value tested: " + valueIn + " Expected result: " + expected + " "+ resultVal +"<br/>"; 

	let msgBox = document.getElementById("data");
	msgBox.innerHTML += msg;

}

test__checkHumbrId("ASDFVCDS",true);//TEST TO FAIL
test__checkHumbrId("n12345678",true);//TEST TO PASS
test__checkHumbrId("N12345678",false);//TEST TO PASS
test__checkHumbrId("ASDFVCDS",false);
test__checkHumbrId("n45467",false);
test__checkHumbrId("N76876",false);
test__checkHumbrId("n9090909090",false);
test__checkHumbrId("N54895489549",false);
