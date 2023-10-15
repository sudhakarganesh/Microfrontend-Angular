// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private registrationSuccessSubject = new BehaviorSubject<boolean>(false);

  get registrationSuccess$(): Observable<boolean> {
    return this.registrationSuccessSubject.asObservable();
  }

  setRegistrationSuccess(success: boolean) {
    this.registrationSuccessSubject.next(success);
  }
}
