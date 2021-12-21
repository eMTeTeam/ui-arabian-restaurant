import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import jump from 'jump.js';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  slidesStore1: Array<any> = [];
  slidesStore2: Array<any> = [];
  slidesStore3: Array<any> = [];

  constructor() { 
    this.owlcaro();
    
  }

  

  ngOnInit(): void {
    
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    center: true,    
    navSpeed: 500,
    margin: 5,    
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      500: {
        items: 3
      },
      940: {
        items: 4
      }
    }
    
  }

  owlcaro = () => {

    // let offset = -5;
    // jump('.scrolltop', {
    //   offset: offset
    // });

    this.slidesStore1 = [
      { src: "../assets/carousel/ArabRest_logo.jpg" },
      { src: "../assets/carousel/HotelPic_1.jpg" },
      { src: "../assets/carousel/HotelPic_3.jpg" },
      { src: "../assets/carousel/HotelPic_6.jpg" },
      { src: "../assets/carousel/HotelPic_7.jpg" },
      { src: "../assets/carousel/Menu_Front Page.jpg" }      
    ];
    this.slidesStore2 = [
      { src: "../assets/carousel/BuketBriyani.jpg" },
      { src: "../assets/carousel/Mandhi_1.jpg" },
      { src: "../assets/carousel/Mandhi_2.jpg" },
      { src: "../assets/carousel/Mandhi_3.jpg" },
      { src: "../assets/carousel/Mandhi_4.jpg" },
      { src: "../assets/carousel/Mandhi_5.jpg" }
    ];
    this.slidesStore3 = [
      { src: "../assets/carousel/Food_8.jpg" },
      { src: "../assets/carousel/Food_16_shawerma_spl_item.jpg" },
      { src: "../assets/carousel/Food_1.jpg" },
      { src: "../assets/carousel/Food_2.jpg" },
      { src: "../assets/carousel/Food_4.jpg" },      
      { src: "../assets/carousel/Food_6.jpg" },      
      { src: "../assets/carousel/Food_9.jpg" },      
      { src: "../assets/carousel/Food_11.jpg" },
      { src: "../assets/carousel/Food_13.jpg" }      
    ];
  }
}


