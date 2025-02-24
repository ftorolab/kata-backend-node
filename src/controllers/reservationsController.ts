import { Request, Response } from 'express';
import { ReservationService } from '../services/reservationService';


export class ReservationsController {
  static async getAll(req: Request, res: Response) {
    const rooms = await ReservationService.getAllReservations();
    res.json(rooms);
  }

  static async create(req: Request, res: Response) {
    const room = await ReservationService.createReservation(req.body);
    res.status(201).json(room);
  }

}