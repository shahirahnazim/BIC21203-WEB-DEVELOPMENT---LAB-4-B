
const fs = require("fs");

try {
    // read json file
    const data = fs.readFileSync("books.json", "utf8");

    // parse json data
    const booksData = JSON.parse(data);

    // display successful message
    console.log("JSON parsed successfully!");

    // display the complete json data
    console.log(JSON.stringify(booksData, null, 2));

} catch (error) {
    console.log("JSON parsing failed:", error.message);
}
