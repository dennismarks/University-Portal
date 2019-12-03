const axios = require("axios");

const courseController = require("./controllers/courseController");

const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
  var lineReader = readline.createInterface({
    input: fs.createReadStream("TORCoursesList"),
    crlfDelay: Infinity
  });

  for await (const line of lineReader) {
    // Each line in input.txt will be successively available here as `line`.

    axios
      .post("/api/v1/courses/", {
        code: line,
        school: "UofT"
      })
      .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
      })
      .catch(error => {
        console.log(error);
      });

    await sleep(1500);
  }
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

processLineByLine();
