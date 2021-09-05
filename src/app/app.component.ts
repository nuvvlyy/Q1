import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'q1';

  number: number;
  calculationType = 'isPrime';

  handleNumberChange(event): void{
    this.number = event.target.value < 0 ? this.number = 1 : Math.round(event.target.value) ;

  }
  handleCalculationTypeChange(value: string): void{
    this.calculationType = value;
  }

  checkNumber(): boolean|string{
    if (!this.number || !this.calculationType) { return ''; }
    if (this.calculationType === 'isPrime'){
      for (let i = 2; i < +Math.sqrt(this.number) ; i++){
        if (this.number % i === 0) { return false; }
      }
      return this.number > 1;
    }else{
       return this.isFibonacci(this.number)

    }
  }
  isPerfectSquare(num: number): boolean {
    const n = +Math.sqrt(num);
    return Math.pow(n, 2) === num;
  }
  isFibonacci(n: number): boolean{
    return this.isPerfectSquare(5 * n * n + 4) ||
    this.isPerfectSquare(5 * n * n - 4);
  }
}
