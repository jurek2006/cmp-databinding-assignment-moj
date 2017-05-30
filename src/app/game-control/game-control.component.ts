import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

	@Output() gameStarted = new EventEmitter();
	@Output() gameStopped = new EventEmitter();
	interval; //variable for setInterval

  constructor() { }

  ngOnInit() {
  }

  onStart(){
  // metoda uruchamiająca "grę"
  	// emitowanie eventu
  	this.interval = setInterval(() =>{
  		this.gameStarted.emit();
  	}, 1000);
  };

  onStop(){
  // metoda zatrzymująca "grę"
  	// emitowanie eventu
  	clearInterval(this.interval);
  	// this.gameStopped.emit();
  };

}
