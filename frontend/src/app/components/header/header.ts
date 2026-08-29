import { Component } from '@angular/core';
import { Navmenu } from "../navmenu/navmenu";

@Component({
  selector: 'app-header',
  imports: [Navmenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  headerBanners : Array<[string,string]> = [
    ["QA engineer", "jobtitle_1.png"],
    ["QA tester", "jobtitle_2.png"],
  ]
  randomBanner = this.randomTitle()

  randomTitle() : [string, string] {
    const r = Math.floor(Math.random()*this.headerBanners.length)
    return this.headerBanners[r];
  }


}
