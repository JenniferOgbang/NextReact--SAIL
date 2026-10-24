import { useEffect, useRef, useState } from "react";
import TestimonyCard from "@/component/reuseable/Testimonycard";

const testimonies = [
    {
        id: 1,
        image: "",
        name: "User One",
        testimony: "Share a story about how MentorMe helped you grow in faith and stay consistent with Bible study.",
        linkText: "Read full story",
        link: "#",
    },
    {
        id: 2,
        image: "",
        name: "User Two",
        testimony: "Share how joining a discipleship group helped you build meaningful relationships and grow spiritually.",
        linkText: "Read full story",
        link: "#",
    },
    {
        id: 3,
        image: "",
        name: "User Three",
        testimony: "Share how a mentor helped you understand the Bible better and grow in your walk with God.",
        linkText: "Read full story",
        link: "#",
    },
    {
        id: 4,
        image: "",
        name: "User Four",
        testimony: "Share your experience of growing through regular Bible study and accountability.",
        linkText: "Read full story",
        link: "#",
    },
    {
        id: 5,
        image: "",
        name: "User Five",
        testimony: "Share how being part of a church community encouraged your spiritual growth.",
        linkText: "Read full story",
        link: "#",
    },
    {
        id: 6,
        image: "",
        name: "User Six",
        testimony: "Share how mentorship helped you become more intentional about your faith and purpose.",
        linkText: "Read full story",
        link: "#",
    },
    // {
    //     id: 7,
    //     image: "/images/testimonies/testimony-7.jpg",
    //     name: "User Seven",
    //     testimony: "Share how your Bible study habits changed and became more consistent.",
    //     linkText: "Read full story",
    //     link: "#",
    // },
    // {
    //     id: 8,
    //     image: "/images/testimonies/testimony-8.jpg",
    //     name: "User Eight",
    //     testimony: "Share how leading or joining a discipleship group has impacted your life.",
    //     linkText: "Read full story",
    //     link: "#",
    // },
    // {
    //     id: 9,
    //     image: "/images/testimonies/testimony-9.jpg",
    //     name: "User Nine",
    //     testimony: "Share how you found encouragement, guidance, and support through your faith community.",
    //     linkText: "Read full story",
    //     link: "#",
    // },
    // {
    //     id: 10,
    //     image: "/images/testimonies/testimony-10.jpg",
    //     name: "User Ten",
    //     testimony: "Share how MentorMe has helped you take another step in your spiritual journey.",
    //     linkText: "Read full story",
    //     link: "#",
    // },
];

const UserTestimonies = () => {
    const carouselRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) return;
        const updateVisibleCount = () => {
            const cards = Array.from(carousel.children);

            if (cards.length === 0) return;
            const carouselRight =
                carousel.getBoundingClientRect().right;
            let lastVisibleCard = 0;
            cards.forEach((card, index) => {
                const cardRight = card.getBoundingClientRect().right;
                if (cardRight <= carouselRight + 2) {
                    lastVisibleCard = index + 1;
                }
            });

            setVisibleCount(
                lastVisibleCard || Math.min(3, cards.length)
            );
        };

        updateVisibleCount();

        carousel.addEventListener("scroll", updateVisibleCount);
        window.addEventListener("resize", updateVisibleCount);

        return () => {
            carousel.removeEventListener("scroll", updateVisibleCount);
            window.removeEventListener("resize", updateVisibleCount);
        };
    }, [testimonies.length]);


    const scrollCarousel = (direction) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        carousel.scrollBy({
            left: direction * carousel.clientWidth * 0.85,
            behavior: "smooth",
        });
    };

    return (
        <section
            id="testimonies"
            className="bg-[#FAF7F0] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12"
        >
            <div className="mx-auto max-w-7x mt-5 mb-20">

                {/* Section Heading and Counter */}
                <div className="mb-8 flex items-start justify-between gap-4 sm:mb-10">

                    <div className="max-w-2xl">
                        <h1 className="mb-3 text-3xl font-bold text-[#292F2B] sm:text-4xl md:text-5xl">
                            Users Testimony
                        </h1>

                        <p className="text-sm leading-6 text-[#292F2B] sm:text-base sm:leading-7">
                            Our users have stories to tell, scroll through to check them out.
                        </p>
                    </div>

                    {/* Visible Cards / Total Cards */}
                    <p
                        aria-live="polite"
                        className="shrink-0 pt-1 text-lg font-semibold text-[#355847] sm:text-xl"
                    >
                        {visibleCount}/{testimonies.length}
                    </p>

                </div>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-none] [&::-webkit-scrollbar]:hidden"
                >
                    {testimonies.map((testimony) => (
                        <div
                            key={testimony.id}
                            className="w-[75%] shrink-0 snap-start sm:w-[40%] lg:w-[28%]"
                        >
                            <TestimonyCard
                                image={testimony.image}
                                name={testimony.name}
                                testimony={testimony.testimony}
                                linkText={testimony.linkText}
                                link={testimony.link}
                            />
                        </div>
                    ))}
                </div>

                {/* Carousel Navigation */}
                <div className="mt-4 flex items-center justify-between gap-4">

                    <div className="flex gap-3">
                        <button
                            type="button"
                            aria-label="Previous testimonies"
                            onClick={() => scrollCarousel(-1)}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#355847] text-xl text-[#355847] transition hover:bg-[#355847] hover:text-white"
                        >
                            ←
                        </button>

                        <button
                            type="button"
                            aria-label="Next testimonies"
                            onClick={() => scrollCarousel(1)}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#355847] text-xl text-[#355847] transition hover:bg-[#355847] hover:text-white"
                        >
                            →
                        </button>
                    </div>

                    {/* More Testimonies Button */}
                    <a
                        href="#all-testimonies"
                        className="inline-flex items-center gap-2 rounded-full bg-[#355847] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#294536] sm:px-6 sm:text-base"
                    >
                        More Testimonies
                        <span aria-hidden="true">→</span>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default UserTestimonies;
