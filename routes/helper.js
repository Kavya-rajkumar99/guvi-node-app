import { client } from '../index.js';

export async function updateMovieById(id, data) {
    return await client.db("guvi-db").collection("movies").updateOne({ id: id }, { $set: data });
}
export async function deleteMovieById(id) {
    return await client.db("guvi-db").collection("movies").deleteOne({ id: id });
}
export async function createMovies(data) {
    return await client.db("guvi-db").collection("movies").insertMany(data);
}
export async function getMovieById(id) {
    return await client.db("guvi-db").collection("movies").findOne({ id: id });
}
export async function getAllMovies(request) {
    return await client.db("guvi-db").collection("movies").find(request.query).toArray();
}
