import { Component, Input } from '@angular/core';

@Component({
  selector: 'fibonacci',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  fibo : undefined;

  ngOnInit() 
  {
    
    //this.fibo = ;
  }

  private getNthFib(n: number) 
  {
    const fib = [0, 1];
    function getFib(n: number) {
      const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
      if (n > nextFib) {
        fib.push(nextFib);
        getFib(n);
      }
    }
    getFib(n);
    return fib;
  }
  
  getVal(event: Event) 
  {

    console.log(event);
    
    this.fibo = this.test(Number((event.target as HTMLInputElement).value));
    return this.fibo;
  }

  public test(this: any, n: number) 
  {
    if (n < 2) return n;
    return this.test(n - 1) + this.test(n - 2);
  }
}
