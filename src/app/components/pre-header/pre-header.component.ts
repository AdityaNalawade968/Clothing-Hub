import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigationEnd, RouterModule, Routes } from '@angular/router';
import { Users } from '../../comman/Users';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  providers: [DatePipe, UserService],
  templateUrl: './pre-header.component.html',
  styleUrl: './pre-header.component.css'
})
export class PreHeaderComponent {

  loginForm: FormGroup = new FormGroup({
    mobileNo: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  registerForm: FormGroup = new FormGroup({
    date: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    fName: new FormControl('', [Validators.required]),
    mName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required]),
    mobileNo: new FormControl('', [Validators.required]),
  });

  currentDate: any;
  constructor(
    private usersService: UserService,
    private sessionService: SessionService,
    private datePipe: DatePipe,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.currentDate = this.datePipe.transform(new Date, 'dd,MM,yyyy');
  }

  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  userId: number = 0;
  orgId: number = 0;
  isPresentData: any;
  ifUserLogIn: string = "default";

  ngOnInit(): void { 
    const user = this.sessionService.getItem('user');
    this.ifUserLogIn = user ? user : 'default';
 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const user = this.sessionService.getItem('user');
        this.firstName = this.sessionService.firstName || '';
        this.middleName = this.sessionService.middleName || '';
        this.lastName = this.sessionService.lastName || ''; 
        this.userId = this.sessionService.userId;
        this.orgId = this.sessionService.orgId;
        this.ifUserLogIn = user ? user : 'default';
      }
    });
  }
  
  loginObj = new Users;
 
  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      this.loginObj.mobileNo = this.loginForm.value.mobileNo;
      this.loginObj.password = this.loginForm.value.password;

      this.usersService.checkUser(this.loginObj).subscribe(
        (response: any) => {
          if (response && response.length > 0) {
            const user = response[0];

            // Store session data
            this.sessionService.setItem('userId', user.userId);
            this.sessionService.setItem('fname', user.fName);
            this.sessionService.setItem('mname', user.mName);
            this.sessionService.setItem('lname', user.lName);
            this.sessionService.setItem('email', user.email);
            this.sessionService.setItem('user', 'user'); // Store "user" to indicate login.

            this.ifUserLogIn = 'user'; // Update session state in component.

            this.toaster.success('Login successful!', 'Success');
            setTimeout(() => {
              // this.router.navigate(['/home']);
              window.location.href="/home"
            }, 1500);
          } else {
            this.toaster.info('Login failed!', 'Failed');
          }
        },
        (error) => {
          this.toaster.error('Invalid credentials. Please try again.', 'Login Failed');
          console.error('Login error:', error);
        }
      );
    } else {
      this.toaster.info('Please fill out all required fields.', 'Validation Error');
    }
  }

  registerObj = new Users;
  onRegisterSubmit(): void {

    this.registerObj.date = this.currentDate;
    this.registerObj.email = this.registerForm.value.email;
    this.registerObj.password = this.registerForm.value.password;
    this.registerObj.fName = this.registerForm.value.fName;
    this.registerObj.mName = this.registerForm.value.mName;
    this.registerObj.lName = this.registerForm.value.lName;
    this.registerObj.mobileNo = this.registerForm.value.mobileNo;

    this.usersService.save(this.registerObj).subscribe(
      response => {
        this.toaster.success("Registered Successfully.", "Success");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      },
      error => {
        this.toaster.info("Invalid details", "Failed");
      }
    );
  }

  logout(): void {
    // Clear session data and reset `ifUserLogIn`
    this.sessionService.clear(); // Clears all session data.
    this.ifUserLogIn = 'default'; // Reset to default state. 

    this.toaster.info('You have been logged out.', 'Logged Out');
    window.location.href='/';
  }
}
