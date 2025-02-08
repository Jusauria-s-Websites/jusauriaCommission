import { Component, HostListener, Input } from '@angular/core';
import { AlbumImage } from '../../Pojos/Objects/AlbumImage';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() images!:AlbumImage[] ;

  currentIndex = 0; 
  imagesPerPage = 4;
  ngOnInit() {
    this.updateImagesPerPage(); // Initialize images per page on component load
  }
  get visibleImages(): any{
    if(this.images)
    return this.images.slice(this.currentIndex, this.currentIndex + this.imagesPerPage);
  }

  next() {
    if(this.images)
    if (this.currentIndex + this.imagesPerPage < this.images.length) {
      this.currentIndex += this.imagesPerPage;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.imagesPerPage;
    }
  }
  @HostListener('window:resize', [])
  updateImagesPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      this.imagesPerPage = 1; // Mobile
    } else if (screenWidth <= 992) {
      this.imagesPerPage = 2; // Tablet
    } else if (screenWidth <= 1200) {
      this.imagesPerPage = 3; // Tablet
    } else {
      this.imagesPerPage = 4; // Desktop
    }
  }
}
