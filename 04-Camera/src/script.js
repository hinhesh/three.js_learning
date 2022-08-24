import './style.css'
import * as THREE from 'three'
//import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EqualStencilFunc } from 'three'


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

//Cursor
/*
const cursor  = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove',(event_mouse) => {
   // console.log(event_mouse.clientX)
   cursor.x = event_mouse.clientX / sizes.width - 0.5
   cursor.y = -(event_mouse.clientY /sizes.height - 0.5)
   //console.log(cursor.y)
})*/

const canvas = document.querySelector('canvas.webgl')



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




//axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Camera
//const camera = new THREE.OrthographicCamera(- 1, 1, 1, - 1, 0.1, 100)
const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height, 1, 1000)
camera.position.z = 3

scene.add(camera)

//Controls
const controls = new OrbitControls(camera, canvas)
//Change the position of the target
//controls.target.y = 2
//controls.update()
//controls.enabled = false
controls.enableDamping = true
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// Help to restrict the pixel ratio
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)


//const clock = new THREE.Clock()

const tick = () =>
{
 
  //  const elapsedTime = clock.getElapsedTime()
    // Make the mesh turn around Y
    //mesh.rotation.y = elapsedTime * Math.PI * 2
    // Make the mesh pos make a circle
    //mesh.position.x = Math.sin(elapsedTime)
    //mesh.position.y = Math.cos(elapsedTime)


    // CAMERA ORIENTATION 1
   // camera.position.x = cursor.x * 10
    //camera.position.y = cursor.y * 10
/*
    // CAMERA ORIENTATION 2
    camera.position.x = 3* Math.sin(cursor.x * Math.PI * 2)
    camera.position.z = 3* Math.cos(cursor.x * Math.PI * 2)
    camera.position.y = cursor.y * 10*/


        // CAMERA ORIENTATION 3
   // camera.position.x = Math.sin(elapsedTime)
   // camera.position.y = Math.cos(elapsedTime)
   // camera.lookAt(mesh.position)
   controls.update()

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()