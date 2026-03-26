import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader {

  loadingSentences : string[] = 
  [
    "Thinking intensely",
    "Waiting for the gnomes to deliver the data",
    "Assembling stuff",
    "Removing gremlins from the wires",
    "Waiting for the data to fall from the sky"
  ];

  loadingSentence  = signal<string>("");

  getRandomSentence() : string
  {
    console.log(this.loadingSentences);
    const random : number = Math.floor(Math.random() * this.loadingSentences.length);
    const rand : string = this.loadingSentences[random];

    console.log(random +" "+rand)

    return  rand;

  }

  ngOnInit()
  {
    this.loadingSentence.set(this.getRandomSentence());
  }

}
