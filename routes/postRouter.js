const express = require("express");
const Post = require("../models/Post");
const router = express.Router();
const pageLimit = 20;

router.get("/", async (req, res) => {
  const page = req.query.page;
  const start = (page > 0 ? page - 1 : 0) * pageLimit;
  const count = await Post.find().countDocuments();
  const pagesCount = Math.ceil(count / pageLimit);
  pipeline = [{ $skip: start }, { $limit: pageLimit }];
  const result = await Post.aggregate(pipeline);
  res.json({ result, pages: pagesCount });
});

router.get("/search", async (req, res) => {
  const page = req.query.page;
  const searchTerm = req.query.q;
  // console.log(searchTerm);
  const start = (page > 0 ? page - 1 : 0) * pageLimit;
  Post.search(
    {
      query_string: {
        query: `*${searchTerm}*`
      }
    },
    {
      hydrate: true,
      from: start,
      size: pageLimit,
      hydrateOptions: { select: "name image _id" }
    },
    function(err, results) {
      const pages = Math.ceil(results.hits.total / pageLimit);
      const result = results.hits.hits;
      res.json({ result, pages });
    }
  );
});

//   const searchString = req.query.q;

//   pipeline = [
//     { $match: { $text: { $search: searchString } } },
//     { $skip: start },
//     { $limit: pageLimit }
//   ];
//   const count = await Post.find({
//     $text: { $search: searchString }
//   }).countDocuments();
//   const pagesCount = Math.ceil(count / pageLimit);
//   const result = await Post.aggregate(pipeline);
//   res.json({ result, pages: pagesCount });
// });

module.exports = router;
