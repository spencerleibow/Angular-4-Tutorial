import { NgModule }					from '@angular/core';
import { RouterModule, Routes }		from '@angular/router';
import { PageNotFoundComponent }		from './components/page-not-found.component';

const appRoutes = [
	{ path: '', redirectTo: '/characters', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
