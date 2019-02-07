import { Injectable } from '@angular/core';
import {CourseService} from "../course.service";
import {HttpClient} from "@angular/common/http";
import {Player} from "../player";

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  public players: Player[];
  private courseUrl: string;
  golfUrl = "https://golf-courses-api.herokuapp.com/courses/";

  constructor(private http: HttpClient,
              private courseService: CourseService) {
    this.players = [ ]
  }

  newUrl () {
    this.courseUrl = this.golfUrl + this.courseService.courseId;
    console.log(this.courseUrl);
    return this.courseUrl
  }

  getCourseData() {
    return this.http.get(this.courseUrl)
  }

}


