//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumbrId(humberIdIn){
	"use strict";
	let pattern = /^(n|N)\d{8}$/;
	let flag = false;
	if(pattern.test(humberIdIn)){
		flag = true;
	}
	return flag;
}


