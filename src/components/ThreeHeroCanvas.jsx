import React, { useEffect, useRef } from 'react';

export function ThreeHeroCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    let THREE;
    let renderer, scene, camera, animId;
    let mainGroup, coreMesh, wireMesh, ringMesh1, ringMesh2, nodesGroup;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const init = async () => {
      try {
        THREE = await import('three');
      } catch (err) {
        console.warn('Three.js failed to load, fallback visual active.', err);
        return;
      }

      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 18;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

      mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // Core Dodecahedron (Main System Engine)
      const coreGeo = new THREE.DodecahedronGeometry(3.2, 1);
      const coreMat = new THREE.MeshPhongMaterial({
        color: 0x0877dc,
        emissive: 0x071b3a,
        wireframe: false,
        flatShading: true,
        transparent: true,
        opacity: 0.85
      });
      coreMesh = new THREE.Mesh(coreGeo, coreMat);
      mainGroup.add(coreMesh);

      // Outer Wireframe Frame
      const wireGeo = new THREE.IcosahedronGeometry(4.2, 1);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x12a8ca,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      wireMesh = new THREE.Mesh(wireGeo, wireMat);
      mainGroup.add(wireMesh);

      // Concentric System Orbit Rings
      const ringGeo1 = new THREE.TorusGeometry(6, 0.03, 16, 100);
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: 0x087f98,
        transparent: true,
        opacity: 0.5
      });
      ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
      ringMesh1.rotation.x = Math.PI / 3;
      ringMesh1.rotation.y = Math.PI / 6;
      mainGroup.add(ringMesh1);

      const ringGeo2 = new THREE.TorusGeometry(7.5, 0.02, 16, 100);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0x1687e8,
        transparent: true,
        opacity: 0.35
      });
      ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
      ringMesh2.rotation.x = -Math.PI / 4;
      ringMesh2.rotation.y = -Math.PI / 5;
      mainGroup.add(ringMesh2);

      // System Nodes (Connected Business Capabilities)
      nodesGroup = new THREE.Group();
      const nodeLabels = ['CRM', 'API', 'ERP', 'DATA', 'WEB', 'AUTO'];
      const nodePositions = [
        [5.5, 2, 1],
        [-5.5, -2, -1],
        [2, 5, -2],
        [-2.5, -5.2, 1],
        [4, -4, 2],
        [-4.5, 3.5, -2]
      ];

      nodePositions.forEach((pos) => {
        const nodeGeo = new THREE.SphereGeometry(0.32, 16, 16);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: 0x1687e8,
          emissive: 0x12a8ca,
          emissiveIntensity: 0.8
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(...pos);
        nodesGroup.add(nodeMesh);

        // Connection Line to Core
        const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(...pos)];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        const lineMat = new THREE.LineBasicMaterial({
          color: 0x0877dc,
          transparent: true,
          opacity: 0.3
        });
        const line = new THREE.Line(lineGeo, lineMat);
        nodesGroup.add(line);
      });

      mainGroup.add(nodesGroup);

      // Ambient & Directional Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0x1687e8, 2.5);
      dirLight1.position.set(10, 15, 10);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0x087f98, 1.8);
      dirLight2.position.set(-10, -10, -10);
      scene.add(dirLight2);

      // Mouse Move Listener
      const onMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX = (x / rect.width) * 2;
        mouseY = (y / rect.height) * 2;
      };

      const onResize = () => {
        if (!containerRef.current || !renderer || !camera) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onResize);

      // Animation Loop
      const animate = () => {
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        if (mainGroup) {
          mainGroup.rotation.y += 0.004;
          mainGroup.rotation.x += 0.002;
          mainGroup.rotation.y = targetX * 0.4 + mainGroup.rotation.y;
          mainGroup.rotation.x = -targetY * 0.4 + mainGroup.rotation.x;
        }

        if (coreMesh) coreMesh.rotation.y -= 0.006;
        if (wireMesh) wireMesh.rotation.z += 0.005;
        if (ringMesh1) ringMesh1.rotation.z += 0.003;
        if (ringMesh2) ringMesh2.rotation.z -= 0.004;
        if (nodesGroup) nodesGroup.rotation.y += 0.002;

        renderer.render(scene, camera);
        animId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        if (animId) cancelAnimationFrame(animId);
        if (renderer && renderer.domElement) {
          renderer.domElement.remove();
          renderer.dispose();
        }
      };
    };

    let cleanupFn;
    init().then((fn) => {
      cleanupFn = fn;
    });

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <div className="three-canvas-container" ref={containerRef}>
      {/* Visual Overlay Fallback / Framing elements */}
      <div className="three-overlay-hud">
        <div className="hud-corner hud-tl">SYSTEM ARCHITECTURE</div>
        <div className="hud-corner hud-tr">CONNECTED NODE V4.2</div>
        <div className="hud-corner hud-bl">ZENLOGIX CORE</div>
        <div className="hud-corner hud-br">LIVE ENGINE</div>
      </div>
    </div>
  );
}
