import { Component, OnInit, Inject } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  //初始化为一个空数组用来接收posts
  posts: any = [];
  islogin: boolean = false;

  username = "";
  password = "";

  constructor(
    @Inject('auth') private authService,
    @Inject('posts') private postsService
  ) { }

  ngOnInit() {
    if (this.islogin) {
      //从API获取所有的posts
      this.postsService.getAllPosts().subscribe(posts => {
        this.posts = posts;
      });
    }
  }
}
