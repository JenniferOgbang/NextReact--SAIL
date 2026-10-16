
import Button from "@/component/reuseable/button.jsx";

const Newsletter = () => {
  return (
    <section className="w-full bg-[#355847] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Stay Updated
        </h2>

        {/* Description */}
        <p className="max-w-xl text-sm leading-6 text-[#FAF7F0] sm:text-base">
          Stay connected with us. Subscribe to our newsletter
          for updates, resources, and encouragement for your
          discipleship journey.
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            aria-label="Your name"
            autoComplete="name"
            required
            className="min-w-0 flex-1 rounded-lg border border-white/30 bg-white px-4 py-3 text-sm text-[#292F2B] outline-none placeholder:text-gray-500 focus:border-[#D9A45B] focus:ring-2 focus:ring-[#D9A45B] sm:py-3.5"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            aria-label="Your email address"
            autoComplete="email"
            required
            className="min-w-0 flex-1 rounded-lg border border-white/30 bg-white px-4 py-3 text-sm text-[#292F2B] outline-none placeholder:text-gray-500 focus:border-[#D9A45B] focus:ring-2 focus:ring-[#D9A45B] sm:py-3.5"
          />

          <Button
            type="submit"
            className="w-full rounded-lg bg-[#D9A45B] px-6 py-3 font-semibold text-[#292F2B] transition-colors duration-300 hover:bg-[#E8BD7D] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#355847] sm:w-auto sm:shrink-0 sm:py-3.5"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
