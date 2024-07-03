<!--- <cfparam name="form.name" default="">
<cfparam name="form.surname" default=""> --->

<cfscript>
	// Instantiate the CFC
	formHandler = new FormHandler();

	// Process the form submission
	formResult = formHandler.processForm(
		form.username,
		form.password
	);

	// Output the result (for example)
	writeOutput(serializeJSON(formResult.message));
</cfscript>

