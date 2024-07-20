<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  WebGLRenderer,
  Color,
  Fog,
  AmbientLight,
} from "three";
import type { Ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let renderer: WebGLRenderer;
let controls: OrbitControls;
let model: any;
let isControlsActive = false;

const experience: Ref<HTMLCanvasElement | null> = ref(null);

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

const bgColor = new Color("#12130F");

const scene = new Scene();

scene.background = bgColor;

const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
camera.position.set(0, 0, 450);

scene.add(camera);

const ambientLight = new AmbientLight(0xE4DFDA, 1);
scene.add(ambientLight);

const gltfLoader = new GLTFLoader();

gltfLoader.load("/model/figure-of-a-dancer-150k-4096-web.gltf", (gltf) => {
  model = gltf.scene;
  scene.add(gltf.scene);
});

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

function updateRenderer() {
  renderer.setSize(width.value, 785); //Größe einstellen (grad nicht responsive, für responsive = height.value)
  renderer.render(scene, camera);
}

function setRenderer() {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.addEventListener("start", () => {
      isControlsActive = true;
    });
    controls.addEventListener("end", () => {
      isControlsActive = false;
    });
    updateRenderer();
  }
}

watch(aspectRatio, () => {
  updateCamera();
  updateRenderer();
});

onMounted(() => {
  setRenderer();
  loop();
});

const loop = () => {
  controls.update();
  if (!isControlsActive && model) {
    model.rotation.y -= 0.01;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};
</script>

<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>
