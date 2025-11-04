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
    'https://th.bing.com/th/id/OIP.82cOqbNcyIuMSOSx3xNAqgHaHa?w=166&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.82cOqbNcyIuMSOSx3xNAqgHaHa?w=166&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
  ]

  currentIndex = 0

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.vinilos.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.vinilos.length) % this.vinilos.length 
  }
}
