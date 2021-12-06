import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import jump from 'jump.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arabianRestaurant';
  ariaExpanded: boolean = false;
  windowScrolled: boolean = false;
  slidesStore1: Array<any> = [];
  slidesStore2: Array<any> = [];
  slidesStore3: Array<any> = [];

  ngOnInit() {
    AOS.init({ duration: 1000, once: true });
  }

  constructor(private router: Router)
  {
    
    this.owlcaro(); 
   }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll = ($event: any) => {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (verticalOffset > 60) {
      document.getElementById("mainNav").classList.add('navbar-shrink');
      this.windowScrolled = true;
    } else if (this.windowScrolled && verticalOffset < 10) {
      this.windowScrolled = false;
      document.getElementById("mainNav").classList.remove('navbar-shrink');
    }
  }

  scrollToTarget = (target: string) => {
    const menuButtonElement = document.getElementById("menu-button");
    menuButtonElement.classList.add('collapsed');
    menuButtonElement.setAttribute("aria-expanded", "false");
    document.getElementById("navbarMenuContent").classList.remove('show');

    let offset = -95;

    this.ariaExpanded = false;
    jump(target, {
      offset: offset
    });
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
