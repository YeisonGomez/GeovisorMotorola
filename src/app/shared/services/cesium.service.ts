import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MotorolaAuth } from '@app/shared/constanst';
import { Point } from "@app/shared/models";
import { points } from "@app/shared/dummy/points.dummy";
import { Subject, BehaviorSubject } from 'rxjs';
import { MemberService } from '@app/shared/services/member.service';

@Injectable()
export class CesiumService {

	private viewer: any;
	private scene: any;

	private suscribeMembers: any;
	private memberArray: Array<Point> = [];

	constructor(
		private api: ApiService,
		private memberService: MemberService
	) { }

	public init(viewer: any) {
		this.viewer = viewer;
		this.scene = this.viewer.scene;
		this.loadMembers();
	}

	public loadMembers() {
		this.suscribeMembers = this.memberService.$memberObservable.subscribe(members => {
			if (members) {
				this.memberArray = [];
				members.map((member: any) => {
					let point: Point = {
						id: member.address,
						latitude: member.currentLocation.longitude,
						longitude: member.currentLocation.latitude
					}
					this.memberArray.push(point);
					this.paintPoints(); 
				})

			}

		});
	}

	public paintPoints() {
		for (const point of this.memberArray) {
			console.log("Poniendo puntos: ", point);
			this.FixPointCoordinate(point.latitude, point.longitude, point.name);
		}
	}



	AddPrimitives(figures: any) {
		this.scene.primitives.add(new Cesium.Primitive({
			geometryInstances: [...figures],
			appearance: new Cesium.PerInstanceColorAppearance({
				translucent: true,
				closed: true
			})
		}));
	}

	// Se crea el objeto ElipsoidGeometry y se retorna la instancia
	getEllipsoidGeometry(latitude: number, longitude: number) {
		let ellipsoidGeometry = new Cesium.EllipsoidGeometry({
			vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,
			radii: new Cesium.Cartesian3(300000.0, 300000.0, 300000.0)
		});

		let cyanEllipsoidInstance = new Cesium.GeometryInstance({
			geometry: ellipsoidGeometry,
			modelMatrix: Cesium.Matrix4.multiplyByTranslation(
				Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(latitude, longitude)),
				new Cesium.Cartesian3(0.0, 0.0, 150000.0),
				new Cesium.Matrix4()
			),
			attributes: {
				color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.CYAN)
			}
		});
		return cyanEllipsoidInstance;
	}

	FixPointCoordinate(latitude: number, longitude: number, names_location: string) {
		console.log(this.viewer.entities);
		let citizensBankPark = this.viewer.entities.add({
			name: names_location,
			position: Cesium.Cartesian3.fromDegrees(latitude, longitude),
			/*point: {
				pixelSize: 5,
				color: Cesium.Color.RED,
				outlineColor: Cesium.Color.BLACK,
				outlineWidth: 2
			},*/
			billboard: {
				image: '../../../assets/image/marker.png',
				width: 27,
				height: 27
			},
			label: {
				text: names_location,
				font: '14pt monospace',
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				outlineWidth: 2,
				verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
				pixelOffset: new Cesium.Cartesian2(0, -9)
			}
		});

		//this.viewer.zoomTo(this.viewer.entities);
	}

	public ellipseRange(latitude: number, longitude: number) {
		let entity = this.viewer.entities.add({
			position: Cesium.Cartesian3.fromDegrees(latitude, longitude),
			ellipse: {
				semiMinorAxis: 2500.0,
				semiMajorAxis: 2500.0,
				material: Cesium.Color.BLUE.withAlpha(0.5)
			}
		});
		this.viewer.zoomTo(this.viewer.entities);
	}


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

	public model3D() {
		var entity = this.viewer.entities.add({
			position: Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706),
			model: {
				uri: './GroundVehicle/GroundVehicle.glb'
			}
		});
		this.viewer.trackedEntity = entity;
	}
}