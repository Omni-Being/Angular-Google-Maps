import { Component } from '@angular/core';
import { MyLocations } from "./const/mylocations";
import { MapLocationsService } from "./services/map-locations.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent
{
	title = 'IRONX';
	
	lat = 28.7041;
	lng = 77.1025;
	all_locations_list:MyLocations | any; 

	selected_location:MyLocations =
	{
		latitude:"",
		longitude:"",
		label:""
	}

	selected_view = "terrain";


	constructor(private map_locations_api:MapLocationsService)
	{
  
	}

  
	ngOnInit(): void
	{
	  	this.getLatestLocations();
	}


	addOrUpdateLocation(location:any)
	{
		if(location.latitude>=-90 && location.latitude<=90 && location.longitude>=-180 && location.longitude<=180)
		{
			if(location.id)
			{
				this.map_locations_api.updateLocation(location).subscribe((response)=>
				{
					alert("Location updated successfully.");
					this.getLatestLocations();
				});
			}
			else
			{
				this.map_locations_api.addLocation(location).subscribe((response)=>
				{
					alert("Location added successfully");
					this.getLatestLocations();
				});
			}
		}
		else
		{
			alert("Please enter valid coordinates....");
		}
	}


	editLocation(location:any)
	{
		this.selected_location = location;
	}


	delLocation(location:any)
	{
		this.selected_location = location
	  	this.map_locations_api.deleteLocation(this.selected_location).subscribe((response)=>
		{
			alert("Location deleted successfully.");
			this.getLatestLocations();
		});
	}


	getLatestLocations()
	{
		this.selected_location =
		{
			latitude:"",
			longitude:"",
			label:""
		};
		this.map_locations_api.getAllLocations().subscribe(data=>
		{
			this.all_locations_list = data ? data : [];
		});
	}
}