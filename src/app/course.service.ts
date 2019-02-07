import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import { HttpClient } from "@angular/common/http";
import {Course} from "./course";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesRef: AngularFirestoreCollection<Course>;
  private apiCourses: Observable<Object>;
  public golfUrl: string;
  public courseId: string;
  public numberOfPlayers: number;
  public tee;

  constructor(private http: HttpClient,
              private db: AngularFirestore) {
    this.coursesRef = this.db.collection<Course>(`course`);
    this.apiCourses = this.getCourses();
    this.golfUrl = "https://golf-courses-api.herokuapp.com/courses";
  }

  getCourses() {
    return this.http.get(this.golfUrl)
  }


}
