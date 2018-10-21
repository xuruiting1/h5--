import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-communitydetail',
  templateUrl: './communitydetail.component.html',
  styleUrls: ['./communitydetail.component.css']
})
export class CommunitydetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  communityId:Number;
  community;
  ngOnInit() {
    this.communityId=this.router.snapshot.params['courseId'];
    this.http.get('/api/books/'+this.communityId).subscribe((data)=>{
      this.community=data;
    })
  }

}
