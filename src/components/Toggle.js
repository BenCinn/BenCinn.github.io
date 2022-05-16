import { useTheme } from "next-themes";
import nightwind from "nightwind/helper";

export default function Toggle(props) {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    nightwind.beforeTransition();
    if (theme !== "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="block px-4 py-3 font-bold no-underline md:inline-block"
    >
      <svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        className="z-10 mx-auto w-auto h-7 cursor-pointer group"
      >
        <circle
          cx="70"
          cy="70"
          r="70"
          fill="currentColor"
          className="text-blue-600 transition duration-300 dark:text-yellow-300"
        ></circle>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M82.5612 138.876C55.6458 126.762 37 100.476 37 70C37 39.5244 55.6458 13.2383 82.5613 1.1239C115.227 7.04239 140 35.6281 140 70C140 104.372 115.227 132.958 82.5612 138.876Z"
          fill="currentColor"
          className="text-yellow-300 transition duration-300 lg:group-hover:text-blue-200 dark:text-blue-500 dark:lg:group-hover:text-yellow-500"
        ></path>
      </svg>
    </button>
  );
}
