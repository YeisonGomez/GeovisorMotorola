import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
  	Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZmY2Zjc5Mi1kOTMzLTQzZDMtOGExMC05ODRmM2U1MTljMjciLCJpZCI6MjU5NCwiaWF0IjoxNTMzNzkwNDA0fQ.DoY7YEDMIVVtvzK1Z_04D2qwj8wBTVF2UAmCjfkJQTQ';
    const viewer = new Cesium.Viewer(this.el.nativeElement, {
    	infoBox: false,
    	homeButton: false,
    	navigationHelpButton: false,
    	navigationInstructionsInitiallyVisible: false,
    	animation: false,
    	timeline: false
    });
  }

}
