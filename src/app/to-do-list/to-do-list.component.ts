import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule pour ngFor
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './to-do-list.component.html',
})
export class ToDoListComponent {
  tasks: string[] = [];
  newTask: string = '';
  editingTaskIndex: number | null = null; // Index de la tâche en cours de modification
  editedTask: string = ''; // Valeur temporaire pour la tâche en cours de modification

  constructor() {
    // Charger les tâches depuis le localStorage lors de l'initialisation
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks); // Convertir en tableau si des tâches existent
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
      this.saveTasks(); // Sauvegarder après l'ajout
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks(); // Sauvegarder après la suppression
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
      this.saveTasks(); // Sauvegarder après la modification
    }
  }

  // Méthode pour annuler l'édition
  cancelEdit() {
    this.editingTaskIndex = null;
    this.editedTask = '';
  }

  // Méthode pour sauvegarder les tâches dans localStorage
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Sauvegarde dans localStorage
  }
}
