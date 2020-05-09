import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'finalexam';

  number1: number = 0;
  number2: number = 0;
  errors: string = '';
  results: string = '';
  isvalid: boolean;

  ngOnInit(){

  }

  validate(){
    this.errors = ''
    //Validate the numbers 
    if(isNaN(this.number1)){
      this.errors = this.errors + '\r\nNumber 1 input '+this.number1+ ' is not a valid number';
      this.isvalid =false;
    }
    
    if(isNaN(this.number2)){
      this.errors = this.errors +  '\r\nNumber 2 input '+this.number2+ ' is not a valid number';
      this.isvalid =false;

    }

    if(this.number1 < 2 || this.number1 > 100){
      this.errors = this.errors + '\r\nNumber 1 input '+this.number1+ ' is not in the range of 2 and 100\r\n';
      this.isvalid =false;
    
    }

    if(this.number2 < 2 || this.number2 > 100){
      this.errors = this.errors + 'Number 2 input '+this.number2+ ' is not in the range of 2 and 100\r\n';
      this.isvalid =false;
    
    }
  }

  calculate(){
    this.isvalid = true;
    this.results = '';
    this.validate();
    console.log(this.isvalid)
    console.log(this.number1)
    console.log(this.number2)
    if(this.isvalid){
      for( let i = Number(this.number1); i< Number(this.number2); i++){
        if( i % 2  == 0){
          if(this.results === ''){
            this.results = i+'';
          }else{
            this.results = this.results + ' , ' + i;
          }
          
        }
      }
      console.log(this.results)
    }

  }




}
