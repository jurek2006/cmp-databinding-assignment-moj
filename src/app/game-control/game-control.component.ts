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
	startButtonDisabled: boolean = false;
	stopButtonDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onStart(){
  // metoda uruchamiająca "grę"
  	// emitowanie eventu
  	this.interval = setInterval(() =>{
  		this.gameStarted.emit();
  	}, 1000);
  	this.stopButtonDisabled = false;
  	this.startButtonDisabled = true;
  };

  onStop(){
  // metoda zatrzymująca "grę"
  	// emitowanie eventu
  	clearInterval(this.interval);
  	// this.gameStopped.emit();
  	this.stopButtonDisabled = true;
  	this.startButtonDisabled = false;
  };

}
