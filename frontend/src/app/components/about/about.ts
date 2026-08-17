import { Component } from '@angular/core';

type Icon = string | null //icon url

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  shortDescr: string = `
  Quality Assurance Tester / Automation based in Brussels with a passion to learn how things work and automating tasks.

  Currently enrolled in a QA Tester program at Digital.brussels with a ISTQB Foundation certification.
  Previously worked as a character artist in games at Clever Trickster Studio and as a solo dev on personal games project with Unity.
`

  baseUrl: string = "/images/prods/"

  prods: Map<string, string> = new Map([
    ["Blood Bar Tycoon", this.baseUrl + "bbt_mini.jpg"],
    ["Magic Forge Tycoon", this.baseUrl + "mft_mini.jpg"],
    ["Berzerker Homestead", this.baseUrl + "bh_mini.jpg"],
    ["Lights out!", this.baseUrl + "lo_mini.jpg"],
    ["Star Fish Strumpfer", this.baseUrl + "sfs_mini.jpg"]
  ]);


  skills: string[] = [

    "Scripting & Programming",
    "Testing",
    "Automation",

    "Architecture",
    "API",
    "Databases",
    "CI / CD",
    "Jira",

    "ISTQB Foundation",
  ]

  softs: string[] = [
    "Fast Learning",
    "Organization",
    "Communication",
    "Teamwork",
    "Efficiency",
    "Agile",
    "Scrum"
  ]

  languages: string[] = [
    "French - C2",
    "English - C1"
  ]

  baseLangUrl: string = "/images/lang_icons/"

  prog_languages: Map<string, Icon> = new Map([
    ["C#", this.baseLangUrl + "cs.png"],
    ["Go", this.baseLangUrl + "go.png"],
    ["Python", this.baseLangUrl + "py.png"],
    ["SQL", this.baseLangUrl + "sql.png"],
    ["Nim", this.baseLangUrl + "nim.png"],
    ["F#", this.baseLangUrl + "fs.png"],
    ["Typescript", this.baseLangUrl + "ts.png"],
    // ["Javascript", this.baseLangUrl + ""],
    ["HTML", this.baseLangUrl + "html.png"],
    ["CSS", this.baseLangUrl + "css.png"],
  ])

  others: Map<string, Icon> = new Map([
    ["Java", this.baseLangUrl + "java.png"],
    ["PHP", this.baseLangUrl + "php.png"],
    ["MySQL", this.baseLangUrl + "mysql.png"],
    ["C", this.baseLangUrl + "c.png"],
    ["Gleam", this.baseLangUrl + "gleam.png"],
  ])




  techs: string[] = [
    ".NET",
    "ASP.NET",
    "LINQ",
    "Entity",

    "FlaUI",
    "Playwright",

    "PostGreSQL",
    "SQLite",

    "Blazor",
    "Angular",
    "Vue 3",

    "Deno",
    "Node.js",

    "Github",
    "Plastic SCM",

    "Unity3D"
  ]


  baseTechUrl: string = "/images/techs_icons/"
  techs2: Map<string, Icon> = new Map([
    [".NET", this.baseTechUrl + "dotnet.png"],
    ["ASP.NET", this.baseTechUrl + "aspnet.png"],
    ["LINQ", this.baseTechUrl + null],
    ["Entity", this.baseTechUrl + null],
    ["FlaUI", this.baseTechUrl + "flaui.png"],
    ["Playwright", this.baseTechUrl + "playwright.png"],
    ["PostGreSQL", this.baseTechUrl + "postgresql.png"],
    ["SQLite", this.baseTechUrl + "sqlite.png"],
    ["Blazor", this.baseTechUrl + "blazor.png"],
    ["Angular", this.baseTechUrl + "angular.png"],
    ["Vue 3", this.baseTechUrl + "vue.png"],
    ["Deno", this.baseTechUrl + "deno.png"],
    ["Node.js", this.baseTechUrl + "node.png"],
    ["Git", this.baseTechUrl + "git.png"],
    ["Plastic SCM", this.baseTechUrl + "plastic.png"],
    ["Unity 3D", this.baseTechUrl + "unity.png"],
  ])
}
