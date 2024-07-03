
component {
	remote function processForm(required string username, required string password) {
		form.username = trim(form.username ?: "");
    	form.password = trim(form.password ?: "");

  
		datasource = "cftest";
		sql = "INSERT INTO users (username, password) VALUES (:username, :password)";
		params = {
			username: { value: form.username, cfsqltype: "CF_SQL_VARCHAR" },
			password: { value: form.password, cfsqltype: "CF_SQL_VARCHAR" }
		};

    	queryExecute(sql, params, { datasource: datasource });
		return{
			message: "ime = #arguments.username# geslo = #arguments.password# inserted"

		};
	}
}
