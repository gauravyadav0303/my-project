import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function FirstPage() {
    useEffect(() => {

        const lenis = new Lenis({})

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)


        const bg1 = document.querySelector('.wrapper')
        const bg2 = document.querySelector('.bg2')
        const mountains = document.querySelector('.mountains')
        const soldier = document.querySelector('.soldier')
        const h1 = document.querySelector('h1 span')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.wrapper',
                start: "top top",
                scrub: 1,
            //  end: '+=1000px', 
                //markers:true,
                pin:true,
            }
        })

        gsap.set(soldier, {scale: 0.8})

        tl
            .to(mountains, {scale: 1.4, y: 30})
            .to(soldier, {scale: 1.7, y: 90},0)

        gsap.from(h1, {
            yPercent: 100,
            scrollTrigger: {
                trigger: h1,
                start: "top bottom",
                scrub: 1
            }
        })

    },[]);
  return (
    <>
      <section class="top">scroll down</section>

      <section class="container">
        <div class="wrapper">
          <h1 class="text-mask">
            <span>The Warrior Await</span>
          </h1>
          <div class="bg2"></div>
          <div class="mountains"></div>
          <div class="soldier"></div>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default FirstPage;
