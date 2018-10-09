import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo.interface';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  
  photos: Photo[];
  
  constructor(private photosService: PhotoService) {}

  ngOnInit(): void {
    this.photosService.listFromUser()
      .subscribe(photos =>  {
        this.photos = photos;
    });
  }

}
