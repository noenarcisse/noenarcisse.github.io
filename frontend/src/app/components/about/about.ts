import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  baseUrl: string = "/images/prods/"

  prods: Map<string, string> = new Map([
    ["Blood Bar Tycoon",      this.baseUrl + "bbt_mini.jpg"],
    ["Magic Forge Tycoon",    this.baseUrl + "mft_mini.jpg"],
    ["Berzerker Homestead",   this.baseUrl + "bh_mini.jpg"],
    ["Lights out!",           this.baseUrl + "lo_mini.jpg"],
    ["Star Fish Strumpfer",   this.baseUrl + "sfs_mini.jpg"]
  ]);
    

  skills: string[] = [
    "Architecture",
    "Logic",
    "Efficiency",
    "Fast Learning",
    "Organization",
    "Communication",
    "Teamwork",
    "French",
    "English"
  ];
  techs: string[] = [
    "C#",
    "ASP.NET",
    "LINQ",
    "Entity",
    "Javascript",
    "Typescript",
    "Vue 3",
    "Node.js",
    "Github",
    "Plastic SCM",
    "Unity3D"
  ];

  oldTechs: string[] = [
    "Java",
    "SQL",
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "Notions in Perl",
    "Notions in C"
  ];

}
