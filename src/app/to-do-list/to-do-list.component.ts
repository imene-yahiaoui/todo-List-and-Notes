import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule pour ngFor
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.component.html',
})
export class ToDoListComponent {
  tasks: string[] = [];
  newTask: string = '';
  editingTaskIndex: number | null = null; // Index de la tâche en cours de modification
  editedTask: string = ''; // Valeur temporaire pour la tâche en cours de modification

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
  // Méthode pour activer la modification de la tâche
  editTask(index: number) {
    this.editingTaskIndex = index;
    this.editedTask = this.tasks[index]; // Initialiser avec la tâche à modifier
  }

  // Méthode pour sauvegarder la modification
  saveTask() {
    if (this.editedTask.trim()) {
      this.tasks[this.editingTaskIndex!] = this.editedTask.trim();
      this.cancelEdit(); // Annuler l'édition après la sauvegarde
    }
  }

  // Méthode pour annuler l'édition
  cancelEdit() {
    this.editingTaskIndex = null;
    this.editedTask = '';
  }
}
