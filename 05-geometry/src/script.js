import './style.css'
import * as THREE from 'three'
//import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    //update resize of the page
    sizes.width =window.innerWidth
    sizes.height = window.innerHeight

    // updateCamera 
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    renderer.setSize(sizes.width, sizes.height)
}
)
window.addEventListener('dblclick',() => 
{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    if (!fullscreenElement)
    {
        if (canvas.requestFullscreen)
        canvas.requestFullscreen()
    else if (canvas.webkitFullscreenElement)
        canvas.webkitRequestFullscreen()

    }

    else
    {

    if (document.exitFullscreen)
        document.exitFullscreen()
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen()
    }

})



const canvas = document.querySelector('canvas.webgl')



// Scene
const scene = new THREE.Scene()

// Object
// Create an empty BufferGeometry
/*
const geometry = new THREE.BufferGeometry()
const positionsArray = new Float32Array([
    0, 0, 0, // First vertex
    0, 1, 0, // Second vertex
    1, 0, 0  // Third vertex
])
const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
geometry.setAttribute('position', positionsAttribute)
*/
const geometry = new THREE.BufferGeometry()

// Create 50 triangles (450 values)
const count = 20
const positionsArray = new Float32Array(count * 3 * 3)
for(let i = 0; i < count * 3 * 3; i++)
{
    positionsArray[i] = (Math.random() - 0.5) * 4
}

// Create the attribute and name it 'position'
const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
geometry.setAttribute('position', positionsAttribute)
//const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
//const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)




//axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height, 1, 1000)
camera.position.z = 3

scene.add(camera)

//Controls
const controls = new OrbitControls(camera, canvas)

controls.enableDamping = true
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// Help to restrict the pixel ratio
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)




const tick = () =>
{
 

   controls.update()

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()