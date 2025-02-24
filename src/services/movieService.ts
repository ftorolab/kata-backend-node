import pool from '../config/db';

export class MovieService {
  static async getAllMovies() {
    const [rows] = await pool.execute('SELECT * FROM movies');
    return rows;
  }

  // static async getUserById(id: string) {
  //   const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
  //   return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
  // }

  static async createMovie(data: { title: string, genre: string, duration: number, rating: string, id_room: number }) {
    console.log('data', data)
    const { title, genre, duration, rating, id_room } = data;
    const [result] = await pool.execute(
      'INSERT INTO movies (title, genre, duration, rating, id_room) VALUES (?, ?, ?, ?, ?)',
      [title, genre, duration, rating, id_room]
    );
    return { id: (result as any).insertId, ...data };
  }

  // static async deleteUser(id: string) {
  //   await pool.execute('DELETE FROM users WHERE id = ?', [id]);
  //   return { message: 'Usuario eliminado' };
  // }
}