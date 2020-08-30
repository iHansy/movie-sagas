const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    //req.params is payload of movie id
    console.log('testing', req.params.id);
    const queryText = `SELECT "movies".title, "movies".poster, "movies".description, "genres".name, "movies".id FROM "movies_genres"
    JOIN "movies" ON "movies_genres".movie_id = "movies".id
    JOIN "genres" ON "movies_genres".genre_id = "genres".id
    WHERE "movies".id = $1;`; //$1 is sql injection prevention
    pool.query(queryText, [req.params.id])
      .then((result) => { 
        res.send(result.rows); //result.rows sending to sagas
      })
      .catch((error) => {
        console.log('Error getting movies query', error);
        res.sendStatus(500); //internal server error
      });
  });

module.exports = router;