import { Component, OnInit, Input } from '@angular/core';
import { Student } from './Student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

  metodoClicked(){
    console.log(`Student: ${this.student.name}`)
  }

}
