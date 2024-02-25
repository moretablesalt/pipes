import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import {ConvertPipe} from "./convert.pipe";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = '';
  paymentDate = '';
  amount = '';
  height = 0;
  miles = 0;

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange(event: Event) {
    this.paymentDate = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    this.amount = (event.target as HTMLInputElement).value;
  }

  onHeightChange(event: Event) {
    this.height = parseFloat((event.target as HTMLInputElement).value);
  }

  onMilesChange(event: Event) {
    this.miles = parseFloat((event.target as HTMLInputElement).value);
  }
}
