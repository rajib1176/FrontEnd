import { Employee } from "./Employee";

export class Booking {
    constructor(public bookedRooms: Room[], public stakeholder: Employee[], public bookingId: number, public purpose: string, public dateOfBooking: string, public participants: number) {
    }
}