document.addEventListener('DOMContentLoaded', function() {
	// Select the element where data will be displayed
	const outputDiv = document.getElementById('sqlJobs');

	// AJAX request function
	function fetchData() {
		// Create XMLHttpRequest object
		const xhr = new XMLHttpRequest();

		// Configure and send the request to getData.cfm
		xhr.open('GET', 'sqlJobs.cfm', true);
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.onload = function() {
			if (xhr.status === 200) {
				// Parse JSON response
				const response = JSON.parse(xhr.responseText);
				
				// Build HTML content from JSON data
				var resultHtml = '<h2>Form Submission Result:</h2><ul>';

                // Assuming 'response.DATA' is an array of arrays containing usernames
                response.DATA.forEach(function(row) {
                    resultHtml += '<li>' + row[0] + '</li>'; // Assuming usernames are in the first column
                });

                resultHtml += '</ul>';
				outputDiv.innerHTML = resultHtml;
			} else {
				// Handle errors
				outputDiv.innerHTML = '<p>Error fetching data.</p>';
			}
		};

		// Send the request
		xhr.send();
	}

	// Fetch data when the page loads
	fetchData();
});
