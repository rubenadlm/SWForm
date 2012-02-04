<form action="formresult.php" method="post" enctype="multipart/form-data">

	Name: <input type="text" name="name" onchange="SWLetters(this)" placeholder="Nombre"/><br />
	Surame: <input type="text" name="surname"  onchange="SWLetters(this)" /><br />
	Nick: <input type="text" name="nick" onchange="SWAlphanumeric(this)" /><br />
	Password: <input type="text" name="pass" /><br />
	Re-password: <input type="text" name="repass" /><br />
	Email: <input type="text" name="email" onchange="SWEmail(this)" /><br />

	<input type="submit" value="Submit" />
</form>