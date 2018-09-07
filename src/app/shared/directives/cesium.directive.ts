import { Directive, ElementRef, OnInit } from '@angular/core';
import { CesiumService } from '@app/shared/services';

@Directive({
	selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {
	public viewer: any;
	public scene: any;

	constructor(private el: ElementRef, private cesiumService: CesiumService) { }

	ngOnInit() {
		
		Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZmY2Zjc5Mi1kOTMzLTQzZDMtOGExMC05ODRmM2U1MTljMjciLCJpZCI6MjU5NCwiaWF0IjoxNTMzNzkwNDA0fQ.DoY7YEDMIVVtvzK1Z_04D2qwj8wBTVF2UAmCjfkJQTQ';
		this.viewer = new Cesium.Viewer(this.el.nativeElement, {
			infoBox: false,
			homeButton: false,
			navigationHelpButton: false,
			navigationInstructionsInitiallyVisible: false,
			animation: false,
			timeline: false,
			/*imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
		        url : '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
		    })*/
		});

		var imageryLayers = this.viewer.imageryLayers; 
		imageryLayers.addImageryProvider(new Cesium.WebMapServiceImageryProvider(
			{ 
				url : 'http://016e57be.ngrok.io/geoserver/prueba/wms', 
				layers : 'prueba:T18NVJ_20180901T152629_TCI1', 
			}));

		
		this.cesiumService.init(this.viewer);
		/*var widget = new Cesium.CesiumWidget(this.el.nativeElement);
		var url='http://016e57be.ngrok.io/geoserver/wms'; //Geoserver URL
		var layers = widget.scene.globe.imageryLayers;
		    layers.removeAll();
		    layers.addImageryProvider(new Cesium.WebMapServiceImageryProvider({
		        url : url,        
		        layers: 'prueba'// Here just give layer name
		    }));*/
		//this.cesiumService.paintPoints();
		//this.cesiumService.model3D();

		//this.geometry.FixPointCoordinate(-35.166493, -16.52628, 'Citizens Bank Park');
		//let figureOne = this.geometry.getEllipsoidGeometry(-35.166493, 29.9060534);
		//let figureTwo = this.geometry.getEllipsoidGeometry(-75.166493, 39.9060534);
		//let figureThre = this.geometry.getEllipsoidGeometry(-55.1676493, 89.9060534);

		//this.geometry.AddPrimitives([figureOne, figureTwo, figureThre])

	}
	
}
