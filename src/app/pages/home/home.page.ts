import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.1,
  };
  sliderItems = [
    { active: true, name: 'Michael Simpsom' },
    { active: false, name: 'Kate Brown' },
    { active: false, name: 'Jack Sparrow' },
    { active: false, name: 'Elsie Roy' },
  ];
  patientProfiles = [
    {image:'assets/images/prof1.png'},
    {image:'assets/images/prof2.png'},
    {image:'assets/images/prof3.png'},
    {image:'assets/images/prof3.png'}
  ];
  activeSlideIndex = 0;
  constructor() {}

  ngOnInit() {}
  slideChanged() {
    this.slides.getActiveIndex().then((index: number) => {
      console.log(index);
      this.activeSlideIndex = index;
    });
  }
}
