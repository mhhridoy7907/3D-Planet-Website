/* Stars */
const starsContainer = document.getElementById('stars');
for(let i=0;i<200;i++){
  const star = document.createElement('div');
  star.className='star';
  const size = Math.random()*2+1;
  star.style.width = size+'px';
  star.style.height = size+'px';
  star.style.top = Math.random()*100+'%';
  star.style.left = Math.random()*100+'%';
  star.style.animationDuration = (Math.random()*5+2)+'s';
  starsContainer.appendChild(star);
}

/* Planet Function */
function createPlanet(containerId, texturePath, size=1.4, ring=false, ringSmall=false){
  const container = document.getElementById(containerId);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);
  camera.position.z = 4;
  const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  const loader = new THREE.TextureLoader();
  const texture = loader.load(texturePath);
  const geometry = new THREE.SphereGeometry(size,64,64);
  const material = new THREE.MeshStandardMaterial({ map:texture });
  const planet = new THREE.Mesh(geometry, material);
  scene.add(planet);

  if(ring){
    const inner = ringSmall ? size*1.2 : size*1.3;
    const outer = ringSmall ? size*1.5 : size*1.8;
    const ringGeo = new THREE.RingGeometry(inner,outer,64);
    const ringMat = new THREE.MeshBasicMaterial({ color:0xc2b280, side:THREE.DoubleSide });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI/2.5;
    planet.add(ringMesh);
  }

  const sunLight = new THREE.PointLight(0xfff6e5,2,100);
  sunLight.position.set(5,3,5);
  scene.add(sunLight);

  const ambient = new THREE.AmbientLight(0x404040,0.8);
  scene.add(ambient);

  function animate(){
    requestAnimationFrame(animate);
    planet.rotation.y += 0.004;
    renderer.render(scene,camera);
  }
  animate();

  window.addEventListener('resize',()=>{
    camera.aspect = container.clientWidth/container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth,container.clientHeight);
  });
}

/* Load Planets */
createPlanet('mercury','im/m.jpg',2);
createPlanet('venus','im/v.jpg',2);
createPlanet('earth','im/EE.jpg',2);
createPlanet('mars','im/mars.jpg',2);
createPlanet('jupiter','im/jup.jpg',2);
createPlanet('saturn','im/stu.jpg',1.8,true,true);
createPlanet('uranus','im/uranus.jpg',2);
createPlanet('neptune','im/nuptune.jpg',2);

/* Scroll animation */
const hiddenElements = document.querySelectorAll('.hidden-left,.hidden-right');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{ threshold:0.25 });
hiddenElements.forEach(el=>observer.observe(el));

/* Profile Modal JS */
const profileImg = document.getElementById('profileImg');
const modal = document.getElementById('profileModal');
const closeModal = document.getElementById('closeModal');

profileImg.addEventListener('click', ()=>{
  modal.classList.add('show');
});

closeModal.addEventListener('click', ()=>{
  modal.classList.remove('show');
});

modal.addEventListener('click', (e)=>{
  if(e.target === modal){
    modal.classList.remove('show');
  }
});
