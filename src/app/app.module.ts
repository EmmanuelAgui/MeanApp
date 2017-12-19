import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts.service';
import { FlexchartComponent } from './flexchart/flexchart.component';

// Define the routes
const ROUTES=[
  {
    path:'',
    redirectTo:'posts',
    pathMatch:'full'
  },
  {
    path:'posts',
    component:PostsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FlexchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)//将路由添加到app中
  ],
  providers: [PostsService],//添加posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
