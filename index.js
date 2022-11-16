// Author - Nebyu Samuel
// Nov 15, 2022
// 7:48 PM

// FS
const fs = require("fs");

// Path
const path = require("path");

// Moment
const moment = require("moment");

// File path
const filePath = path.join(process.cwd(), "data/data.json");

// Read file
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Date aggregator function
const dateAggregator = (data) => {
  // aggregator object
  const aggregatedData = {};

  // Execute aggregation
  data.forEach((el) => {
    // Get the date
    let date = moment(el.createdAt).format("MMMM Do YYYY");

    if (aggregatedData[date]) {
      aggregatedData[date] += 1;
    } else {
      aggregatedData[date] = 1;
    }
  });

  return aggregatedData;
};

// Invoke date aggregator funciton
console.log(dateAggregator(data));
