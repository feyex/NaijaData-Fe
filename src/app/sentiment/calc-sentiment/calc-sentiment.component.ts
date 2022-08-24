import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/auth/user-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calc-sentiment',
  templateUrl: './calc-sentiment.component.html',
  styleUrls: ['./calc-sentiment.component.css']
})
export class CalcSentimentComponent implements OnInit {
  tweetId: any;
  tweetResponse: any;
  selectedOption: string;
  score: number;

  constructor(private activatedRoute:ActivatedRoute, private service:UserAuthService, private toast:ToastrService, private route:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      res => {
        this.tweetId = res['id']
        this.getTweetById()
      }
    )
  }

  getTweetById(){
    this.service.getTweetsId(this.tweetId).then(
      tweet => {
        console.log(tweet, 'idddddd')
        this.tweetResponse = tweet;
      }
    )
  }

  saveSentiment() {
    if(this.selectedOption == 'Negative'){
      this.score = 2
    }
    else if (this.selectedOption == 'Positive'){
      this.score = 4
    }
    else if (this.selectedOption == 'Neutral'){
      this.score = 1
    }
    this.service.saveSentiment(this.tweetId, this.score).subscribe(
      (res:any) => {
        if(res.status == true){
          this.toast.success("Polarity Submitted Successfully.", "Success", {
            timeOut: 4000,
            positionClass: 'toast-top-center'
          });
          this.route.navigateByUrl('/tweet')
        }
        else{
          this.toast.error("Failed To Submit Polarity", "Submission Error", {
            timeOut: 4000,
            positionClass: 'toast-top-center'
          });
        
        }
      }
    )
  }

  polarity = [
    { score: '4', sentiment: 'Positive' },
    { score: '2', sentiment: 'Negative' },
    { score: '1', sentiment: 'Neutral' }
  ]

}
