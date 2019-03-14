import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [PhotoComponent],
    imports: [CommonModule],
    exports: [PhotoComponent]
})
export class PhotoModule {}