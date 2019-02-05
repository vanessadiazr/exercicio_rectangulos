import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RectangleContainerComponent } from '../rectangle-container/rectangle-container.component';
import { DataService } from "../data.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit{

  //send values to data service:
  constructor(private dataService: DataService) { }


  //cada vez que é introduzido um valor no input
  //a função onKey() é chamada e tem como parametro
  //o valor introduzido no input
  onKey(value: any){
    //é chamada a funcão do dataService updateNRectangles()
    //que atualiza o valor de mySubject no dataService
    this.dataService.updateNRectangles(value)
    console.log(value);
  }
  
  ngOnInit() {
  }

}
