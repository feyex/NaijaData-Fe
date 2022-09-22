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
    language: "",
    polarity: ""
  }

  referralNum = Math.floor(Math.random() * 100000);

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: UserAuthService,
              private toast:ToastrService) {
  }

  ngOnInit() {
    
  }

  languages = [
    {name: 'English, Yoruba, Hausa, Igbo, Pidgin', value:'English, Yoruba, Hausa, Igbo, Pidgin'},
    {name: 'English, Yoruba', value:'English, Yoruba'},
    {name: 'English, Hausa', value:'English, Hausa'},
    {name: 'English, Igbo', value:'English, Igbo'},
    {name: 'English, Pidgin', value:'English, Pidgin'},
    {name: 'Yoruba,Pidgin', value:'Yoruba,Pidgin'},
    {name: 'Yoruba,Hausa', value:'Yoruba,Hausa'},
    {name: 'Yoruba,Igbo', value:'Yoruba,Igbo'},
    {name: 'Pidgin,Igbo', value:'Pidgin,Igbo'},
    {name: 'Pidgin,Hausa', value:'Yoruba,Hausa'},
    {name: 'English, Yoruba,Pidgin', value:'English, Yoruba,Pidgin'},
  ]


  polarities = [
    {name: 'Negative', value: 'negative'},
    {name: 'Positive', value: 'positive'},
    {name: 'Neutral', value: 'neutral'},

  ]

  create() {

    const message = this.signup.message;
    const source = this.signup.source;
    const area = this.signup.area;
    const url = this.signup.url;
    const userId =  localStorage.getItem('userid')
    const language = this.signup.language;
    const userPolarity = this.signup.polarity;
 
    this.authService.submitTweet(message,source,area, url, userId, language, userPolarity).subscribe((res:any) => {
    
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