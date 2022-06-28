import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class DateService {
  formatDateDDMMYYYY(dateTime: Date): string {
      let day: string = dateTime.getDate().toString();
      let month: string = (dateTime.getMonth() + 1).toString();
      if (dateTime.getDate() < 10) {
        day = '0' + day;
      }
      if (dateTime.getMonth() < 10) {
        month = '0' + month;
      }
      return `${day}/${month}/${dateTime.getFullYear()}`;
  }
}
