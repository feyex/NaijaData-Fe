import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/auth/user-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  searchText:any;
  chart: any;
  ctx:any;
  chart2:any;
  gradientStroke:any; 
  user: any = {};
  order: Object;
  collection: any = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: UserAuthService,) {
      
     }

  ngOnInit() {
   
    //display all tweet
    this.showTweets();

  }

showTweets(){
this.auth.getTweets()
.then(user => {
  this.order = user;
  this.user = Array.of (this.order);
  this.user = this.user[0].message;

  //pagination function
 this.collection = this.user.length;

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
