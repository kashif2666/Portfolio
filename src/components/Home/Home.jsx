import React, { useEffect } from 'react'
import "./Home.css"
import * as THREE from "three"
import moonImage from "../../Images/moon.jpg"
import venusImage from "../../Images/venus.jpg"
import spaceImage from "../../Images/space.jpg"



const Home = () => {

  useEffect(()=>{
    const textureLoader=new THREE.TextureLoader();
    const moonTexture=textureLoader.load(moonImage);
    const venusTexture=textureLoader.load(venusImage);
    const spaceTexture=textureLoader.load(spaceImage);



    const scene= new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.set(4,4,8);

    const canvas=document.querySelector(".homeCanvas");
    const renderer=new THREE.WebGLRenderer({canvas});

    const moonGeometry=new THREE.SphereGeometry(2,64,64);
    const moonMaterial=new THREE.MeshStandardMaterial({map: moonTexture});
    const moon= new THREE.Mesh(moonGeometry,moonMaterial);

    const venusGeometry=new THREE.SphereGeometry(3,64,64);
    const venusMaterial=new THREE.MeshBasicMaterial({map: venusTexture});
    const venus= new THREE.Mesh(venusGeometry,venusMaterial);
    venus.position.set(8,5,5);
    

    const pointLight= new THREE.PointLight(0xffffff,250);
    const pointLight2= new THREE.PointLight(0xffffff,30);
    pointLight.position.set(8,5,5);
    pointLight2.position.set(-8,-5,-5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background=spaceTexture;
    
const constSpeed=0.01;
window.addEventListener("mousemove",(e)=>{
if (e.clientX <= window.innerWidth/2) {
  moon.rotation.x -= constSpeed;
  moon.rotation.y += constSpeed;
  venus.rotation.x -= constSpeed;
  venus.rotation.y += constSpeed;
}
if (e.clientX > window.innerWidth/2) {
  moon.rotation.x -= constSpeed;
  moon.rotation.y -= constSpeed;
  venus.rotation.x -= constSpeed;
  venus.rotation.y -= constSpeed;
}
if (e.clientY <= window.innerHeight/2) {
  moon.rotation.x -= constSpeed;
  moon.rotation.y -= constSpeed;
  venus.rotation.x -= constSpeed;
  venus.rotation.y -= constSpeed;
}
if (e.clientY > window.innerHeight/2) {
  moon.rotation.x -= constSpeed;
  moon.rotation.y += constSpeed;
  venus.rotation.x -= constSpeed;
  venus.rotation.y += constSpeed;
}
})

    const animate=()=>{
      requestAnimationFrame(animate);
      moon.rotation.y+=0.01;
      venus.rotation.y+=0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene,camera);

    }
   animate();
 
  },[])
  return (
    <div className="home">
      <canvas className='homeCanvas'>

      </canvas>
    </div>
  )
}

export default Home;