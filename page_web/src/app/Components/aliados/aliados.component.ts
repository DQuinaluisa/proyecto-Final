import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-aliados',
  templateUrl: './aliados.component.html',
  styleUrls: ['./aliados.component.css']
})
export class AliadosComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#00172A';
  }

}
