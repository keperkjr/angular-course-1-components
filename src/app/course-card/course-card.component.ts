import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
    
    @Input()
    course:Course;

    // @Output()
    // courseSelected = new EventEmitter<Course>();

    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();
    
    constructor() { }

    ngOnInit(): void {
    }

    onCourseViewed() {
        alert("onCourseViewed Works");

        // this.courseSelected.emit(this.course);
        this.courseEmitter.emit(this.course);

    }

}
