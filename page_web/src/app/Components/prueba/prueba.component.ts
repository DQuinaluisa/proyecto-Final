import {ChangeDetectionStrategy,Component, OnInit} from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { interval, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { slider } from '../../slide-animation';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PruebaComponent implements OnInit {

  images = ['assets/img/pag1.svg', 'assets/img/pag2.svg', 'assets/img/pag3.svg'];
  images1 = ['assets/img/pag5.svg', 'assets/img/pag6.svg', 'assets/img/pag7.svg'];
  images2 = ['assets/img/pag7.svg', 'assets/img/pag6.svg', 'assets/img/pag3.svg'];
  carouselBanner: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 400,
    interval: {
      timing: 3000,
      initialDelay: 1000
    },
    point: {
      visible: true
    },
    load: 2,
    custom: 'banner',
    loop: true,
    touch: true, // touch is not currently in active for vertical carousel, will enable it in future build
    vertical: {
      enabled: true,
      height: 300
    }
  };
  tempData: any[]=[];
  tempData1: any[]=[];
  tempData2: any[]=[];
  public carouselTileItems$!: Observable<number[]>;
  public carouselTileItems1$!: Observable<number[]>;
  public carouselTileItems2$!: Observable<number[]>;
  
  ngOnInit() {
    this.tempData = [];
    this.tempData1 = [];
    this.tempData2 = [];
    //PRIMER CARRUSEL
    this.carouselTileItems$ = interval(200).pipe(
      startWith(1),
      take(3),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.images[Math.floor(Math.random() * this.images.length)]
        ]);
        return data;
      })
    );
    //SEGUNDO CARRUSEL
    this.carouselTileItems1$ = interval(200).pipe(
      startWith(1),
      take(3),
      map(val => {
        const data1 = (this.tempData1 = [
          ...this.tempData1,
          this.images1[Math.floor(Math.random() * this.images1.length)]
        ]);
        return data1;
      })
    );
    //TERCERO CARRUSEL
    this.carouselTileItems2$ = interval(200).pipe(
      startWith(1),
      take(3),
      map(val => {
        const data2 = (this.tempData2 = [
          ...this.tempData2,
          this.images2[Math.floor(Math.random() * this.images2.length)]
        ]);
        return data2;
      })
    );
  }


}
