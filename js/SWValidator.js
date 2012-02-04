
/*Regular Expressions*/
var swRegExLetters = /^[a-zA-Z]$/;
var swRegExLettersM = /^[A-Z]$/;
var swRegExLettersm = /^[a-z]$/;
var swRegExAlphanumeric = /^[a-zA-Z0-9]$/;
var swRegExEmail =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function SWLetters(val)
{
	if (swRegExLetters.test(val.value)) {
		alert ("correct");
	}
}

function SWAlphanumeric(val)
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