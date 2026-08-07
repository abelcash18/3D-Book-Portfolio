
// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x081b29);

// Camera
const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth / window.innerHeight,
0.1,
1000
);

camera.position.set(0, 1, 6);

// Renderer
const renderer = new THREE.WebGLRenderer({
antialias: true,
alpha: true
});


renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 8, 5);
scene.add(directionalLight);

// Book
const geometry = new THREE.BoxGeometry(3, 4, 

0.4);

const material = new THREE.MeshStandardMaterial({
color: 0x0066ff,
metalness: 0.3,
roughness: 0.5
});

const book = new THREE.Mesh(geometry, material);

scene.add(book);

// Animation
function animate(){

requestAnimationFrame(animate);

book.rotation.y += 0.005;


renderer.render(scene,camera);

}

animate();

// Resize
window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});