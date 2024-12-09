import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Make the service available app-wide
})
export class SessionService {

  // Set session data
  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  } 
  getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  } 
  
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
 
  clear(): void {
    sessionStorage.clear();
  }
 
  get userId(): any {
    return this.getItem('userId');
  }

  get orgId(): any {
    return this.getItem('orgId');
  }

  get firstName(): string | null {
    return this.getItem('fname');
  }

  get middleName(): string | null {
    return this.getItem('mname');
  }

  get lastName(): string | null {
    return this.getItem('lname');
  }
 
  get mobileNo(): string | null {
    return this.getItem('mobileNo');
  }

  get validUser(): string | null {
    return this.getItem('validUser');
  }
}
