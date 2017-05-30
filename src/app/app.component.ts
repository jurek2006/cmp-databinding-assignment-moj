import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	odds: number = 1;
	evens: number = 1;

	onGameStarted(){
		this.odds++;
	}

	onGameStopped(){
		this.evens++;
	}
}
