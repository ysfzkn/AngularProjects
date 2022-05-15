import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular_five_event',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  curr : string | undefined;
  textShow: boolean | undefined;
  showkey: boolean | undefined;
  counter = 0;
  counter2 = 0;

  ngOnInit() 
  {
    
    //this.fibo = ;
  }
  
  getVal(event: Event) 
  {

    console.log(event);
    
    this.curr = (event.target as HTMLInputElement).value;

    return this.curr;
  }

  

  showText()
  {
    this.textShow = true;
  }
  hideText()
  {
    this.textShow = false;
  }

  onKeyPress(event : Event)
  {
      if((event.target as HTMLInputElement).value == "Hello")
      {
        this.showkey = true;
      }
      else
        this.showkey = false;
  }

  mouseover(){
    return this.counter++;
   }
   
  copy(){
    return this.counter2++;
   }
}
