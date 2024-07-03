document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.sqlUsernames');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        var formData = new FormData(form);

        // Create an AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'sqlUsernames.cfm', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                
                var submittedDataDiv = document.getElementById('sqlUsernames');
                var resultHtml = '<h2>Form Submission Result:</h2><ul>';

                // Assuming 'response.DATA' is an array of arrays containing usernames
                response.DATA.forEach(function(row) {
                    resultHtml += '<li>' + row[0] + '</li>'; // Assuming usernames are in the first column
                });

                resultHtml += '</ul>';
                submittedDataDiv.innerHTML = resultHtml;
                
            } else {
                alert('Error: ' + xhr.status);
            }
        };
        xhr.send(new URLSearchParams(formData));
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('queryForm');

//     form.addEventListener('submit', function(e) {
//         e.preventDefault(); // Prevent form submission

//         const formData = new FormData(form);
//         const xhr = new XMLHttpRequest();

//         xhr.open('POST', 'sqlUsernames.cfm', true);
//         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         xhr.onload = function() {
//             if (xhr.status === 200) {
//                 const response = JSON.parse(xhr.responseText);

//                 // Extract columns and data from the JSON response
//                 const columns = response.COLUMNS;
//                 const data = response.DATA;

//                 let resultHtml = '<h2>Results:</h2><ul>';

//                 // Assuming there's only one column "USERNAME"
//                 if (columns.includes('USERNAME') && Array.isArray(data)) {
//                     data.forEach(row => {
//                         // Assuming USERNAME is the first (and only) column
//                         resultHtml += `<li>${row[0]}</li>`;
//                     });
//                 } else {
//                     resultHtml += '<li>No results found.</li>';
//                 }

//                 resultHtml += '</ul>';
//                 document.getElementById('results').innerHTML = resultHtml;
//             } else {
//                 document.getElementById('results').innerHTML = '<p>Error retrieving data.</p>';
//             }
//         };

//         xhr.send(new URLSearchParams(formData));
//     });
// });
