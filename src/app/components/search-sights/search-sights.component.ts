import { Component, OnInit } from '@angular/core';
import { Sight } from 'src/app/models/sight.model';
import { SightService } from 'src/app/services/sight.service';

@Component({
  selector: 'app-search-sights',
  templateUrl: './search-sights.component.html',
  styleUrls: ['./search-sights.component.css'],
})
export class SearchSightsComponent implements OnInit {
  sights?: Sight[];
  searchName = '';
  relevance = '';

  constructor(private sightService: SightService) {}

  ngOnInit(): void {
    this.searchSights();
  }

  searchSights(): void {
    this.sightService.search(this.searchName, this.relevance).subscribe({
      next: (data) => {
        this.sights = data;
        console.log(data);
      },
      error: (e) => console.log(e),
    });
  }
}
