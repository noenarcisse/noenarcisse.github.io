import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { ProjectPage } from './components/project-page/project-page';

export const routes: Routes = [

    {
        path: "",
        component: Home
    },
    {
        path: "project/**",
        component: ProjectPage
    },
    {
        path: "about",
        component: About
    }
];
