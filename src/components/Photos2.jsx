import React, { useRef, useEffect } from 'react';
import image1 from '@/images/photos/image-1.webp'
import image2 from '@/images/photos/image-2.webp'
import image3 from '@/images/photos/image-3.webp'
import image4 from '@/images/photos/image-4.webp'
import image5 from '@/images/photos/image-5.webp'
import Image from 'next/future/image';


export function Photos2() {
  const track = useRef(null)

  const handleOnDown = (e) => (track.current.dataset.mouseDownAt = e.clientX)

  const handleOnUp = () => {
    track.current.dataset.mouseDownAt = '0'
    track.current.dataset.prevPercentage = track.current.dataset.percentage
  }

  const handleOnMove = (e) => {
    if (track.current.dataset.mouseDownAt === '0') return

    const mouseDelta =
        parseFloat(track.current.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2

    const percentage = (mouseDelta / maxDelta) * 100,
      nextPercentageUnconstrained =
        parseFloat(track.current.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)

    track.current.dataset.percentage = nextPercentage

    track.current.animate(
      [
        { transform: `translateX(${track.current.dataset.prevPercentage}%)` },
        { transform: `translateX(${nextPercentage}%)` },
      ],
      {
        duration: 1200,
        fill: 'forwards',
      }
    )

    for (const image of track.current.getElementsByClassName('image')) {
      image.animate(
        [
          {
            objectPosition: `left ${
              100 + parseFloat(track.current.dataset.prevPercentage)
            }%`,
          },
          { objectPosition: `left ${100 + nextPercentage}%` },
        ],
        {
          duration: 1200,
          fill: 'forwards',
        }
      )
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleOnDown)
    window.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]))
    window.addEventListener('mouseup', handleOnUp)
    window.addEventListener('touchend', (e) => handleOnUp(e.touches[0]))
    window.addEventListener('mousemove', handleOnMove)
    window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]))
  }, [track.current]) // this will cause the useEffect to run only when the track element is rendered
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="relative mx-auto flex h-full w-full items-center justify-center">
      <div
        ref={track}
        className="flex h-full w-full items-center justify-center"
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <Image className="image h-auto w-1/6" src={image1} draggable="false" />
        <Image className="image h-auto w-1/6" src={image2} draggable="false" />
        <Image className="image h-auto w-1/6" src={image3} draggable="false" />
        <Image className="image h-auto w-1/6" src={image4} draggable="false" />
        <Image className="image h-auto w-1/6" src={image5} draggable="false" />
      </div>
    </div>
  )
}
