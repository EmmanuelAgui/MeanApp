import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  //初始化为一个空数组用来接收posts
  posts:any=[];

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    //从API获取所有的posts
    this.postsService.getAllPosts().subscribe(posts=>{
      this.posts=posts;
    });
  }

}
