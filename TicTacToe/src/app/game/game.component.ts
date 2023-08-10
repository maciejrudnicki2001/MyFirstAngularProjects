import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  squares:any =  [];
  xIsNext = true;
  winner = '';
  counter = 0;
  isDraw = '';
  freshPage = true;

  constructor() { }

  ngOnInit(): void {

  }

  newGame(){
    this.xIsNext = true;
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.counter = 0;
    this.isDraw = '';
    this.freshPage = false;
  }

  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx:number){
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.counter++;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner(){
    const lines = [
      [0,1,2], [3,4,5], [6,7,8], //rzedy
      [0,3,6], [1,4,7], [2,5,8], //kolumny
      [0,4,8], [2,4,6] //przekatne
    ];

    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]){
        return this.squares[a];
      }
    }

    if(this.counter == 9){
      this.isDraw = 'Draw!';
    }

    return null;
  }
}
