import { Component } from '@angular/core';
import { Navmenu } from "../navmenu/navmenu";

@Component({
  selector: 'app-header',
  imports: [Navmenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
