import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importer CommonModule pour ngFor

@Component({
  selector: 'app-notes',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent implements OnInit {
  notes: string[] = [];
  newNote: string = '';
  editedNote: string = ''; // Variable pour stocker la note modifiée
  editingIndex: number | null = null; // Index de la note en cours d'édition

  ngOnInit() {
    // Charger les notes depuis localStorage
    if (typeof localStorage !== 'undefined') {
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        this.notes = JSON.parse(savedNotes);
      }
    }
  }

  // Ajouter une nouvelle note
  addNote() {
    if (this.newNote) {
      this.notes.push(this.newNote);
      this.newNote = ''; // Réinitialiser la valeur du champ
      this.saveNotes(); // Sauvegarder les notes
    }
  }

  // Supprimer une note
  removeNote(index: number) {
    this.notes.splice(index, 1);
    this.saveNotes(); // Sauvegarder après suppression
  }

  // Commencer l'édition d'une note
  editNote(index: number) {
    this.editingIndex = index; // Enregistrer l'index de la note à éditer
    this.editedNote = this.notes[index]; // Charger la note à éditer
  }

  // Sauvegarder la note modifiée
  saveNote() {
    if (this.editingIndex !== null) {
      this.notes[this.editingIndex] = this.editedNote; // Mettre à jour la note
      this.editingIndex = null; // Réinitialiser l'index
      this.editedNote = ''; // Réinitialiser la note en cours d'édition
      this.saveNotes(); // Sauvegarder les notes après modification
    }
  }

  // Annuler l'édition de la note
  cancelEdit() {
    this.editingIndex = null;
    this.editedNote = ''; // Réinitialiser la note en cours d'édition
  }

  // Sauvegarder toutes les notes dans localStorage
  saveNotes() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }
}
