import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'finalexam';

  number1: number = 0;
  number2: number = 15;
  errors: string;
  results: string;

  ngOnInit(){

  }

  validate(){
    this.errors = ''
    //Validate the numbers 
    if(isNaN(this.number1)){
      this.errors = '\r\nNumber 1 input '+this.number1+ ' is not a valid number';
    }

    if(isNaN(this.number2)){
      this.errors = this.errors +  '\r\nNumber 2 input '+this.number2+ ' is not a valid number';
    }

    if(this.number1 <= 2 || this.number1 >= 100){
      this.errors = this.errors + '\r\nNumber 1 input '+this.number1+ ' is not in the range of 2 and 100\r\n';
    }

    if(this.number2 <= 2 || this.number2 >= 100){
      this.errors = this.errors + 'Number 2 input '+this.number2+ ' is not in the range of 2 and 100\r\n';
    }




    return this.errors;
  }

  calculate(){
    console.log('calculating');
    console.log(this.number1)
    this.results = '';
    this.validate();

    
    for( let i = this.number1; i< this.number2; i++){
      if( i % 2  == 0){
        this.results = this.results + ' , ' +i;
      }
    }


  }




}
