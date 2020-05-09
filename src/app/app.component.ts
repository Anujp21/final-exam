import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalexam';


  number1: number;
  number2: number;
  errors: string;
  results: string;


  validate(){
    this.errors = ''
    //Validate the numbers 
    if(isNaN(this.number1)){
      this.errors = 'Number 1 input '+this.number1+ ' is not a valid number\r\n';
    }
    if(isNaN(this.number2)){
      this.errors = this.errors +  'Number 2 input '+this.number2+ ' is not a valid number';
    }



    return this.errors;
  }

  calculate(){
    console.log('calculating');
    this.errors = '';
    this.results = '';
    this.validate();


  }




}
