<cfscript>
    datasource = "cftest";
	sql = "SELECT name FROM jobs ";
    getResults = queryExecute(sql,[],{datasource: datasource});

    writeOutput(serializeJSON(getResults));
</cfscript>
