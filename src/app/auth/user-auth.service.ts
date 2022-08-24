import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { JwtResponse } from './jwt-response';
import { tap, map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  id: any;

  constructor(private httpClient: HttpClient) { }
  // set backend server url instance
  // apiServer = 'http://localhost:4000';
  apiServer ="https://naijadataset-be.herokuapp.com";

  // assume the API uses Jwtoken to authenticate user access
  authSubject = new BehaviorSubject(false);

  // signup user
  signin(email, firstname, lastname, phoneNumber, password, role) {
    const obj = {
      firstname,
      lastname,
      password,
      email,
      phoneNumber,
      role
    };
    return this.httpClient.post(`${this.apiServer}/v1/users`, obj);

  }

  // submit user
  submitTweet(message, source, area, url, userId) {
    const obj = {
      message,
      source,
      area,
      url,
      userId
    };
    return this.httpClient.post(`${this.apiServer}/tweet/tweets`, obj);

  }


  // log user in
  login(email, password) {
    const msg = {
      email,
      password
    };
    return this.httpClient.post<any>(`${this.apiServer}/v1/login`, msg)
      .pipe(
        map(result => {

          if (result) {
            localStorage.setItem('access_token', result.token );
            localStorage.setItem('userid', result.id );
          }
          return result;
        })
      );
  }

  // log user out
  logout() {
    localStorage.removeItem('access_token');
  }

  // check if user is logged in
  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
//delete all tweet
deleteTweets(id) {
  return this.httpClient.delete(`${this.apiServer}/tweets/${id}`).toPromise();
}

  // fetch all tweets
  getTweets() {
    return this.httpClient.get(`${this.apiServer}/tweet/tweets`).toPromise();
  }

  getUserTweets(id) {
    return this.httpClient.get(`${this.apiServer}/tweet/user/${id}`).toPromise();
  }
  getYorubaBible() {
    return this.httpClient.get(`${this.apiServer}/api/yoruba`).toPromise();
  }

   // to fetch each Tweet data by Id
   getTweetsId(id) {
    this.id = localStorage.userid;
    return this
            .httpClient
            .get(this.apiServer + `/tweet/tweets/` + this.id).toPromise();
    }


    // update user info in db
    updateUser(firstname, lastname, email, phoneNumber) {
      const obj = {
        firstname,
        lastname,
        email,
        phoneNumber,

      };
      this.id = localStorage.userid;
      return this
            .httpClient
            .put(this.apiServer + `/api/users/` + this.id , obj);
    }

    saveSentiment(tweetId: string, score: number) {
      const obj = {
        tweetId,
        score
      };
      return this.httpClient.post(`${this.apiServer}/tweet/sentiment`, obj);
  
    }
  
    // calculate tweet
    calcSentiment(tweetId: string) {
      const obj = {
        tweetId
      };
      return this.httpClient.post(`${this.apiServer}/tweet/calcSentiment`, obj);
  
    }
  
    // fetch all sentiment tweets
    getSentiment() {
      return this.httpClient.get(`${this.apiServer}/tweet/sentiment`).toPromise();
    }

    getSentimentById(id) {
      // this.id = localStorage.userid;
      return this
        .httpClient
        .get(this.apiServer + `/tweet/sentiment/` + id).toPromise();
    }

    // confirm password exist in db
    checkpwdexist(password: string) {
      const pwd = {
        password
      };
      this.id = localStorage.userid;
      return this
                .httpClient
                .post(this.apiServer + `/api/password/` + this.id, pwd);
    }

    // update password in db
    updatepwd(password) {
      const pwd = {
        password
      };
      this.id = localStorage.userid;
      return this
                .httpClient
                .put(this.apiServer + `/api/password/` + this.id, pwd);
    }

}
