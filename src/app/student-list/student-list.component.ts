import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentapiService } from '../services/studentapi.service';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  

 
  studentsData: any;
 
  constructor(
    public apiService: StudentapiService
  ) {
    this.studentsData = [];
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getAllStudents();
  }
  array:any=[]
  getAllStudents() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.studentsData = response;

      // Use MatTableDataSource for paginator
      this.array = response;
      this.studentsData = new MatTableDataSource(this.array);
                           
      // Assign the paginator *after* dataSource is set
      this.studentsData.paginator = this.paginator;
      this.studentsData.sort = this.sort;

    })
  }
 
 
  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllStudents();
    });
  }


}
