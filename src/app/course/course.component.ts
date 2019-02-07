import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "../course";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor() { }

  ngOnInit() {
  }


}
