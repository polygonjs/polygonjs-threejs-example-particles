
This repository is a continuation to the [tutorial](https://polygonjs.com/docs/integrations/threejs) showing how to integrate Polygonjs and Threejs scenes together. You can also look at the [repository](https://github.com/polygonjs/polygonjs-threejs-example) of that tutorial.

Here we show how to integrate Polygonjs scenes which contain **particles system**.

The main difference with particle system is that they require a WebGLRenderer to function. When you use a Polygonjs scene on its own, you would view it with its [viewer](https://polygonjs.com/docs/api/TypedViewer). The viewer mostly takes care of rendering the scene to the screen, but it is also useful to other scene objects like the particles, as they need to render things off screen, in order to run the simulation.

## Recommended approach: Use Polygonjs Viewer

So, to make things as easy as possible, it is recommended that you create a viewer. In order to do that, all you need is to change the call 

```
const loadedData = await loadScene_scene_01();
```

to:

```
const loadedData = await loadScene_scene_01({
  domElement: 'app'
});
```

This will create a viewer for you, mount it on the element 'app', and you will then see the particles.

From then, you can simply add your threejs scene into the Polygonjs one, as shown in the [previous tutorial](https://polygonjs.com/docs/integrations/threejs).

## Other approach: Use Threejs Renderer

But if you need to use your own threejs WebGLRenderer, you need to tell Polygonjs that this renderer is available. And this is done like this:

```
loadedData.scene.registerRenderer(renderer);
```

This will allow the particles to simulate as expected.

But there is still one caveat. Just like we saw in the [previous tutorial](https://polygonjs.com/docs/integrations/threejs), some events - like mouse and keyboard events - are handled by the viewer. So if you need to simulate particles that follow your mouse for instance, this will not work. This is one of the reasons why the first approach is recommended.


# Open app

Install dependencies: `yarn` or `npm run install`

Start App: `yarn dev` or `npm run dev`

# Open Polygonjs Editor

- 1: install dependencies, with `yarn` or `npm install`
- 2: run: `yarn polygon` or `npm run polygon`
- 3: open your browser on `http://localhost:8091`

If you have any trouble installing it, the docs may be able to help: [https://polygonjs.com/docs/](https://polygonjs.com/docs/)