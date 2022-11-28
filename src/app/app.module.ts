import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { MapLocationsService } from "./services/map-locations.service"



@NgModule(
{
	declarations:
	[
		AppComponent
	],
	imports:
	[
		BrowserModule,
		AgmCoreModule.forRoot({
			apiKey: environment.GOOGLE_MAP_KEY
		}),
		FormsModule,
		HttpClientModule
	],
	providers: [ MapLocationsService ],
	bootstrap: [AppComponent]
})



export class AppModule { }