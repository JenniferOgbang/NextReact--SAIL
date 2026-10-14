import Video from "@/assets/hero/herovideo.mp4";
import Header from "@/static/header";
import { useEffect, useRef, useState } from "react";

const messages = [
    {
        heading: "Mentorship App",
        paragraph: "Grow in faith and walk in purpose with Mentorship App. Connect with mentors, join discipleship groups, and build a stronger relationship with God. Find the guidance and community you need to grow spiritually. Start your journey today. Download the app and take your next step in faith!",
        primaryButton: "Download App",
        secondaryButton: "See How It Works",
    },
    {
        heading: "Register Your Congregation",
        paragraph: "Bring discipleship and mentorship into the heart of your church. Register your congregation, organize your different church units, and tailor mentorship programs to fit your church’s structure, vision, and approach to spiritual growth.",
        primaryButton: "Onboard Your Church",
    },
    {
        heading: "Join the Team",
        paragraph: "Be part of the mission to help believers grow in faith and purpose. Whether through donations, volunteering, joining the building team, or offering your skills, there’s a place for you to make a difference. Every contribution helps us build a stronger community of faith.",
        primaryButton: "Get Involved",
    },
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
                        key={message.heading}
                        aria-hidden={activeMessage !== index}
                        className={`absolute inset-0 z-10 flex items-center transition-all duration-500 ${
                            index === 0
                                ? "justify-start"
                                : "justify-center text-center"
                        } ${
                            activeMessage === index
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-4 opacity-0 pointer-events-none"
                                
                        }`}
                    >
                        <div className={`w-full max-w-2xl ${
                                index === 0
                                    ? "ml-10 md:ml-20"
                                    : "mx-auto px-6 text-center"
                            }`}
                        >

                            {/* H1: Screen heading */}
                            <h1 className="mb-8 mt-20 text-4xl font-bold text-white md:text-6xl">
                                {message.heading}
                            </h1>

                            {/* Paragraph: Screen description */}
                            <p className="mb-10 max-w-xl text-base leading-7 text-white md:text-lg">
                                {message.paragraph}
                            </p>

                            {/* Two buttons */}
                            <div
                                className={`flex flex-wrap gap-4 ${
                                    index === 0 ? "justify-start" : "justify-center"
                                }`}
                            >
                                {/* Primary button appears on all three screens */}
                                <button
                                    type="button"
                                    className="rounded-full bg-[#355847] px-6 py-3 font-semibold text-white transition hover:bg-[#A8B9A0] hover:text-white hover:border-none"
                                >
                                    {message.primaryButton}
                                </button>

                                {/* Secondary button appears only on Screen 1 */}
                                {index === 0 && (
                                    <button
                                        type="button"
                                        className="rounded-full border border-[#355847] px-6 py-3 font-semibold text-white transition hover:bg-[#A8B9A0] hover:text-white"
                                    >
                                        {message.secondaryButton}
                                    </button>
                                )}
                            </div>

                        </div>
                    </div>
                ))}

                

                {/* Screen indicators / Scroller */}
                <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-4 md:right-10">
                    {messages.map((message, index) => (
                        <button
                            key={message.heading}
                            type="button"
                            aria-label={`Go to screen ${index + 1}`}
                            aria-current={activeMessage === index ? "step" : undefined}
                            onClick={() => {
                                const section = sectionRef.current;
                                if (!section) return;

                                const scrollDistance =
                                    section.offsetHeight - window.innerHeight;

                                const targetProgress = index / (messages.length - 1);

                                const targetScroll =
                                    section.getBoundingClientRect().top +
                                    window.scrollY +
                                    scrollDistance * targetProgress;

                                window.scrollTo({
                                    top: targetScroll,
                                    behavior: "smooth",
                                });
                            }}
                            className="flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            <span
                                className={`h-3 w-3 rounded-full border border-[#A8B9A0] transition-all duration-300 ${
                                    activeMessage === index
                                        ? "scale-125 bg-[#A8B9A0] opacity-100"
                                        : "bg-transparent opacity-60 hover:opacity-100"
                                }`}
                            />
                        </button>
                    ))}
                </div>



            </div>
             
        </section>
    )
}



export default Hero;