import { Point } from "@app/shared/objects/IPoint";
import {pointsJson} from '@app/shared/objects/points.js'

export class Geometry {
	public scene: any;
	public viewer: any;
	private pointArray: Array<Point> = []
	constructor(viewer: any) {
		this.viewer = viewer;
		this.scene = this.viewer.scene;
		this.pointArray = pointsJson;
	}

	//Se agregan las figuras primitivas al visor
	//Se recibe como parametro un array de tipo Array<GeometryInstance>
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
		let citizensBankPark = this.viewer.entities.add({
			name: names_location,
			position: Cesium.Cartesian3.fromDegrees(latitude, longitude),
			point: {
				pixelSize: 5,
				color: Cesium.Color.RED,
				outlineColor: Cesium.Color.BLACK,
				outlineWidth: 2
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

		this.viewer.zoomTo(this.viewer.entities);
	}

	public runPoints() {
		for (const point of this.pointArray) {
			console.log(point);
			this.FixPointCoordinate(point.latitude, point.longitude, point.name);
		}
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
}