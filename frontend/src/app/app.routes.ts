import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { SpaHome } from './components/spa-home/spa-home';
import { ProjectPage } from './components/project-page/project-page';

export const routes: Routes = [

    {
        path: "",
        component: Home
    },
    {
        path: "home2",
        component: SpaHome
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
