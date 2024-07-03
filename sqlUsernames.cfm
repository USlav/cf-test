<cfscript>
    param name="form.username" default="";
    datasource = "cftest";

    getResults = queryExecute(
        "SELECT username FROM users ",
		{ username: { value: form.username, cfsqltype: "cf_sql_varchar" } },
        { datasource: datasource }
		);

    writeOutput(serializeJSON(getResults));
</cfscript>


