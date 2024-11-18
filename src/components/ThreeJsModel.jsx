import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const ModelViewer = () => {
  const containerRef = useRef(null);
  const modelRef = useRef(null);
  const mixerRef = useRef(null);
  const actionRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Load Model
    const loader = new GLTFLoader();
    loader.load("robo.glb", (gltf) => {
      const model = gltf.scene;
      modelRef.current = model;
      scene.add(model);

      const mixer = new THREE.AnimationMixer(model);
      mixerRef.current = mixer;
      const action = mixer.clipAction(gltf.animations[0]);
      actionRef.current = action;
      action.play();
      action.paused = true;

      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (!actionRef.current || !self.isActive) return;
          actionRef.current.time = self.progress * action.getClip().duration;
          mixer.update(0);
        },
      });
    });

    let clock = new THREE.Clock();
    let lastRender = 0;
    const targetFPS = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      if (elapsedTime - lastRender > 1 / targetFPS) {
        renderer.render(scene, camera);
        lastRender = elapsedTime;
      }
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0" style={{ opacity: 0.1 }} />;
};

export default ModelViewer;
