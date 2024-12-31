import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutme', component: AboutmeComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'skills', component: SkillsComponent }
];
