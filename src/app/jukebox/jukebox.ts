import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jukebox',
  imports: [CommonModule],
  templateUrl: './jukebox.html',
  styleUrl: './jukebox.css',
})
export class Jukebox {
  vinilos = [
    'assets/vinilos.jpg',
    'assets/vinilo2.jpg'
  ]

  currentIndex = 0

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.vinilos.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.vinilos.length) % this.vinilos.length 
  }
}
