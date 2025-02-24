import pool from '../config/db';

export class RoomService {
  static async getAllRooms() {
    const [rows] = await pool.execute('SELECT * FROM rooms');
    return rows;
  }

  static async getRoomById(id: string) {
    const [rows] = await pool.execute('SELECT * FROM rooms WHERE id = ?', [id]);
    return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
  }

  static async createRoom(data: { name: string, capacity: number, seats: any }) {
    const { name, capacity, seats} = data;
    const [result] = await pool.execute(
      'INSERT INTO rooms (name, capacity, seats) VALUES (?, ?, ?)',
      [name, capacity, JSON.stringify(seats)]
    );
    return { id: (result as any).insertId, ...data };
  }

  static async updateRoom(id: string, data: { name?: string, capacity?: number }) {
    const { name, capacity } = data;
    const fieldsToUpdate: string[] = [];
    const values: any[] = [];
    if (name) {
      fieldsToUpdate.push('name = ?');
      values.push(name);
    }
    if (capacity) {
      fieldsToUpdate.push('capacity = ?');
      values.push(capacity);
    }
    if (fieldsToUpdate.length === 0) {
      return { message: 'No se proporcionaron datos para actualizar' };
    }
    values.push(id);
    const query = `UPDATE rooms SET ${fieldsToUpdate.join(', ')} WHERE id = ?`;
    const [result] = await pool.execute(query, values);
    if ((result as any).affectedRows === 0) {
      return { message: 'Sala no encontrada o sin cambios' };
    }
    return { message: 'Sala actualizada correctamente' };
  }

  static async deleteRoom(id: string) {
    await pool.execute('DELETE FROM rooms WHERE id = ?', [id]);
    return { message: 'Sala eliminada' };
  }
}