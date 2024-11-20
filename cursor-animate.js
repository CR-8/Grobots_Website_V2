import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

    neonCursor({
      el: document.getElementById('app'),
      shaderPoints: 10,
      curvePoints: 80,
      curveLerp: 0.99,
      radius1: 5,
      radius2: 20,
      velocityTreshold: 50,
      sleepRadiusX: 0,
      sleepRadiusY: 0,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.001,
    });
