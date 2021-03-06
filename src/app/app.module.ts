import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { LoaderComponent } from './loader/loader.component';
import { TrimPipe } from './trim.pipe';
import { TodoService } from './todo.service';
import { routes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TrimPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
