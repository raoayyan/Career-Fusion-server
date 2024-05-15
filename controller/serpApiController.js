require("dotenv").config();

const { getJson } = require("serpapi");
const apiKey = process.env.API_KEY; // Replace with your SerpApi API key

const serpApiSearch = (location, title) => {
  return new Promise((resolve, reject) => {
    const searchParams = {
      q: `${title} careers`,
      location,
      api_key: apiKey,
    };

    getJson(searchParams, (json) => {
      if (json && json["jobs_results"]) {
        resolve(json["jobs_results"]);
      } else {
        reject(new Error("No job listings found or an error occurred."));
      }
    });
  });
};

module.exports = {
  serpApiSearch,
  // Other functions as needed
};
