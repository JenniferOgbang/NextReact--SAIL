
const TestimonyCard = ({ image, name, testimony, linkText, link }) => {
    return (
        <article className="h-full overflow-hidden rounded-2xl border border-[#D9E0D7] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Testimony Image */}
            <div className="relative aspect-[5/3] w-full overflow-hidden bg-[#F0F2EC]">
                <div className="absolute inset-0 flex items-center justify-center text-sm text-[#355847]">
                    Add testimony photo
                </div>

                <img
                    src={image}
                    alt={name}
                    onError={(event) => {
                        event.currentTarget.style.display = "none";
                    }}
                    className="relative h-full w-full object-cover"
                />
            </div>

            {/* Testimony Content */}
            <div className="flex h-full flex-col p-3 sm:p-4">

                <p className="mb-3 text-sm font-semibold text-[#355847]">
                    {name}
                </p>

                <p className="mb-5 text-sm leading-7 text-[#292F2B] sm:text-base">
                    {testimony}
                </p>

                {/* Clickable Text */}
                <a
                    href={link}
                    className="mt-auto inline-flex items-center gap-2 font-semibold text-[#355847] transition hover:text-[#A8B9A0]"
                >
                    {linkText}
                    <span aria-hidden="true">→</span>
                </a>

            </div>

        </article>
    );
};

export default TestimonyCard;
