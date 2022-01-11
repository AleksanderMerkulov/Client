import { Component, OnInit } from '@angular/core';
import { Students } from '../servicies/students';
import { HttpService } from '../servicies/http.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers:[HttpService]
})
export class StudentListComponent implements OnInit {
  
  students:Students[]=[]

  constructor(private httpService:HttpService){}
  ngOnInit(){
    this.httpService.findAll().subscribe((data:any)=>{
      this.students = data["studentList"]
      // тут нужно проверить переход данных и их констукцию в json
      //сделал как у меня в json файле students.json
      console.log(this.students)
    })
  }

  findById(id:number){
    this.httpService.findById(id)
  }

  save(){
    this.httpService.save()
  }

  delete(id:number){
    this.httpService.delete(id)
  }
  
}
