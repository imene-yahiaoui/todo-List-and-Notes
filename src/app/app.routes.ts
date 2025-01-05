import { Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'home' },
  { path: 'todoList', component: ToDoListComponent, title: 'todoList' },
  { path: 'notes', component: NotesComponent, title: 'notes' },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found  page',
  },
];
