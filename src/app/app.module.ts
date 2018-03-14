import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';//内存web-api
import { InMemoryTodoDbService } from './todo/todo-data';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './core/auth.service';
import { PostsService } from './posts.service';
import { FlexchartComponent } from './flexchart/flexchart.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

// Define the routes
const ROUTES=[
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'todo',
    component:TodoComponent
  },
  {
    path:'',
    redirectTo:'posts',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FlexchartComponent,
    PageNotFoundComponent,
    LoginComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    RouterModule.forRoot(ROUTES)//将路由添加到app中
  ],
  providers: [
    {provide:'auth',useClass:AuthService },
    {provide:'posts',useClass:PostsService}
  ],//添加posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
