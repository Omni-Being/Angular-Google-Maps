import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MyLocations } from "../const/mylocations";
import { environment } from "src/environments/environment";



@Injectable(
{
  	providedIn: 'root'
})



export class MapLocationsService
{
	base_url="";


	constructor(private httpclient: HttpClient)
	{
		this.base_url = environment.BASE_URL;
	}
  

	addLocation(location_data:any):Observable<MyLocations>
	{
		return this.httpclient.post<MyLocations>(this.base_url, location_data);
	}
  

	getAllLocations():Observable<MyLocations>
	{
		return this.httpclient.get<MyLocations>(this.base_url);
	}
	

	updateLocation(location_data:any):Observable<MyLocations>
	{
	  	return this.httpclient.put<MyLocations>(this.base_url + "/" + location_data.id, location_data);
	}
  

	deleteLocation(location_data:any):Observable<MyLocations>
	{
	  	return this.httpclient.delete<MyLocations>(this.base_url + "/" + location_data.id);
	}
}