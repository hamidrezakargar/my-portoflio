import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Header() {
    const comp = useRef();

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from("p", {
            duration: 1,
            opacity: 0,
            y: "+=200",
            stagger: 0.6
        })
    }, { scope: comp })
    return (
        <div ref={comp} className="flex flex-col items-start gap-4" >
            <p className="text-white text-4xl font-grotesk">
                Hi there
            </p>

            <p className="text-white text-8xl" >
                Hi I'm <p id="myName" className="text-secondary font-semibold font-grotesk" >Hamidreza Kargar</p>
            </p>
            <p className="text-3xl" >
                i am a Web developer
            </p>

        </div>
    )
}

export default Header