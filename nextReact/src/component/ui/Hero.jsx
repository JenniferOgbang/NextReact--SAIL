import Video from "@/assets/hero/herovideo.mp4";
import Header from "@/static/header";
import PauseIcon from "@/assets/hero/pauseicon.svg";
import PlayIcon from "@/assets/hero/playicon.svg";
import VolumeIcon from "@/assets/hero/volumeicon.png";
import MuteIcon from "@/assets/hero/muteicon.png";
// import PhoneMockup from "@/component/ui/Phonemockup.jsx";
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
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

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

            <div className="sticky top-0 h-screen overflow-hidden bg-black">
                <Header heroSectionRef={sectionRef} />
                    <video
                        ref={videoRef}
                        src={Video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        className="absolute inset-0 h-full w-full object-cover"/>

                <div className="absolute inset-0 bg-black/30" />

                {messages.map((message, index) => (
                    <div
                        key={message.heading}
                        aria-hidden={activeMessage !== index}
                        className={`absolute inset-0 z-10 flex items-center justify-center px-5 pt-20 pb-32 text-center transition-all duration-500 sm:px-8 sm:pt-24 sm:pb-28 ${
                            activeMessage === index
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-4 opacity-0 pointer-events-none"
                                
                        }`}
                    >
                        {/* Phone mockup — Screen 1 only
                        {index === 0 && (
                        <div className="absolute right-35 top-[55%] z-10 hidden -translate-y-1/2 xl:block">
                            <div className="scale-100">
                                <PhoneMockup />
                            </div>
                        </div>
                        )} */}
                        <div className="mx-auto w-full max-w-2xl">

                            {/* H1: Screen heading */}
                            <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:mb-7 sm:text-4xl md:text-6xl">
                                {message.heading}
                            </h1>

                            {/* Paragraph: Screen description */}
                            <p className="mx-auto mb-6 max-w-xl text-sm leading-6 text-white sm:mb-8 sm:text-base sm:leading-7 md:text-lg">
                                {message.paragraph}
                            </p>

                            {/* Two buttons */}
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                                {/* Primary button appears on all three screens */}
                                <button
                                    type="button"
                                    className="rounded-full bg-[#355847] px-5 py-3 text-sm font-semibold text-white transition hover:border-none hover:bg-[#A8B9A0] hover:text-white sm:px-6 sm:text-base"
                                >
                                    {message.primaryButton}
                                </button>

                                {/* Secondary button appears only on Screen 1 */}
                                {index === 0 && (
                                    <button
                                        type="button"
                                        className="rounded-full border border-[#355847] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A8B9A0] hover:text-white sm:px-6 sm:text-base"
                                    >
                                        {message.secondaryButton}
                                    </button>
                                )}
                            </div>

                        </div>
                    </div>
                ))}

                

                {/* Screen indicators / Scroller */}        
                <div className="absolute bottom-20 left-0 right-0 z-20 flex flex-row items-center justify-center gap-4 md:bottom-auto md:left-auto md:right-10 md:top-1/2 md:-translate-y-1/2 md:flex-col md:gap-4">

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
   
                {/* Video Controls */}
                <div className="absolute right-4 top-20 z-30 flex items-center gap-2 sm:right-6 sm:gap-3 md:bottom-8 md:right-10 md:top-auto">

                    {/* Play / Pause Button */}
                    <button
                        type="button"
                        aria-label={isPlaying ? "Pause background video" : "Play background video"}
                        onClick={() => {
                            const video = videoRef.current;
                            if (!video) return;

                            if (video.paused) {
                                video.play().catch(() => {});
                            } else {
                                video.pause();
                            }
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A8B9A0] bg-[#A8B9A0]/40 p-2.5 backdrop-blur-md transition hover:bg-[#A8B9A0]/70 sm:h-11 sm:w-11 sm:p-3"
                    >
                        <img
                            src={isPlaying ? PauseIcon : PlayIcon}
                            alt=""
                            className="h-full w-full object-contain"
                        />
                    </button>

                    {/* Sound / Mute Button */}
                    <button
                        type="button"
                        aria-label={isMuted ? "Unmute background video" : "Mute background video"}
                        onClick={() => {
                            const video = videoRef.current;
                            if (!video) return;

                            video.muted = !isMuted;
                            setIsMuted(video.muted);
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A8B9A0] bg-[#A8B9A0]/40 p-2.5 backdrop-blur-md transition hover:bg-[#A8B9A0]/70 sm:h-11 sm:w-11 sm:p-3"
                    >
                        <img
                            src={isMuted ? MuteIcon : VolumeIcon}
                            alt=""
                            className="h-full w-full object-contain"
                        />
                    </button>

                </div>


            </div>
             
        </section>
    )
}



export default Hero;