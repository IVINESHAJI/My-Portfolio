import Image1 from '../assets/profile.png';

const Home = () => {
    return (
        <main className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 min-h-screen">
            {/* Home Section */}
            <section
                id="home"
                className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 sm:py-24"
            >
                <div className="relative text-center w-full max-w-2xl px-4 mx-auto">
                    {/* Animated Profile Image */}
                    <div className="flex justify-center mb-6">
                        <div className="relative group">
                            {/* Animated border ring */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 animate-pulse"></div>
                            
                            {/* Main image container */}
                            <div className="relative w-46 h-36 md:w-62 md:h-52 lg:w-74 lg:h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-1">
                                <img
                                    src={Image1}
                                    alt="Profile Picture"
                                    className="w-full h-full object-cover rounded-full shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                                />
                            </div>
                            
                            {/* Status indicator dot */}
                            <div className="absolute bottom-2 right-2 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse flex items-center justify-center">
                                <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* Gradient Name with Typewriter Effect */}
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                        Hi, I'm Ivine Shaji Kakkanat
                    </h1>        
                    {/* Typewriter subtitle */}
                    <p className="text-base sm:text-xl md:text-2xl text-indigo-700 dark:text-indigo-300 font-semibold mb-4 w-full overflow-x-hidden">
                        <span
                            className="animate-typing w-full sm:w-[35ch]"
                            style={{
                                display: 'inline-block',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                borderRight: '2px solid #6366f1',
                                animation: 'typing 2s steps(35, end) 1, blink 1s infinite',
                            }}
                        >
                            Web Developer & Cybersecurity Enthusiast
                        </span>
                    </p>
                    {/* Interesting description */}
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
                        Crafting secure, seamless, and engaging digital experiences.<br />
                        <span className="italic text-purple-600 dark:text-purple-400">
                            "Code with creativity. Secure with passion."
                        </span>
                    </p>
                    {/* Down Arrow Animation */}
                    <div className="flex justify-center mt-8">
                        <a href="#about" aria-label="Scroll Down">
                            <svg
                                className="animate-bounce w-8 h-8 text-indigo-500 dark:text-indigo-300"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                    <a
                        href="/projects"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
                    >
                        View My Work
                    </a>
                </div>
            </section>
            {/* CSS for typewriter and gradient effect */}
            <style>
                {`
                    @keyframes typing {
                        from { width: 0; }
                        to { width: 100%; }
                    }
                    @keyframes blink {
                        0%, 50%, 100% { border-color: transparent; }
                        25%, 75% { border-color: #6366f1; }
                    }
                    .animate-typing {
                        display: inline-block;
                        overflow: hidden;
                        white-space: nowrap;
                        border-right: 2px solid #6366f1;
                        animation: typing 2s steps(35, end) 1, blink 1s infinite;
                        width: 35ch;
                    }
                    @keyframes gradient {
                        0% { background-position: 0% 50%; }
                        100% { background-position: 100% 50%; }
                    }
                    .animate-gradient {
                        background-size: 200% 200%;
                        animation: gradient 3s ease-in-out infinite alternate;
                    }
                    @media (max-width: 640px) {
                        .animate-typing {
                            animation: typing 2s steps(35, end) 1;
                            width: 35ch;
                        }
                    }
                `}
            </style>
        </main>
    );
};

export default Home;