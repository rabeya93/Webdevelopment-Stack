
import heroImage from "../assets/banner-stack.png";

const HeroSection = () => {
    return (
    <section id="home" className="bg-white py-5">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-6 lg:grid-cols-2 md:px-8 md:py-7">

                {/* Left side: Heading, description and buttons */}
            <div>
                <h1 className="text-[60px] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    Build Your Ideal
                    <span className="block bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-3 max-w-md text-[18px] leading-[1.7] text-slate-600">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                {/* Buttons */}
                <div className="mt-15 flex flex-wrap items-center gap-2">
                    <a
                    href="#technologies"
                    className="rounded-md bg-linear-to-r from-orange-500 to-pink-600 px-2 py-2 text-[14px] font-semibold text-white transition hover:opacity-90"
                    >
                    Explore Technologies
                    </a>

                    <a
                    href="#about"
                    className="rounded-md border border-slate-200 bg-white px-8 py-2 text-[14px] text-slate-700 transition hover:bg-slate-50"
                    >
                    Learn More
                    </a>
                </div>
            </div>

            {/* Right side: Hero image */}
            <div className="flex justify-center lg:justify-end">
                <img
                    src={heroImage}
                    alt="Development stack illustration"
                    className="w-110 h-110 object-contain"
                />
            </div>

        </div>
    </section>
    );
};

export default HeroSection;
