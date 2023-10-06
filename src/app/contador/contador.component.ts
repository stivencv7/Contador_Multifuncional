import { Component, Type } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  title: string = "Multi Functional Counters";
  str: string = "";
  textLength: number = 0;
  alphabets: number = 0;
  numCount: number = 0;
  space: number = 0;
 

  counter: number = 0;

  increase() {
    this.counter += 1;
  }
  deincrement() {
    this.counter -= 1;
  }
  multiply() {
    this.counter *= 2;
  }
  division() {
    this.counter /= 2;
  }

  sqar() {
    this.counter = Math.pow(this.counter, 2);
  }
  cubo() {
    this.counter = Math.pow(this.counter, 3);
  }

  ochange() {
    let space=0;
    let al=0;
    let count=0;
    
    for (let i = 0; i < this.str.length; i++) {
      if (this.str.charAt(i) == " ") {
        ++space;
      } else if (Number.isNaN(parseInt(this.str.charAt(i)))) {
        ++al;
      } else {
        ++count;
      }
    }
    this.textLength=this.str.length;
    this.space=space;
    this.alphabets=al;
    this.numCount=count;


  }

}
