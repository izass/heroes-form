import { Component } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }

  newHero(): void {
    this.model = new Hero(42, '', '');
  }

  editHero = (): void => {
    this.submitted = false;
  }
}
