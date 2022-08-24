import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TweetComponent } from './tweets/tweet/tweet.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListTweetComponent } from './tweets/list-tweet/list-tweet.component';
import { BibleTweetComponent } from './tweets/bible-tweet/bible-tweet.component';
import { LoginComponent } from './account/login/login.component';
import { AdminComponent } from './tweets/admin/admin.component';
import { SignupComponent } from './account/signup/signup.component';
import { CalcSentimentComponent } from './sentiment/calc-sentiment/calc-sentiment.component';
import { ViewSentimentComponent } from './sentiment/view-sentiment/view-sentiment.component';
import { AnnotatorComponent } from './tweets/annotator/annotator.component';




const routes: Routes = [
{ path: '', component: SignupComponent },
{ path: 'login', component: LoginComponent },
{ path: 'tweet', component: ListTweetComponent },
{ path: 'bible-tweet', component: BibleTweetComponent },
{ path: 'all-tweet', component: AdminComponent },
{ path: 'save-tweet', component: TweetComponent },
{ path: 'calcSentiment/:id', component: CalcSentimentComponent},
{ path: 'viewSentiment/:id', component: ViewSentimentComponent},
{ path: 'annotate-tweet', component: AnnotatorComponent },


// end lazy-loading
{ path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            ],

  exports: [RouterModule,
            ]
})
export class AppRoutingModule { }
