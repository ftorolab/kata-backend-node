import pool from '../config/db';

export class ReservationService {
  static async getAllReservations() {
    const [rows] = await pool.execute(`
      SELECT 
          reservations.id,
          reservations.schedule,
          reservations.selected_seats,
          reservations.email,
          rooms.name AS room_name,
          movies.title AS movie_title
      FROM reservations
      JOIN movies ON reservations.movie_id = movies.id
      JOIN rooms ON movies.id_room = rooms.id
  `);
    return rows;
  }

  static async createReservation(data: { movie_id: number, schedule: any, selected_seats: string, email:string }) {
    const { movie_id, schedule, selected_seats, email } = data;
    const [result] = await pool.execute(
      'INSERT INTO reservations (movie_id, schedule, selected_seats, email) VALUES (?, ?, ?, ?)',
      [movie_id, schedule, selected_seats, email]
    );
    return { id: (result as any).insertId, ...data };
  }

}