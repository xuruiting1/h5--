import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute }from '@angular/router';
import { Router } from '@angular/router'; 
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private http:HttpClient) {  }
  books;
  ngOnInit() {
    this.http.get('/api/books').subscribe((data)=>{
      this.books=data;
    })
  }
 
}
