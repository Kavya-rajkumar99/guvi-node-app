import express from "express";
import { getAllMovies, getMovieById, createMovies, deleteMovieById, updateMovieById } from "./helper.js";
const router = express.Router()
router.get('/', async function (request, response) {

    if(request.query.rating){
      request.query.rating= +request.query.rating
    }
    console.log(request.query)
    const movies = await getAllMovies(request)
    response.send(movies)
  })
  
  router.get('/:id', async function(request,response){
    const {id} = request.params;
    console.log(request.params,id);
    // const movie=movies.find(mv=>mv.id==id);
    const movie = await getMovieById(id)
    movie? response.send(movie): response.status(400).send({msg:"Movie not found"})
  })
  router.post('/',async function (request,response){
    const data = request.body;
    console.log(data);
    const result = await createMovies(data)
    response.send(result);
  })
  router.delete('/:id', async function(request,response){
    const {id} = request.params;
    console.log(request.params,id);
    // const movie=movies.find(mv=>mv.id==id);
    const result = await deleteMovieById(id)
    result.deletedCount>0? response.send({msg:"Movie deleted successfully"}): response.status(400).send({msg:"Movie not found"})
  })
  router.put('/:id',async function (request,response){
    const {id} = request.params;
    console.log(request.params,id);
    const data = request.body;
    console.log(data);
    const result = await updateMovieById(id, data);
    response.send(result);
  })
  export const moviesRouter = router


