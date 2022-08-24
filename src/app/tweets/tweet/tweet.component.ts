import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../../auth/user';
import { UserAuthService } from '../../auth/user-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  signup = {
    message : "",
    source : "", 
    area : "",
    url:"",
  }

  referralNum = Math.floor(Math.random() * 100000);

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: UserAuthService,
              private toast:ToastrService) {
  }

  ngOnInit() {
    
  }

  create() {

    const message = this.signup.message;
    const source = this.signup.source;
    const area = this.signup.area;
    const url = this.signup.url;
    const userId =  localStorage.getItem('userid')
 
    this.authService.submitTweet(message,source,area, url, userId).subscribe((res:any) => {
    
      if(res.status == true){
        this.toast.success("Tweet Message Submitted Successfully.", "Success", {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
      }
      else{
        this.toast.error("Failed To Submit Tweet Message", "Submission Error", {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
      
      }
     
    }
    
    );
  }

}