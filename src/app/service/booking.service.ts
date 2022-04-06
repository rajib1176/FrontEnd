import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from 'src/model/Booking';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
private booking :Booking[]=[]
  constructor(private http:HttpClient) { }
  addBooking(booking:Booking[]){
    return this.http.post<Booking[]>( environment.url+'/book',booking);
  }
}
