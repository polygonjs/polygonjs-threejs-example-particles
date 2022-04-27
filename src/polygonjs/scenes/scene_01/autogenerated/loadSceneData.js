import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1651056248031',
	root: '1651056248031',
	nodes: {
		geo1: '1651056248031',
		'geo1/particlesSystemGpu1': '1651056248031',
		'geo1/MAT': '1651056248031',
		'geo1/MAT/pointsParticles': '1651056248031',
		'geo1/MAT/meshLambertBuilder_INSTANCES': '1651056248031',
		'geo1/particlesSystemGpu2': '1651056248031',
		perspectiveCamera1: '1651056248031',
		'perspectiveCamera1/events1': '1651056248031',
	},
};

export const loadSceneData_scene_01 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_01',
		urlPrefix: sceneDataRoot + '/' + 'scene_01',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
