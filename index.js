/*Assignment : 
Write a script that fetches data from https://jsonplaceholder.typicode.com/posts and prints the data gotten to the console.

1. Push your codes to GitHub.

2. Submit your GitHub URL.

3. The output must be well formatted.

4. Ensure to take into account possible errors and catch them if they occur. */

// API URL
const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url).then((data) => {
    // console.log(data); json format
    return data.json(); // converted to object
}).then((objectData) => {
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
        // values must match IDs in API
        tableData += `<tr>
        <td>${values.userId}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.body}</td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
}).catch((err) => {
    console.log(err);
});