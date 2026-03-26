import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { Header } from "./components/header/header";
import { About } from "./components/about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

}
