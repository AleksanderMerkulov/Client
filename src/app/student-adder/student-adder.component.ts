import { Component, OnInit } from '@angular/core';
import { Students } from '../servicies/students';
import { HttpService } from '../servicies/http.service';

@Component({
  selector: 'app-student-adder',
  templateUrl: './student-adder.component.html',
  styleUrls: ['./student-adder.component.css']
})
export class StudentAdderComponent implements OnInit {

  students:Students= new Students(4,'',0)

  constructor(public httpService:HttpService) { }

  ngOnInit(): void {
  }

  save(){
    this.httpService.save(this.students)
    .subscribe((data:any)=>{
      this.students=data
    })
  }

}
