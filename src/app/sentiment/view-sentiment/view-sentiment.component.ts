import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/auth/user-auth.service';

@Component({
  selector: 'app-view-sentiment',
  templateUrl: './view-sentiment.component.html',
  styleUrls: ['./view-sentiment.component.css']
})
export class ViewSentimentComponent implements OnInit {
  tweetId: any;
  sentimentResponse: any
  tweetResponse: any;
  polarity: string = '';

  constructor(private activatedRoute:ActivatedRoute, private service:UserAuthService, private toast:ToastrService, private route:Router) { }

  ngOnInit() {
    this.polarity =''
    this.activatedRoute.params.subscribe(
      res => {
        this.tweetId = res['id']
        console.log(this.tweetId)
        this.getSentimentById();
        this.getTweetById();
      }
    )
  }

  getSentimentById(){
    this.service.getSentimentById(this.tweetId).then(
      sentiment => {
        this.sentimentResponse = Array.of(sentiment);
        this.sentimentResponse = this.sentimentResponse[0];
        // this.checkPolarity(this.sentimentResponse.score);
      }
    )
  }

  getTweetById(){
    this.service.getTweetsId(this.tweetId).then(
      tweet => {
        console.log(tweet, 'jjjjjj')
        this.tweetResponse = tweet;
        // this.checkPolarity(this.tweetResponse.sentiment);
      }
    )
  }

  checkPolarity(score){
    if (score = 4) {
      this.polarity = 'Positive';
    }
    else if (score = 2) {
      this.polarity = 'Negative';
    }
    else if (score = 1) {
      this.polarity = 'Neutral';
    }
    else if (score = 0) {
      this.polarity = 'Conflict';
    }
  }

}
