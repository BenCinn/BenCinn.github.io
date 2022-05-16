export default function Button({ text }) {
    return (
        <button className="px-8 py-4 mt-6 font-bold tracking-wide text-white bg-gradient-to-b from-blue-400 to-blue-500 rounded-full transition duration-300 ease-in-out outline-none dark:text-white focus:outline-none md:hover:shadow-lg md:hover:shadow-blue-500/50 md:hover:from-blue-500 md:hover:-translate-y-1 md:hover:scale-110">
            {text}
        </button>
    )
}