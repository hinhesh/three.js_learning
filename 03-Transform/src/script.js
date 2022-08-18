import './style.css'
import * as THREE from 'three'
//import gsap from 'gsap'

console.log(THREE)


// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
//mesh.scale.set(1,2,0.5)
scene.add(mesh)
//mesh.position.set(0,1,-3)

//mesh.rotation.z = 0.5
//mesh.position.y = 1
//mesh.position.z = -3
// Sizes
mesh.rotation
const sizes = {
    width: 800,
    height: 600
}

//axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
//camera.position.x = 1
//camera.position.y = -1
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// Time
//Animation function 1 
/*
let time = Date.now()
//Animation function 1
const tick = () =>
{
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    mesh.rotation.y += 0.001 * deltaTime 
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}*/
const clock = new THREE.Clock()
const tick = () =>
{
 
    const elapsedTime = clock.getElapsedTime()
    // Make the mesh turn around Y
    //mesh.rotation.y = elapsedTime * Math.PI * 2
    // Make the mesh pos make a circle
    //mesh.position.x = Math.sin(elapsedTime)
    //mesh.position.y = Math.cos(elapsedTime)

    camera.position.x = Math.sin(elapsedTime)
    camera.position.y = Math.cos(elapsedTime)
    camera.lookAt(mesh.position)

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}


tick();

//3rd way animation
/*
gsap.to(mesh.position,{ duration: 1, delay:1, x:2})
gsap.to(mesh.position,{ duration: 2, delay:2, x:-2})
const tick = () =>
{
    renderer.render(scene,camera)
    window.requestAnimationFrame(tick)

}
tick()*/
