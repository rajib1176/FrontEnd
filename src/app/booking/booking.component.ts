import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/model/Booking';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 booking:Booking[]=[]
  constructor(private service:BookingService) {
    this.loadBooking();
   }
   loadBooking() {
    this.service.addBooking(booking:Booking[]).subscribe(success => this.booking = success);
   }

  ngOnInit(): void {
  }

}
