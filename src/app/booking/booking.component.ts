import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/model/Booking';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 private booking:Booking[]=[]
  constructor(private service:BookingService) {
    this.loadBooking();
   }
   loadBooking() {
    this.service.addBooking(this.booking).subscribe(success => this.booking = success);
   }

  ngOnInit(): void {
  }

}
