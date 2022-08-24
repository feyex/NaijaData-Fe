import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/auth/user-auth.service';

@Component({
  selector: 'app-bible-tweet',
  templateUrl: './bible-tweet.component.html',
  styleUrls: ['./bible-tweet.component.css']
})
export class BibleTweetComponent implements OnInit {
  searchText:any;
  chart: any;
  ctx:any;
  chart2:any;
  gradientStroke:any; 
  user: any = {};
  order: Object;
  collection: any = 0;
  currentView:boolean = true;
  record: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: UserAuthService,) {
      
     }

  ngOnInit() {
   
    //display all tweet
    // this.showTweets();
    this.showYorubaBible();
    console.log(this.currentView,'currviewn')
  }

showTweets(){
this.currentView = false;
this.collection = 0;
this.auth.getTweets()
.then(user => {
  this.order = user;
  this.user = Array.of (this.order);
  this.user = this.user[0].message;
  console.log(this.user, 'this.user', this.currentView)

  //pagination function
 this.collection = this.user.length;

});
}

showYorubaBible(){
this.collection = 0;
this.currentView = true;
const dt = new Date()

this.auth.getYorubaBible()
.then(rec => {
  this.order = rec;
  this.record = Array.of (this.order);
  this.record = this.record[0].message;
  console.log(this.order, this.record)
  //pagination function
 this.collection = this.record.length;

});
}

  deleteTweet(id){
    this.auth.deleteTweets(id)
    .then (user => {
      this.user = user;
      alert('tweet deleted');
    })
    window.location.reload();
  }

  //Pagination functionalities
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalitems: this.collection
  };

  public maxSize: number = 20;
  public directionLinks: boolean = true;
  public autoHide: boolean = true;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<',
      nextLabel: '>',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }

}
