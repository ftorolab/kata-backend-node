import { Request, Response } from 'express';
import { RoomService } from '../services/roomsService';


export class RoomsController {
  static async getAll(req: Request, res: Response) {  
    const rooms = await RoomService.getAllRooms();
    res.json(rooms);
  }

  static async create(req: Request, res: Response) {
    const room = await RoomService.createRoom(req.body);
    res.status(201).json(room);
  }

}