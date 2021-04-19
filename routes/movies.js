const express = require('express');

const router = express.Router();
const MovieModel = require('../models/Movie.model');

router.get('/movies', async (request,respond)=>{
    const moviesFromDB= await MovieModel.find();
    respond.render('movies', {moviesFromDB})

});

router.get('/movies/:movieId', async (request,respond)=>{
    const movieDescription = await MovieModel.findById(request.params.movieId);
    respond.render('movieDescription', {movieDescription});

});





module.exports = router;