import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [ 
        HttpClientModule,
        CommonModule,
        PhotoModule,
        PhotoListModule
    ]
})
export class PhotosModule {}