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

    @Input()
    cardIndex:number;

    // @Output()
    // courseSelected = new EventEmitter<Course>();

    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();
    
    constructor() { }

    ngOnInit(): void {
    }

    isImageVisible() {
        return this.course && this.course.iconUrl && this.course.iconUrl.length > 0;
    }

    onCourseViewed() {
        alert("onCourseViewed Works");

        // this.courseSelected.emit(this.course);
        this.courseEmitter.emit(this.course);

    }

}
