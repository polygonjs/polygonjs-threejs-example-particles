
import {PolyScene} from '@polygonjs/polygonjs/dist/src/engine/scene/PolyScene';
// obj
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {SpotLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/SpotLight';
// sop
import {BoxSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {InstanceSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork';
import {ParticlesSystemGpuSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/ParticlesSystemGpu';
import {ScatterSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Scatter';
import {SphereSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere';
// mat
import {MeshLambertBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder';
import {PointsBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/PointsBuilder';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';

export class PolySceneWithNodeMap_scene_01 extends PolyScene {
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/spotLight1'): SpotLightObjNode;
	node(path: '/geo1'): GeoObjNode;
	node(path: '/geo1/scatter1'): ScatterSopNode;
	node(path: '/geo1/sphere1'): SphereSopNode;
	node(path: '/geo1/instance1'): InstanceSopNode;
	node(path: '/geo1/box1'): BoxSopNode;
	node(path: '/geo1/particlesSystemGpu1'): ParticlesSystemGpuSopNode;
	node(path: '/geo1/MAT'): MaterialsNetworkSopNode;
	node(path: '/geo1/MAT/pointsParticles'): PointsBuilderMatNode;
	node(path: '/geo1/MAT/meshLambertBuilder_INSTANCES'): MeshLambertBuilderMatNode;
	node(path: '/geo1/particlesSystemGpu2'): ParticlesSystemGpuSopNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
