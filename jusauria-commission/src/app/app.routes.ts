import { Routes } from '@angular/router';
import { HomeComponent } from './Screen/home/home.component';
import { WorkOffersEnum } from './Pojos/enums/work-offers-enum';
import { ArtComponent } from './Screen/WorkOffersPages/Art/art.component';
import { EmbroideryComponent } from './Screen/WorkOffersPages/Embroidery/embroidery.component';
import { VTuberRiggingComponent } from './Screen/WorkOffersPages/Vtuber/vtuber.component';
import { ProgrammingComponent } from './Screen/WorkOffersPages/Programming/programming.component';
import { AboutProfileComponent } from './Screen/about-profile/about-profile.component';
import { TermsComponent } from './Screen/terms/terms.component';

export const routes: Routes = [
    // --- Main Page ---
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutProfileComponent },
    { path: 'terms', component: TermsComponent },
    // --- Work Services ---
    { path: WorkOffersEnum.art, component: ArtComponent },
    { path: WorkOffersEnum.embroidery, component: EmbroideryComponent },
    { path: WorkOffersEnum.live2d, component: VTuberRiggingComponent },
    { path: WorkOffersEnum.program, component: ProgrammingComponent },

    
];
