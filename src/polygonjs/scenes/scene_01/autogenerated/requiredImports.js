// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshLambertBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder";
import { PointsBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/PointsBuilder";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { HemisphereLightObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight";
import { PerspectiveCameraObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera";
import { SpotLightObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/SpotLight";
// sop
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { EventsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork";
import { InstanceSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { ParticlesSystemGpuSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/ParticlesSystemGpu";
import { ScatterSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Scatter";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";

export const requiredImports_scene_01 = {
  nodes: [
    CameraOrbitControlsEventNode,
    MeshLambertBuilderMatNode,
    PointsBuilderMatNode,
    GeoObjNode,
    HemisphereLightObjNode,
    PerspectiveCameraObjNode,
    SpotLightObjNode,
    BoxSopNode,
    EventsNetworkSopNode,
    InstanceSopNode,
    MaterialsNetworkSopNode,
    ParticlesSystemGpuSopNode,
    ScatterSopNode,
    SphereSopNode,
  ],
  operations: [],
};
