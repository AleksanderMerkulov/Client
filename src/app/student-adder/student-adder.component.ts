import { Component, OnInit } from '@angular/core';
import { Students } from '../servicies/students';
import { HttpService } from '../servicies/http.service';

@Component({
  selector: 'app-student-adder',
  templateUrl: './student-adder.component.html',
  styleUrls: ['./student-adder.component.css']
})
export class StudentAdderComponent implements OnInit {

  students:Students[]=[]

  constructor(public httpService:HttpService) { }

  ngOnInit(): void {
  }

  save(student:Students){
    this.httpService.save(student)
  }

}
