import { Request, Response } from 'express';
import { MovieService } from '../services/movieService';
import { Movie } from '../models/movie';

export class MoviesController {
  static async getAll(req: Request, res: Response) {
    const users = await MovieService.getAllMovies();
    res.json(users);
  }

//   static async getById(req: Request, res: Response) {
//     const user = await UserService.getUserById(req.params.id);
//     user ? res.json(user) : res.status(404).json({ message: 'Usuario no encontrado' });
//   }


  


  static async create(req: Request, res: Response) {
    const movie = await MovieService.createMovie(req.body);
    res.status(201).json(movie);
  }

//   static async delete(req: Request, res: Response) {
//     await UserService.deleteUser(req.params.id);
//     res.json({ message: 'Usuario eliminado' });
//   }
}