import { Component, Input } from '@angular/core';
import { HeroType } from 'src/app/domain/hero-type';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-hero-submitted',
  templateUrl: './hero-submitted.component.html',
  styleUrls: ['./hero-submitted.component.scss']
})
export class HeroSubmittedComponent {
  @Input() hero!: Hero;
  @Input() editHero!: () => void
}
