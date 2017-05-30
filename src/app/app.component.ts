import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	currentNumber: number = 0;
	odds: number[] = [];
	evens: number[] = [];

	onGameStarted(){
		this.currentNumber++;
		if(this.currentNumber % 2 === 0){
			this.evens.push(this.currentNumber);
		}
		else{
			this.odds.push(this.currentNumber);
		}
	}

	onGameStopped(){
		// this.evens++;
	}
}
