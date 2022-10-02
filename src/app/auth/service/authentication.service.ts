import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<User>;

  //private
  private currentUserSubject: BehaviorSubject<User>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return (
      this.currentUser && this.currentUserSubject.value.role === Role.Admin
    );
  }

  /**
   *  Confirms if user is client
   */
  get isClient() {
    return (
      this.currentUser && this.currentUserSubject.value.role === Role.Client
    );
  }

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(email: string, password: string) {
    return this._http
      .post<any>(`${environment.apiUrl}/users/authenticate`, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Display welcome toast!
            setTimeout(() => {
              this._toastrService.success(
                'You have successfully logged in as an ' +
                  user.role +
                  ' user to Vuexy. Now you can start to explore. Enjoy! 🎉',
                '👋 Welcome, ' + user.firstName + '!',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 2500);

            // notify
            this.currentUserSubject.next(user);
          }

          return user;
        })
      );
  }

  /**
   * User login
   *
   * @param user
   * @returns user
   */
  login_temp(user) {
    //TODO: replace it with login from the other service
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        id: user.user.customerId,
        fullName: user.user.fullName,
        firstName: user.user.firstName,
        lastName: user.user.lastName,
        company: 'Test Company',
        role: 'Editor',
        username: user.user.emailAddress,
        country: 'Test Country',
        contact: user.user.mobileNo,
        email: user.user.emailAddress,
        currentPlan: 'Enterprise',
        status: 'active',
        avatar: 'default.png',
        token: user.token,
      })
    );

    // Display welcome toast!
    // setTimeout(() => {
    this._toastrService.success(
      'You have successfully logged in as an ' +
        user.email +
        ' user to Lnddo. Now you can start to explore. Enjoy! 🎉',
      '👋 Welcome, ' + user.firstName + '!',
      { toastClass: 'toast ngx-toastr', closeButton: true }
    );
    // }, 2500);

    // notify
    this.currentUserSubject.next(user);
    return;
  }

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify
    this.currentUserSubject.next(null);
  }
}
