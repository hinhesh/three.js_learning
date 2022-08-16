console.log(THREE)

const scene = new THREE.Scene()

// An object or mesh is a combination of the geometry and the material
const  geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color : 'blue'})
const mesh  = new THREE.Mesh(geometry, material)
scene.add(mesh);

const sizes ={
    width: 800,
    height: 600
}
// Creation of the camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 2
scene.add(camera)

// Initialisation of the render
// Render the scene from the camera point of view
// Result drawn into a canvas
// Canvas is a html element in wich you can draw stuff
// Three.js will use WebGL to draw the render inside the canvas
const canvas = document.querySelector('.webgl') // come from the html file
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)