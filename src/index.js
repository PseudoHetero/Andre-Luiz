import { Application } from '@splinetool/runtime/build/runtime.js';
import { gsap } from 'gsap'

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    const preloader = document.getElementById('preloader');
    const loadingDots = document.querySelectorAll('.loadingDot');

    preloader.style.display = 'flex';

    app.load('https://prod.spline.design/BWB2LkoDCY26ehRV/scene.splinecode')
      .then(() => {
        gsap.to('.blinder', {
          scaleY: 0,
          stagger: 0.2,
          ease: 'power3.out',
          onComplete: function() {
            canvas.style.zIndex = '2';
          }
        });

        gsap.to(loadingDots, {
          opacity: 0,
          duration: 0.5,
          onComplete: function() {
            preloader.style.display = 'none';
          }
        });
      })
      .catch((error) => {
        console.error('Erro ao carregar a cena:', error);
      });
});

