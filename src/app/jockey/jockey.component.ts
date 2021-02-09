import { Component, OnInit, ViewChild } from '@angular/core';
import {JockeyElement} from '../Interface/JockeyElement';
import jockeys from '../jockey.json';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { JockeyService} from '../jockey.service';

@Component({
  selector: 'app-jockey',
  templateUrl: './jockey.component.html',
  styleUrls: ['./jockey.component.css']
})
export class JockeyComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['Title','FirstName', 'LastName', 'DOBString', 'RealAge']

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private service: JockeyService) {
    this.service.postJockeys(jockeys).subscribe((data) => {
      console.log('Result - ', data);
    this.dataSource = new MatTableDataSource<JockeyElement>(data as JockeyElement[]);    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }) 
}

applyFilter(filterValue:string){
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  ngOnInit(): void {
  }

}
