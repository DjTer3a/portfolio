import React, { useRef, useEffect } from 'react';
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import Image from 'next/image'
import styles from './Photos.module.css'

export function Photos2() {
  const track = useRef(null);

  const handleOnDown = e => track.current.dataset.mouseDownAt = e.clientX;

  const handleOnUp = () => {
    track.current.dataset.mouseDownAt = "0";  
    track.current.dataset.prevPercentage = track.current.dataset.percentage;
  }

  const handleOnMove = e => {
    if (track.current.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX,
maxDelta = window.innerWidth / 2;
const percentage = (mouseDelta / maxDelta) * 100,
      nextPercentageUnconstrained = parseFloat(track.current.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

track.current.dataset.percentage = nextPercentage;

track.current.animate(
  [
    { transform: `translateX(${track.current.dataset.prevPercentage}%)` },
    { transform: `translateX(${nextPercentage}%)` }
  ],
  {
    duration: 1200,
    fill: "forwards"
  }
);

for (const image of track.current.getElementsByClassName("image")) {
  image.animate(
    [
      { objectPosition: `center ${100 + parseFloat(track.current.dataset.prevPercentage)}%` },
      { objectPosition: `center ${100 + nextPercentage}%` }
    ],
    {
      duration: 1200,
      fill: "forwards"
    }
  );
}}

useEffect(() => {
window.addEventListener("mousedown", handleOnDown);
window.addEventListener("touchstart", e => handleOnDown(e.touches[0]));
window.addEventListener("mouseup", handleOnUp);
window.addEventListener("touchend", e => handleOnUp(e.touches[0]));
window.addEventListener("mousemove", handleOnMove);
window.addEventListener("touchmove", e => handleOnMove(e.touches[0]));
}, [track.current]); // this will cause the useEffect to run only when the track element is rendered

return (
<div className={styles.all}>
<div id="image-track" ref={track} data-mouse-down-at="0" data-prev-percentage="0">
  <div class="image"><Image
       src={image1}
       alt=""
       
       unoptimized
       draggable="false"
     /></div>
   <div class="image"><Image
   src={image2}
   alt=""
   
   unoptimized
   draggable="false"
 /></div>

 <div class="image"><Image
   src={image3}
   alt=""
   
   unoptimized
   draggable="false"
 /></div>

 <div class="image"><Image
   src={image4}
   alt=""
   
   unoptimized
   draggable="false"
 /></div>

 <div class="image"><Image
   src={image5}
   alt=""
   
   unoptimized
   draggable="false"
 /></div>
</div>
</div>
)
}