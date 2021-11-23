import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sight } from 'src/app/models/sight.model';
import { SightService } from 'src/app/services/sight.service';

@Component({
  selector: 'app-create-sight',
  templateUrl: './create-sight.component.html',
  styleUrls: ['./create-sight.component.css'],
})
export class CreateSightComponent implements OnInit {
  sight: Sight = {
    name: '',
    description: '',
    active: false,
    relevance: 'znamenito',
    langitude: '',
    longitude: '',
    images: [],
  };
  image: string = '';

  message: string = '';

  constructor(private sightService: SightService) {}

  ngOnInit(): void {}

  fetchSight(sightId: any): void {
    this.sightService.get(sightId).subscribe({
      next: (data) => {
        console.log(data);
        this.sight = data;
      },
      error: (error) => console.log(error),
    });
  }

  createSight(): void {
    this.message = '';

    this.sightService.create({ ...this.sight }).subscribe({
      next: (data) => {
        console.log(data);
        this.message = 'New sight was created!';
      },
      error: (e) => console.log(e),
    });
  }

  addImage(): void {
    this.sight.images?.push({ url: this.image });
  }

  removeImage(index: number): void {
    this.sight.images = this.sight.images?.filter((_, i) => index !== i);
  }
}
