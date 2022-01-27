import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common'
import { NavigationEnd, Router } from '@angular/router';


@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

	constructor(
		private titleService: Title,
		private router: Router,
		private location: Location
	) { }


	ngOnInit(): void {
		this.changeRoute();
	}



	

	// Function is called when clicking on one of the main components from the nav bar
	changeRoute() {
		this.router.events.subscribe(
			(event: any) => {
			  if (event instanceof NavigationEnd) {
				this.setNavBarIcons();
				
			  }
			}
		  );
	}

	/* 
	* Changes the style of the nav bar icons for a more individual look and feel
	* selected state uses filled icons, unselected state uses outlined icons in the nav bar
	*/
	setNavBarIcons() {

		document.getElementById('start')?.children[0].children[0].classList.remove('active-mat-icon');
		document.getElementById('start')?.children[0].children[0].classList.add('material-icons-outlined');

		document.getElementById('challenge')?.children[0].children[0].classList.remove('active-mat-icon');
		document.getElementById('challenge')?.children[0].children[0].classList.add('material-icons-outlined');

		document.getElementById('theory')?.children[0].children[0].classList.remove('active-mat-icon');
		document.getElementById('theory')?.children[0].children[0].classList.add('material-icons-outlined');

		document.getElementById('application')?.children[0].children[0].classList.remove('active-mat-icon');
		document.getElementById('application')?.children[0].children[0].classList.add('material-icons-outlined');

		var activeRoute;
		switch (this.router.url) {
			case '/start-the-journey': activeRoute = 'start'; break;
			case '/the-challenge': activeRoute = 'challenge'; break;
			case '/universal-design-theory': activeRoute = 'theory'; break;
			case '/applying-universal-design': activeRoute = 'application'; break;
			default: activeRoute = 'start'; break;
		}

		document.getElementById(activeRoute)?.children[0].children[0].classList.remove('material-icons-outlined');
		document.getElementById(activeRoute)?.children[0].children[0].classList.add('active-mat-icon');
	}

	// Is called when the user clicks on the back button on the event detail page. 
	goBackInBrowserHistory() {
		this.location.back(); // Goes to the last page of the browser history of the corresponding page.
		document.getElementById('subpage')?.classList.add('subpage'); // As currently the user never comes from another detail page, but the map and explore component, no back button is needed
	}

}
