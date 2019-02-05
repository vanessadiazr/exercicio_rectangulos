import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class DataService {
  
  //criada instancia my Subject do modulo BehaviorSubject
  private  mySubject = new BehaviorSubject(0);

  constructor() { }

  //updateNREctangles -> funcao chamada dentro da funcao do
  //container component onKey(value) que é chamada sempre que 
  //o valor do input é alterado
  //mantem o valor de mySubject actualizado:
  //chama a  função updateNRectangles 
  updateNRectangles(rectangles:number){
    this.mySubject.next(rectangles);
  }

  //pega no mySubject e devolve-o como uma observable do tipo number
  getNumbers():Observable<number>{
    return this.mySubject.asObservable();
  }
  
}
