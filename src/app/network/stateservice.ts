import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
    state: any = undefined;


  constructor() { }

  public injectState(state: any){
      this.state = state;

  }

  public ejectState(){
      return this.state;
  }
}