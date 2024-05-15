require("dotenv").config();
const express = require("express");
const axios = require("axios");
const router = express.Router();
const apiKey = process.env.API_KEY;

// Route for SerpApi job search
router.get("/", async (req, res) => {
  const { location, title } = req.query;
  const lol = location;
  const til = title;
  const q =til+lol;

  // const options = {
  //   method: 'GET',
  //   url: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search',
  //   params: {
  //     SearchQuery: til,
  //     PageSize: '12',
  //     PageNumber: '1'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': 'a3d6db7097msh472c3becb4190b3p186444jsnc7afb94f8d75',
  //     'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
  //   }
  // };
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: q,
      page: '1',
      num_pages: '2'
    },
    headers: {
      'X-RapidAPI-Key': 'd2a178c85emshef813ea87b80f41p1ccc1fjsn5696eb5c0909',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  // const options = {
  //   method: "GET",
  //   url: "https://job-search-api1.p.rapidapi.com/v1/job-description-search",
  //   params: {
  //     q: til,
  //     page: "1",
  //     country: lol,
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "a3d6db7097msh472c3becb4190b3p186444jsnc7afb94f8d75",
  //     "X-RapidAPI-Host": "job-search-api1.p.rapidapi.com",
  //   },
  // };

  try {
    const response = await axios.request(options);
    const jobListingsData = response.data;

    // Send the job listings data as a JSON response
    res.json(jobListingsData);
  } catch (error) {
    console.error("Error fetching job ", error);
  }
});

module.exports = router;
