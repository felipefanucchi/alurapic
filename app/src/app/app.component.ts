import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photos: Photo[];
  
  constructor(private photosService: PhotoService) {}

  ngOnInit(): void {
    this.photosService.listFromUser()
      .subscribe(photos =>  {
        this.photos = photos;
    });
  }
}
