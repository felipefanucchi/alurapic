import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo.interface';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  
  photos: Photo[];
  
  constructor(
    private photosService: PhotoService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const user = this.activatedRoute.snapshot.params.userName;
    this.photosService.listFromUser(user)
      .subscribe(photos =>  {
        this.photos = photos;
    });
  }

}
