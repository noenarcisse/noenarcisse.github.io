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

  Currently enrolled in a QA Tester program at Digital.brussels with a ISTQB Foundation certification at the end.
  Previously worked as a character artist in games at Clever Trickster Studio and as a solo dev on personal games project with Unity.
`

  baseUrl: string = "/images/prods/"
  baseLangUrl: string = "/images/lang_icons/"
  baseTechUrl: string = "/images/techs_icons/"

  prods: Map<string, string> = new Map([
    ["Blood Bar Tycoon", this.baseUrl + "bbt_mini.jpg"],
    ["Magic Forge Tycoon", this.baseUrl + "mft_mini.jpg"],
    ["Berzerker Homestead", this.baseUrl + "bh_mini.jpg"],
    ["Lights out!", this.baseUrl + "lo_mini.jpg"],
    ["Star Fish Strumpfer", this.baseUrl + "sfs_mini.jpg"]
  ]);


  skills: string[] = [

    "Scripting & Programming",
    "Test design & strategy",
    "Automation",

    "Architecture",
    "API",
    "Databases",

    "Jira",
    "Agile",
    "Scrum",

    "CI / CD",


    // "ISTQB Foundation",
  ]

  softs: string[] = [
    "Curiosity",
    "Methodical approach",
    "Structured reports & documentation",
    "Fast adaptation to new languages & tools",
    "Attention to detail",
    "Autonomy (minimal supervision,clarifying ambiguities early)",
    "Communication and collaboration skills",
  ]

  languages: string[] = [
    "French - C2",
    "English - C1"
  ]


  
  techs2: Map<string, Icon> = new Map([
    ["Jira", this.baseTechUrl + "jira.png"],
    ["SquashTM", this.baseTechUrl + "squash.png"],
    ["SonarQube Community", this.baseTechUrl + "sonarqube.png"],

    [".NET", this.baseTechUrl + "dotnet.png"],
    // ["ASP.NET", this.baseTechUrl + "aspnet.png"],
    // ["Entity", null],
    ["FlaUI", this.baseTechUrl + "flaui.png"],
    ["Playwright", this.baseTechUrl + "playwright.png"],
    // ["Selenium", null],
    ["PostGreSQL", this.baseTechUrl + "postgresql.png"],
    ["SQLite", this.baseTechUrl + "sqlite.png"],
    ["Blazor", this.baseTechUrl + "blazor.png"],
    ["Angular", this.baseTechUrl + "angular.png"],

    ["pytest", this.baseTechUrl + "pytest.png"],
    ["Bruno", this.baseTechUrl + "bruno.png"],
    ["DevTools", this.baseTechUrl + "devtools.png"],
    ["Testing Library", this.baseTechUrl + "testinglibrary.png"],
    ["Jasmine & Karma", this.baseTechUrl + "jasmine.png"],
    ["xUnit", this.baseTechUrl + "xunit.png"],
    ["Shouldly", this.baseTechUrl + "shouldly.png"],
    ["NSubsitute", this.baseTechUrl + "nsubstitute.png"],

    ["Deno", this.baseTechUrl + "deno.png"],
    ["Node.js", this.baseTechUrl + "node.png"],

    ["Git", this.baseTechUrl + "git.png"],
    ["Docker", this.baseTechUrl + "docker.png"],
    ["Plastic SCM", this.baseTechUrl + "plastic.png"],

    ["Unity 3D", this.baseTechUrl + "unity.png"],
  ])

  prog_languages: Map<string, Icon> = new Map([
    ["C#", this.baseLangUrl + "cs.png"],
    ["Go", this.baseLangUrl + "go.png"],
    ["Python", this.baseLangUrl + "py.png"],
    ["SQL", this.baseLangUrl + "sql.png"],
    ["Nim", this.baseLangUrl + "nim.png"],
    ["Typescript", this.baseLangUrl + "ts.png"],
    // ["Javascript", this.baseLangUrl + ""],
    ["HTML", this.baseLangUrl + "html.png"],
    ["CSS", this.baseLangUrl + "css.png"],
  ])

  others: Map<string, Icon> = new Map([
    ["Vue 3", this.baseTechUrl + "vue.png"],
    ["Duck DB", this.baseTechUrl + "duckdb.png"],

    ["F#", this.baseLangUrl + "fs.png"],
    ["Gleam", this.baseLangUrl + "gleam.png"],
    ["Java", this.baseLangUrl + "java.png"],
    ["PHP", this.baseLangUrl + "php.png"],
    ["MySQL", this.baseLangUrl + "mysql.png"],
    ["C", this.baseLangUrl + "c.png"],
  ])


}
