/*Copyright (c) 2012, Rubén Alonso de la Madrid
All rights reserved.

Redistribution and use in source and binary forms, with
or without modification, are permitted provided that
the following conditions are met:

  * Redistributions of source code must retain the above
    copyright notice, this list of conditions and the 
    following disclaimer.
  * Redistributions in binary form must reproduce the
    above copyright notice, this list of conditions and
    the following disclaimer in the documentation and/or
    other materials provided with the distribution.
  * Neither the name of the copyright holders nor
    the names of its contributors may be used to endorse
    or promote products derived from this software without
    specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.*/


/*Image for valid*/
var swValidImage = '<img src="img/tick.png" alt="ok" />';

/*Image for no valid*/
var swNoValidImage = '<img src="img/wrong.gif" alt="wrong" />';

/*Regular Expressions*/
var swRegExPassword = /^[a-zA-Z0-9]+$/;

/* Custom Expressions -- Template Custom Regular Expresions

function SWCustom1(val,sizeMin,sizeMax,inputClassValid,inputClassNoValid,imageId,image,msgId,msgClassValid,msgClassNoValid,msgTextValid,msgTextNoValid,ajaxArray)
{
	regExCustom = /^[a-zA-Z]+$/;
	if ((regExCustom.test(val.value) && (sizeMin == null || val.value.length >= sizeMin) && (sizeMax == null || val.value.length <= sizeMax)) || (sizeMin == 0 && val.value.length == 0)) {
		if(ajaxArray == null || (ajaxArray.length == 3 && SWAjax(ajaxArray,val)==true)) {
			if(inputClassValid != null)
				val.className = inputClassValid;
			if(image == 1 || image == 3)
				document.getElementById(imageId).innerHTML = swValidImage;
			else
				document.getElementById(imageId).innerHTML = "";
			if(msgClassValid != null)
				document.getElementById(msgId).className = msgClassValid;
			if(msgTextValid != null)
				document.getElementById(msgId).innerHTML = msgTextValid;
			val.correct = true;
		}
		else {
			if(inputClassNoValid != null)
				val.className = inputClassNoValid;
			if(image == 2 || image == 3)
				document.getElementById(imageId).innerHTML = swNoValidImage;
			else
				document.getElementById(imageId).innerHTML = "";
			if(msgClassNoValid != null)
				document.getElementById(msgId).className = msgClassNoValid;
			if(msgTextNoValid != null)
				document.getElementById(msgId).innerHTML = ajaxArray[3];
			val.correct = false;
		}
	}
	else {
		if(inputClassNoValid != null)
			val.className = inputClassNoValid;
		if(image == 2 || image == 3)
			document.getElementById(imageId).innerHTML = swNoValidImage;
		else
			document.getElementById(imageId).innerHTML = "";
		if(msgClassNoValid != null)
			document.getElementById(msgId).className = msgClassNoValid;
		if(msgTextNoValid != null)
			document.getElementById(msgId).innerHTML = msgTextNoValid;
		val.correct = false;
	}
}
*/

function SWLetters(val,sizeMin,sizeMax,inputClassValid,inputClassNoValid,imageId,image,msgId,msgClassValid,msgClassNoValid,msgTextValid,msgTextNoValid,ajaxArray)
{
	regExLetters = /^[a-zA-Z]+$/;
	if ((regExLetters.test(val.value) && (sizeMin == null || val.value.length >= sizeMin) && (sizeMax == null || val.value.length <= sizeMax)) || (sizeMin == 0 && val.value.length == 0)) {
		if(ajaxArray == null || (ajaxArray.length == 3 && SWAjax(ajaxArray,val)==true)) {
			if(inputClassValid != null)
				val.className = inputClassValid;
			if(image == 1 || image == 3)
				document.getElementById(imageId).innerHTML = swValidImage;
			else
				document.getElementById(imageId).innerHTML = "";
			if(msgClassValid != null)
				document.getElementById(msgId).className = msgClassValid;
			if(msgTextValid != null)
				document.getElementById(msgId).innerHTML = msgTextValid;
			val.correct = true;
		}
		else {
			if(inputClassNoValid != null)
				val.className = inputClassNoValid;
			if(image == 2 || image == 3)
				document.getElementById(imageId).innerHTML = swNoValidImage;
			else
				document.getElementById(imageId).innerHTML = "";
			if(msgClassNoValid != null)
				document.getElementById(msgId).className = msgClassNoValid;
			if(msgTextNoValid != null)
				document.getElementById(msgId).innerHTML = ajaxArray[3];
			val.correct = false;
		}
	}
	else {
		if(inputClassNoValid != null)
			val.className = inputClassNoValid;
		if(image == 2 || image == 3)
			document.getElementById(imageId).innerHTML = swNoValidImage;
		else
			document.getElementById(imageId).innerHTML = "";
		if(msgClassNoValid != null)
			document.getElementById(msgId).className = msgClassNoValid;
		if(msgTextNoValid != null)
			document.getElementById(msgId).innerHTML = msgTextNoValid;
		val.correct = false;
	}
}

function SWAlphanumeric(val,sizeMin,sizeMax,inputClassValid,inputClassNoValid,imageId,image,msgId,msgClassValid,msgClassNoValid,msgTextValid,msgTextNoValid,ajaxArray)
{
	regExAlphanumeric = /^[a-zA-Z0-9]+$/;
	if ((regExAlphanumeric.test(val.value) && (sizeMin == null || val.value.length >= sizeMin) && (sizeMax == null || val.value.length <= sizeMax)) || (sizeMin == 0 && val.value.length == 0)) {
		if(ajaxArray == null || (ajaxArray.length == 3 && SWAjax(ajaxArray,val)==true)) {
			if(inputClassValid != null)
				val.className = inputClassValid;
			if(image == 1 || image == 3)
				document.getElementById(imageId).innerHTML = swValidImage;
			else
				document.getElementById(imageId).innerHTML = "";
			if(msgClassValid != null)
				document.getElementById(msgId).className = msgClassValid;
			if(msgTextValid != null)
				document.getElementById(msgId).innerHTML = msgTextValid;
			val.correct = true;
		}
		else {
			if(inputClassNoValid != null)
				val.className = inputClassNoValid;
			if(image == 2 || image == 3)
				document.getElementById(imageId).innerHTML = swNoValidImage;
			else
				document.getElementById(imageId).innerHTML = "";
			if(msgClassNoValid != null)
				document.getElementById(msgId).className = msgClassNoValid;
			if(msgTextNoValid != null)
				document.getElementById(msgId).innerHTML = ajaxArray[3];
			val.correct = false;
		}
	}
	else {
		if(inputClassNoValid != null)
			val.className = inputClassNoValid;
		if(image == 2 || image == 3)
			document.getElementById(imageId).innerHTML = swNoValidImage;
		else
			document.getElementById(imageId).innerHTML = "";
		if(msgClassNoValid != null)
			document.getElementById(msgId).className = msgClassNoValid;
		if(msgTextNoValid != null)
			document.getElementById(msgId).innerHTML = msgTextNoValid;
		val.correct = false;
	}
}

function SWPassword(val,sizeMin,sizeMax,inputClassValid,inputClassNoValid,imageId,image,msgId,msgClassValid,msgClassNoValid,msgTextValid,msgTextNoValid)
{
	if ((swRegExPassword.test(val.value) && (sizeMin == null || val.value.length >= sizeMin) && (sizeMax == null || val.value.length <= sizeMax)) || (sizeMin == 0 && val.value.length == 0)) {
		if(inputClassValid != null)
			val.className = inputClassValid;
		if(image == 1 || image == 3)
			document.getElementById(imageId).innerHTML = swValidImage;
		else
			document.getElementById(imageId).innerHTML = "";
		if(msgClassValid != null)
			document.getElementById(msgId).className = msgClassValid;
		if(msgTextValid != null)
			document.getElementById(msgId).innerHTML = msgTextValid;
		val.correct = true;
	}
	else {
		if(inputClassNoValid != null)
			val.className = inputClassNoValid;
		if(image == 2 || image == 3)
			document.getElementById(imageId).innerHTML = swNoValidImage;
		else
			document.getElementById(imageId).innerHTML = "";
		if(msgClassNoValid != null)
			document.getElementById(msgId).className = msgClassNoValid;
		if(msgTextNoValid != null)
			document.getElementById(msgId).innerHTML = msgTextNoValid;
		val.correct = false;
	}
}

function SWRePassword(val,passId,inputClassValid,inputClassNoValid,imageId,image,msgId,msgClassValid,msgClassNoValid,msgTextValid,msgTextNoValid)
{
	if (document.getElementById(passId).value == val.value) {
		if(inputClassValid != null)
			val.className = inputClassValid;
		if(image == 1 || image == 3)
			document.getElementById(imageId).innerHTML = swValidImage;
		else
			document.getElementById(imageId).innerHTML = "";
		if(msgClassValid != null)
			document.getElementById(msgId).className = msgClassValid;
		if(msgTextValid != null)
			document.getElementById(msgId).innerHTML = msgTextValid;
		val.correct = true;
	}
	else {
		if(inputClassNoValid != null)
			val.className = inputClassNoValid;
		if(image == 2 || image == 3)
			document.getElementById(imageId).innerHTML = swNoValidImage;
		else
			document.getElementById(imageId).innerHTML = "";
		if(msgClassNoValid != null)
			document.getElementById(msgId).className = msgClassNoValid;
		if(msgTextNoValid != null)
			document.getElementById(msgId).innerHTML = msgTextNoValid;
		val.correct = false;
	}
}

function SWEmail(val,sizeMin,sizeMax,inputClassValid,inputClassNoValid,imageId,image,msgId,msgClassValid,msgClassNoValid,msgTextValid,msgTextNoValid,ajaxArray)
{
	regExEmail =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if ((regExEmail.test(val.value) && (sizeMin == null || val.value.length >= sizeMin) && (sizeMax == null || val.value.length <= sizeMax)) || (sizeMin == 0 && val.value.length == 0)) {
		if(ajaxArray == null || (ajaxArray.length == 3 && SWAjax(ajaxArray,val)==true)) {
			if(inputClassValid != null)
				val.className = inputClassValid;
			if(image == 1 || image == 3)
				document.getElementById(imageId).innerHTML = swValidImage;
			else
				document.getElementById(imageId).innerHTML = "";
			if(msgClassValid != null)
				document.getElementById(msgId).className = msgClassValid;
			if(msgTextValid != null)
				document.getElementById(msgId).innerHTML = msgTextValid;
			val.correct = true;
		}
		else {
			if(inputClassNoValid != null)
				val.className = inputClassNoValid;
			if(image == 2 || image == 3)
				document.getElementById(imageId).innerHTML = swNoValidImage;
			else
				document.getElementById(imageId).innerHTML = "";
			if(msgClassNoValid != null)
				document.getElementById(msgId).className = msgClassNoValid;
			if(msgTextNoValid != null)
				document.getElementById(msgId).innerHTML = ajaxArray[3];
			val.correct = false;
		}
	}
	else {
		if(inputClassNoValid != null)
			val.className = inputClassNoValid;
		if(image == 2 || image == 3)
			document.getElementById(imageId).innerHTML = swNoValidImage;
		else
			document.getElementById(imageId).innerHTML = "";
		if(msgClassNoValid != null)
			document.getElementById(msgId).className = msgClassNoValid;
		if(msgTextNoValid != null)
			document.getElementById(msgId).innerHTML = msgTextNoValid;
		val.correct = false;
	}
}

function SWRequiredFields(fields)
{
	for(i=0; i <fields.length; i++) {
		if(!(fields[i].correct))
			return false;
	}
	return true;
}

function SWAjax(ajaxArray,val)
{
	var xmlhttp;
	
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			return xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST",ajaxArray[0],true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(ajaxArray[1]+"="+val.value);
}