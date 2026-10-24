
const PhoneMockup = () => {
  return (
    <div className="flex items-center justify-center p-0">

      {/* Left-slanted phone */}
      <div
        style={{
          transform: "rotate(-12deg)",
          transformOrigin: "center center",
        }}
        className="relative transition-transform duration-500 hover:rotate-[-8deg]"
      >

        {/* Outer glossy phone body */}
        <div
          className="relative h-[580px] w-[290px] rounded-[46px] p-[7px]"
          style={{
            background:
              "linear-gradient(135deg, #777777 0%, #222222 15%, #090909 45%, #555555 70%, #111111 100%)",
            boxShadow:
              "20px 30px 70px rgba(0,0,0,0.30), inset 0 0 0 1px rgba(255,255,255,0.5), inset 2px 2px 5px rgba(255,255,255,0.45)",
          }}
        >

          {/* Inner frame */}
          <div
            className="relative h-full w-full overflow-hidden rounded-[39px] p-[2px]"
            style={{
              background:
                "linear-gradient(145deg, #e8e8e8, #333333 30%, #080808 70%, #aaaaaa)",
            }}
          >

            {/* Glass screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[35px] bg-[#FAF7F0]"
            style={{
                boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.9), inset -8px 0 18px rgba(255,255,255,0.25)",
            }}>

              {/* App content */}
              <div className="relative z-10 flex h-full flex-col px-4 pb-4 pt-12">

                {/* Welcome section */}
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] tracking-[2px] text-gray-500">
                      WELCOME BACK
                    </p>
                    <h2 className="mt-1 text-lg font-bold text-[#292F2B]">
                      Hello, Jennifer 👋
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-[#DCE6D9] text-sm font-bold text-[#355847] shadow-sm">
                    J
                  </div>
                </div>

                {/* Featured card */}
                <div
                  className="mb-5 rounded-2xl p-4 text-white"
                  style={{
                    background:
                      "linear-gradient(145deg, #52745F, #355847 65%, #243F32)",
                    boxShadow: "0 8px 18px rgba(53,88,71,0.18)",
                  }}
                >
                  <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[8px] tracking-wide">
                    YOUR GROWTH JOURNEY
                  </span>

                  <h3 className="mt-4 text-xl font-bold leading-6">
                    Become who you're meant to be.
                  </h3>I

                  <p className="mt-2 text-[10px] leading-4 text-white/80">
                    Learn from people who've walked the path before you.
                  </p>

                  <button
                    type="button"
                    className="mt-4 rounded-full bg-[#D9A45B] px-4 py-2 text-[10px] font-bold text-[#292F2B] shadow-md"
                  >
                    Find your mentor →
                  </button>
                </div>

                {/* Upcoming session */}
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#292F2B]">
                    Upcoming session
                  </h3>
                  <span className="text-[10px] text-[#355847]">
                    See all
                  </span>
                </div>

                <div className="mb-5 flex items-center gap-3 rounded-2xl border border-[#E7E3D9] bg-white p-3 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F8E9D3] text-xl">
                    📅
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-[#292F2B]">
                      Mentorship check-in
                    </p>
                    <p className="mt-1 text-[10px] text-gray-500">
                      Your next session
                    </p>
                    <p className="mt-1 text-[9px] font-semibold text-[#355847]">
                      ● Session confirmed
                    </p>
                  </div>
                </div>

                {/* Discover mentors */}
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#292F2B]">
                    Discover mentors
                  </h3>
                  <span className="text-[10px] text-[#355847]">
                    Explore
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white bg-white/90 p-3 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8D8CB] text-xl">
                    👩🏽‍💼
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#292F2B]">
                      Sarah Williams
                    </p>
                    <p className="mt-1 text-[10px] text-gray-500">
                      Career & Leadership
                    </p>
                    <p className="mt-1 text-[10px] text-[#355847]">
                      ★ 4.9 · Mentor
                    </p>
                  </div>
                </div>

                {/* Bottom navigation */}
                <div className="mt-auto flex justify-around border-t border-[#E7E3D9] pt-3">
                  <div className="text-center text-[#355847]">
                    <p className="text-base">⌂</p>
                    <p className="text-[9px] font-bold">Home</p>
                  </div>

                  <div className="text-center text-gray-400">
                    <p className="text-base">♧</p>
                    <p className="text-[9px]">Mentors</p>
                  </div>

                  <div className="text-center text-gray-400">
                    <p className="text-base">▤</p>
                    <p className="text-[9px]">Sessions</p>
                  </div>

                  <div className="text-center text-gray-400">
                    <p className="text-base">○</p>
                    <p className="text-[9px]">Profile</p>
                  </div>
                </div>

              </div>

              {/* Main glass reflection */}
                <div
                className="pointer-events-none absolute inset-0 z-20 rounded-[35px]"
                style={{
                    background:
                    "linear-gradient(115deg, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0.18) 12%, transparent 30%, transparent 68%, rgba(255,255,255,0.12) 82%, rgba(255,255,255,0.30) 100%)",
                    boxShadow: "inset 2px 2px 5px rgba(255,255,255,0.6)",
                }}
                />

                {/* Glossy diagonal highlight */}
                <div
                className="pointer-events-none absolute -right-12 -top-10 z-20 h-[360px] w-[90px] rotate-[25deg] rounded-full blur-xl"
                style={{
                    background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.65), rgba(255,255,255,0.08), transparent)",
                }}
                />

              {/* Bright glass reflection */}
              <div
                className="pointer-events-none absolute -right-10 -top-16 z-20 h-[300px] w-[100px] rotate-[25deg] rounded-full blur-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.38), rgba(255,255,255,0.02))",
                }}
              />

              {/* Subtle screen shine */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.24), transparent)",
                }}
              />

              {/* Camera / Dynamic Island */}
              <div className="absolute left-1/2 top-[10px] z-30 flex h-[25px] w-[88px] -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-black shadow-inner">
                <div className="mr-2 h-[5px] w-[5px] rounded-full bg-[#263447]" />
                <div className="h-[4px] w-[24px] rounded-full bg-[#161616]" />
              </div>

            </div>
          </div>

          {/* Side buttons */}
          <div className="absolute -right-[3px] top-[125px] h-[55px] w-[4px] rounded-r-md bg-[#888888]" />
          <div className="absolute -left-[3px] top-[115px] h-[30px] w-[4px] rounded-l-md bg-[#888888]" />
          <div className="absolute -left-[3px] top-[155px] h-[42px] w-[4px] rounded-l-md bg-[#888888]" />

        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
