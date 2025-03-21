import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Media';

  num1: number | null = null;
  num2: number | null = null;
  num3: number | null = null;
  num4: number | null = null;
  media: number | null = null;

  calcularmedia(){
    if (this.num1 !== null && this.num2 !== null && this.num3 !== null && this.num4 !== null) {
      this.media = (this.num1 + this.num2 + this.num3 + this.num4) / 4

   }
  }
}

