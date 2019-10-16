import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentapiService } from '../services/studentapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.css']
})
export class StudentShowComponent implements OnInit {

  id: number;
  data: Student;
 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: StudentapiService
  ) {
    this.data = new Student();
  }
 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

}
