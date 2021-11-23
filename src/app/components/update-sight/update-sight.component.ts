import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sight } from 'src/app/models/sight.model';
import { SightService } from 'src/app/services/sight.service';

@Component({
  selector: 'app-update-sight',
  templateUrl: './update-sight.component.html',
  styleUrls: ['./update-sight.component.css']
})
export class UpdateSightComponent implements OnInit {

  sight: Sight = {
    name: '',
    description: '',
    active: false,
    relevance: "znamenito",
    langitude: "",
    longitude: "",
    images: []
  }
  image: string= '';

  message: string= '';

  constructor(
    private sightService: SightService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchSight(this.route.snapshot.params['id']);
  }

  fetchSight(sightId: any): void{
    this.sightService.get(sightId)
      .subscribe({
        next: (data) =>{
          console.log(data)
          this.sight = data
        },
        error: (error) => console.log(error)
      })
  }

  createSight(): void{
    this.message = ''
    
    this.sightService.create({"sight": this.sight})
      .subscribe({
        next:(data)=>{
          console.log(data)
          this.message= "New sight was created!"
        },
        error: (e) => console.log(e)
      })
  }

  addImage(): void{
      this.sight.images?.push({url: this.image})
  }

  removeImage(index: number): void {
    this.sight.images = this.sight.images?.filter((_, i) => index !== i);
  }

}
