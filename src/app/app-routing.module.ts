import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { ContactHomeComponent } from './contact/contact-home/contact-home.component';
import { NotFoundHomeComponent } from './not-found/not-found-home/not-found-home.component';

const routes: Routes = [
  { path: '',
    title: 'C.P.M Rent Solutions - Acasa',
    component: LandingPageComponent
  },
  { path: 'contact',
    title: 'C.P.M Rent Solutions - Contact',
    component: ContactHomeComponent
  },
  { path: 'despre-noi',
    title: 'C.P.M Rent Solutions - Despre noi', 
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  { path: 'informatii', 
    title: 'C.P.M Rent Solutions - Informatii utile',
    loadChildren: () => import('./info/info.module').then(m => m.InfoModule)
  },
  { path: '404',
    title: 'C.P.M Rent Solutions - Pagina nu a fost gasita', 
    component: NotFoundHomeComponent
  },
  { path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 