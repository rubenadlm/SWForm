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


/*Style for valid*/
var swValidImage = '<img src="img/tick.png" alt="ok" />';

/*Style for no valid*/
var swNoValidImage = '<img src="img/wrong.gif" alt="wrong" />';

/*Regular Expressions*/
var swRegExAlphanumeric = /^[a-zA-Z0-9]+$/;
var swRegExEmail =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

/* Custom Expressions -- Template Custom Regular Expresions
var swRegExCustom1 =/^[a]+$/;

function SWCustom1(val,inputClassValid,inputClassNoValid,image,imageId,msgId,msgClassValid,msgClassNoValid,msgTextValid,msgTextNoValid)
{
	if (swRegExLetters.test(val.value)) {
		if(inputClassValid != "")
			val.className = inputClassValid;
		if(image == 1 || image == 3)
			document.getElementById(imageId).innerHTML = swValidImage;
		if(msgClassValid != "")
			document.getElementById(msgId).className = msgClassValid;
		if(msgTextValid != "")
			document.getElementById(msgId).innerHTML = msgTextValid;
		val.correct = true;
	}
	else {
		if(inputClassNoValid != "")
			val.className = inputClassNoValid;
		if(image == 2 || image == 3)
			document.getElementById(imageId).innerHTML = swNoValidImage;
		if(msgClassNoValid != "")
			document.getElementById(msgId).className = msgClassNoValid;
		if(msgTextNoValid != "")
			document.getElementById(msgId).innerHTML = msgTextNoValid;
		val.correct = false;
	}
}
*/

function SWLetters(val,sizeMin,sizeMax,inputClassValid,inputClassNoValid,imageId,image,msgId,msgClassValid,msgClassNoValid,msgTextValid,msgTextNoValid,ajaxURL,ajaxParam)
{
	regExLetters = /^[a-zA-Z]+$/;
	if ((regExLetters.test(val.value) && (sizeMin == null || val.value.length >= sizeMin) && (sizeMax == null || val.value.length <= sizeMax)) || (sizeMin == 0 && val.value.length == 0)) {
		if(inputClassValid != null)
			val.className = inputClassValid;
		if(image == 1 || image == 3)
			document.getElementById(imageId).innerHTML = swValidImage;
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
		if(msgClassNoValid != null)
			document.getElementById(msgId).className = msgClassNoValid;
		if(msgTextNoValid != null)
			document.getElementById(msgId).innerHTML = msgTextNoValid;
		val.correct = false;
	}
}

function SWAlphanumeric(val)
{
	if (swRegExAlphanumeric.test(val.value)) {
		alert ("correct");
	}
}

function SWPassword(val)
{
	if (swRegExAlphanumeric.test(val.value)) {
		alert ("correct");
	}
}

function SWRePassword(val)
{
	if (swRegExAlphanumeric.test(val.value)) {
		alert ("correct");
	}
}

function SWEmail(val)
{
	if (swRegExEmail.test(val.value)) {
		alert ("correct");
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