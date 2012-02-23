<form action="formresult.php" onsubmit="return SWRequiredFields([name,surname,nick])" method="post" enctype="multipart/form-data">
	Name: <input type="text" name="name" onchange="SWLetters(this,1,10,'valid','novalid','id501',1,'id500',null,null,'','Solo letras.',null)" placeholder="Nombre"/>
		<span id="id501"></span><span id="id500"></span><br />
	Surame: <input type="text"name="surname" onchange="SWLetters(this,1,30,'valid','novalid','id503',1,'id502',null,null,'','Solo letras.',null)" />
		<span id="id503"></span><span id="id502"></span><br />
	Nick: <input type="text" name="nick" onchange="SWAlphanumeric(this,3,15,'valid','novalid','id505',1,'id504',null,null,'','Solo numeros y letras. Entre 3-15 carácteres.',null)" />
		<span id="id505"></span><span id="id504"></span><br />
	Password: <input type="password" name="pass" id="pass" onchange="SWPassword(this,6,15,'valid','novalid','id507',1,'id506',null,null,'','Solo numeros y letras. Entre 6-15 carácteres.')" />
		<span id="id507"></span><span id="id506"></span><br />
	Re-password: <input type="password" name="repass" id="repass" onchange="SWRePassword(this,'pass','valid','novalid','id509',1,'id508',null,null,'','Los passwords no coinciden.')" />
		<span id="id509"></span><span id="id508"></span><br />
	Email: <input type="text" name="email" onchange="SWEmail(this,null,null,'valid','novalid','id511',1,'id510',null,null,'','Email no valido.',null)" />
		<span id="id511"></span><span id="id510"></span><br />
		
	<input type="submit" value="Submit" />
</form>