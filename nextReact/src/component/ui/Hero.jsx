import Video from "@/assets/hero/herovideo.mp4";
import Header from "@/static/header";
import { useEffect, useRef, useState } from "react";

const messages = [
    "Your story starts here.",
    "Imagine what's possible.",
    "Make it happen.",
];

const Hero = () => {
    const sectionRef = useRef(null);
    const [activeMessage, setActiveMessage] = useState(0);

    useEffect(() => {
        const updateActiveMessage = () => {
            const section = sectionRef.current;
            if (!section) return;

            const scrollDistance = section.offsetHeight - window.innerHeight;
            const progress = scrollDistance > 0
                ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / scrollDistance))
                : 0;
            const nextMessage = Math.min(
                messages.length - 1,
                Math.floor(progress * messages.length)
            );

            setActiveMessage((currentMessage) =>
                currentMessage === nextMessage ? currentMessage : nextMessage
            );
        };

        updateActiveMessage();
        window.addEventListener("scroll", updateActiveMessage, { passive: true });
        window.addEventListener("resize", updateActiveMessage);

        return () => {
            window.removeEventListener("scroll", updateActiveMessage);
            window.removeEventListener("resize", updateActiveMessage);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[300vh]">

            <div className="bg-black h-screen sticky top-0 overflow-hidden">
                <Header heroSectionRef={sectionRef} />
                <video
                    src={Video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                    />
                
                <div className="absolute inset-0 bg-black/30" />

                {messages.map((message, index) => (
                    <div
                        key={message}
                        aria-hidden={activeMessage !== index}
                        className={`absolute left-10 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                            activeMessage === index
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-4 opacity-0"
                        }`}
                    >
                        <h1 className="text-4xl font-bold text-white md:text-6xl">
                            {message}
                        </h1>
                    </div>
                ))}

            </div>
             
        </section>
    )
}



export default Hero;