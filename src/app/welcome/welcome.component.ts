import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "../course";
import {CourseService} from "../course.service";
import {HttpClient} from "@angular/common/http";
import {PlayService} from "../play/play.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  courses$: Observable<Course[]>;

  courseId: string;

  numPlayers: number;
  private courseUrl: string;
  private courseData$;

  constructor(private httpClient: HttpClient,
              private courseService: CourseService,
              private http: HttpClient,
              private playService: PlayService
              ) { }

  ngOnInit() {
    this.coursesSubscribe();

  }



  coursesSubscribe() {
    this.courseService.getCourses().subscribe(data => {
      // @ts-ignore
      this.courses$ = data.courses;
      console.log(this.courses$);
    });
  };

  onSelection() {
    console.log(this.courseId);
    this.courseService.courseId = this.courseId;
    this.courseUrl = "https://golf-courses-api.herokuapp.com/courses/" + this.courseId;
    this.http.get(this.courseUrl).subscribe(data => {
      //@ts-ignore
      this.courseData$ = data.data.holes;
    })
  }

  updatePlayersNumber() {
    this.courseService.numberOfPlayers = this.numPlayers;

  }

  updateTee(playersTeeType){
    this.courseService.tee = playersTeeType;
    for (this.numPlayers; this.playService.players.length < this.numPlayers;) {
      this.playService.players.push({name: "", score:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], total:0})
    }
  }

}
