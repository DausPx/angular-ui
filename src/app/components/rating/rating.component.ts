import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() sightId?: string;
  rating?: string;
  rate?: number;

  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    if (this.sightId) {
      this.fetchRating(this.sightId);
    }
  }

  fetchRating(sightId: any): void {
    this.ratingService.getSightRating(sightId).subscribe({
      next: (data) => {
        try {
          const indexOfDot = `${data}`.indexOf(".")
          const formattedRating = `${data}`.substring(0, indexOfDot+3)
          this.rating = formattedRating;
        } catch (error) {
          this.rating = data
        }
      },
      error: (e) => console.log(e),
    });
  }

  setRating() {
    if (this.rate && this.rate > 0 && this.rate < 6) {
      this.ratingService.create(this.rate, this.sightId).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) => console.log(e),
      });
      this.fetchRating(this.sightId);
    }
  }
}
