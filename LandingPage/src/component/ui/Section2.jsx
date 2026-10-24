
import ArrowDown from "@/assets/section2/downarrow.png";

const Section2 = () => {
    return (
        <section className="mt-16 mb-16 flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[50vh] md:px-12">

            {/* Bold introductory paragraph */}
            <p className="mb-5 max-w-4xl text-base font-bold leading-7 text-[#292F2B] sm:text-lg md:text-xl">
                Dear disciplers, pastors, and shepherds, imagine being able to nurture, guide, and track the spiritual growth of those under your care, all in one place.
            </p>

            {/* Section heading */}
            <h2 className="mb-5 text-3xl font-bold leading-tight text-[#355847] sm:text-4xl md:text-5xl">
                Your passion for souls just got easier!
            </h2>

            {/* Supporting paragraph */}
            <p className="mb-8 max-w-3xl text-sm leading-6 text-[#292F2B] sm:text-base sm:leading-7 md:text-lg">
                Track your mentees’ Bible study progress, onboard your unit members for training, and register your church.
            </p>

            {/* Mobile prompt */}
            <p className="flex flex-col items-center gap-3 text-sm font-medium text-[#355847] md:hidden">
                Scroll down to explore our features.
                <img
                    src={ArrowDown}
                    alt=""
                    className="h-6 w-6 object-contain brightness-0 invert"
                />
            </p>

            {/* Desktop and tablet download button */}
            <a
                href="#download"
                className="hidden items-center gap-3 rounded-full bg-[#355847] px-7 py-3 font-semibold text-white transition hover:bg-[#294536] md:inline-flex"
            >
                <span>Download the app now!</span>
                <img
                    src={ArrowDown}
                    alt=""
                    className="h-5 w-5 object-contain brightness-0 invert"
                />
            </a>

        </section>
    );
};

export default Section2;
