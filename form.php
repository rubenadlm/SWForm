<form action="formresult.php" onsubmit="return SWRequiredFields([name,surname,nick])" method="post" enctype="multipart/form-data">
	Name: <input type="text" name="name" onchange="SWLetters(this,1,10,'valid','novalid','id501',1,'id500',null,null,'','Solo letras')" placeholder="Nombre"/>
	<span id="id500"></span><br />
	Surame: <input type="text"name="surname"  onchange="SWLetters(this,'valid','novalid',1,'id501',0,'','',0)" />
	<span id="id501"></span><br />
	Nick: <input type="text" name="nick" onchange="SWAlphanumeric(this)" /><br />
	Password: <input type="text" name="pass" onchange="SWPassword(this)" /><br />
	Re-password: <input type="text" name="repass" onchange="SWRePassword(this)" /><br />
	Email: <input type="text" name="email" onchange="SWEmail(this)" /><br />

	<input type="submit" value="Submit" />
</form>