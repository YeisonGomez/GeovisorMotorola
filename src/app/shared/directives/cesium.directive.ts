import { Directive, ElementRef, OnInit } from '@angular/core';
import { Geometry } from '@app/shared/objects/Geometry';

@Directive({
	selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {
	public viewer: any;
	public scene: any;
	public geometry: Geometry;
	

	constructor(private el: ElementRef) { }

	ngOnInit() {
		Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZmY2Zjc5Mi1kOTMzLTQzZDMtOGExMC05ODRmM2U1MTljMjciLCJpZCI6MjU5NCwiaWF0IjoxNTMzNzkwNDA0fQ.DoY7YEDMIVVtvzK1Z_04D2qwj8wBTVF2UAmCjfkJQTQ';
		this.viewer = new Cesium.Viewer(this.el.nativeElement, {
			infoBox: false,
			homeButton: false,
			navigationHelpButton: false,
			navigationInstructionsInitiallyVisible: false,
			animation: false,
			timeline: false
		});
		this.scene = this.viewer.scene;
		this.geometry = new Geometry(this.scene, this.viewer);

		let figureOne = this.geometry.getEllipsoidGeometry(-35.166493, 29.9060534);
		let figureTwo = this.geometry.getEllipsoidGeometry(-75.166493, 39.9060534);
		let figureThre = this.geometry.getEllipsoidGeometry(-55.1676493, 89.9060534);

		this.geometry.AddPrimitives([figureOne, figureTwo, figureThre])
		
		//this.geometry.FixPointCoordinate(-75.166493, 39.9060534, 'Citizens Bank Park');
		

	}




	/**
	 * 	
		  let ellipsoidGeometry = new Cesium.EllipsoidGeometry({
			vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,
			radii: new Cesium.Cartesian3(300000.0, 200000.0, 150000.0)
		});
		
		let cyanEllipsoidInstance = new Cesium.GeometryInstance({
			geometry: ellipsoidGeometry,
			modelMatrix: Cesium.Matrix4.multiplyByTranslation(
				Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-100.0, 40.0)),
				new Cesium.Cartesian3(0.0, 0.0, 150000.0),
				new Cesium.Matrix4()
			),
			attributes: {
				color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.CYAN)
			}
		});

		let orangeEllipsoidInstance = new Cesium.GeometryInstance({
			geometry: ellipsoidGeometry,
			modelMatrix: Cesium.Matrix4.multiplyByTranslation(
				Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-100.0, 40.0)),
				new Cesium.Cartesian3(0.0, 0.0, 450000.0),
				new Cesium.Matrix4()
			),
			attributes: {
				color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.ORANGE)
			}
		});

		this.scene.primitives.add(new Cesium.Primitive({
			geometryInstances: [cyanEllipsoidInstance, orangeEllipsoidInstance],
			appearance: new Cesium.PerInstanceColorAppearance({
				translucent: true,
				closed: true
			})
		}));

	
	 */


	

	private coordinateRange(coordinate: Array<number>, names_location: string) {
		let wyoming = this.viewer.entities.add({
			name: names_location,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(coordinate),
				height: 0,
				material: Cesium.Color.RED.withAlpha(0.5),
				outline: true,
				outlineColor: Cesium.Color.BLACK
			}
		});
		wyoming.polygon.height = 250000;
		wyoming.polygon.height = 200000;
		wyoming.polygon.extrudedHeight = 250000;
		this.viewer.trackedEntity = wyoming;
		this.viewer.zoomTo(wyoming);
	}

}
