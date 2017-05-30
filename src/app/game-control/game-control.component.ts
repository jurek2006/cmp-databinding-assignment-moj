import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

	@Output() gameStarted = new EventEmitter();
	@Output() gameStopped = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onStart(){
  // metoda uruchamiająca "grę"
  	// emitowanie eventu
  	this.gameStarted.emit();
  };

  onStop(){
  // metoda zatrzymująca "grę"
  	// emitowanie eventu
  	this.gameStopped.emit();
  };

}
