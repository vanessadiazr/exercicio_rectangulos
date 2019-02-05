import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-rectangle-container',
  templateUrl: './rectangle-container.component.html',
  styleUrls: ['./rectangle-container.component.scss']
})


export class RectangleContainerComponent implements OnInit {


  constructor( private dataService: DataService) { }
  
  //public heigh: number;
  //public width: any;

  //variavel lida pelo ngStyle no HTML
  //max-width
  rectanglesMaxWidth: number = 25;
  rectanglesWidth: number;
  rectanglesHeight: number;

  rectangles: number = 0;

  
  setRectanglesWidth(){
    this.rectanglesWidth = 10;
  }
  setRectanglesHeight(){
    this.rectanglesHeight = this.rectanglesWidth / 1.7;
    return this.rectanglesHeight;
  }

  ngOnInit() {

    //this.heigh = window.innerHeight;
    //this.width = window.innerWidth;

    //subscreve o valor retornado pela função getNumbers
    //que é do tipo Observable e está sempre actualizado
    this.dataService.getNumbers().subscribe((numberOfRectangles) => {
      this.rectangles = numberOfRectangles;
    });

    
    //other way: 
    //this.dataService.getNumber().subscribe(numberOfRectangles =>  this.rectangles = numberOfRectangles) 
    this.setRectanglesWidth();
    this.setRectanglesHeight();
    
  }



  //a função generateArray() é chamada apenas *no ngFor de uma div
  //e cria um array de tamanho = rectangles
  generateArray(){
    let arrayOfRectangles = new Array();
    for(let i = 0; i< this.rectangles; i++){
      arrayOfRectangles[i] = 0;
    }
    return arrayOfRectangles;
  }



}

