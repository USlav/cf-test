document.addEventListener('DOMContentLoaded', function() {
	var form = document.querySelector('.submitForm');
	form.addEventListener('submit', function(e) {
		e.preventDefault(); // Prevent form submission

		var formData = new FormData(form);

		// Create an AJAX request
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'submitForm.cfm', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.onload = function() {
			if (xhr.status === 200) {
				var response = JSON.parse(xhr.responseText);
				var submittedDataDiv = document.getElementById('submittedData');
					submittedDataDiv.innerHTML = `
						<h2>Form Submission Result:</h2>
						<p><strong>Message:</strong> ${response}</p>
					`;
				
			} else {
				alert('Error: ' + xhr.status);
			}
		};
		xhr.send(new URLSearchParams(formData));
	});
});
