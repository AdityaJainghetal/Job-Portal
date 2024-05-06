import React from 'react'

function Value() {
 // Creating headers
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// Creating request body
const body = JSON.stringify({
    "limit": 10,
    "offset": 0
});

// Creating request options
const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body
};

// Making a fetch request
fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => response.text()) // Convert response to text
    .then((result) => console.log(result)) // Log the result
    .catch((error) => console.error(error)); // Log any errors

  
}

export default Value
