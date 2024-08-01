import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { useRef } from "react";
import imag1 from "../assets/images/image01.jpg";


function Header() {
    const comp = useRef();

    useGSAP(() => {
        gsap.registerPlugin(TextPlugin)
        const tl = gsap.timeline()
        tl.from("p", {
            duration: 1,
            opacity: 0,
            y: "+=200",
            stagger: 0.6
        }).to("#text", {
            text: "i am a web developer",
            duration: 2.5,
            ease: "bounce.out",
        })
    }, { scope: comp })
    return (
        <section className="bg-cover bg-gradient-to-t bg-clip-border h-screen w-screen " style={{ backgroundImage: "url(" + imag1 + ")",}} >
            <div ref={comp} className="flex flex-col items-start gap-5 "  >
                <p className="text-white text-4xl font-grotesk">
                    Hi there
                </p>

                <p className="text-white text-8xl" >
                    I am <p id="myName" className="text-secondary font-semibold font-grotesk" >Hamidreza Kargar</p>
                </p>

                <p id="text" className="text-3xl" >
                </p>

            </div>
        </section>
    )
}

export default Header