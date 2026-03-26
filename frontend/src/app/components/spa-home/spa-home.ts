import { Component, inject } from '@angular/core';

import Papa from 'papaparse';
import { AppData } from '../../stores/AppData';
import { isProject, loadProjectsData, Project, ProjectData } from '../../types/Project';
import { Band } from '../band/band';
import { Loader } from '../loader/loader';

@Component({
  selector: 'app-spa-home',
  imports: [Band, Loader],
  templateUrl: './spa-home.html',
  styleUrl: './spa-home.css',
})
export class SpaHome {
data = inject(AppData);


  ngOnInit() {


    //je load l'url de base et pas DEV ici
    //faut un dev mode

    console.log(this.data.getFileURL(0));

    loadProjectsData(this.data);

    
  }
}