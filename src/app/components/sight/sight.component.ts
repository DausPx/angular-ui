import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sight } from 'src/app/models/sight.model';
import { SightService } from 'src/app/services/sight.service';

@Component({
  selector: 'app-sight',
  templateUrl: './sight.component.html',
  styleUrls: ['./sight.component.css'],
})
export class SightComponent implements OnInit {
  sight?: Sight;

  constructor(
    private sightService: SightService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchSight(this.route.snapshot.params['id']);
  }

  fetchSight(sightId: any): void {
    this.sightService.get(sightId).subscribe({
      next: (data) => {
        console.log(data);
        this.sight = data;
      },
      error: (error) => console.log(error),
    });
  }
}
