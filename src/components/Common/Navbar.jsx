import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../theme-provider";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  /* Scroll background */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active section detection */
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    // 👇 FIRST close menu
    setMenuOpen(false);

    // 👇 THEN scroll (small delay for smooth UX)
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 z-999 w-full transition-all duration-300
      ${
        isScrolled
          ? "bg-background/70 backdrop-blur-md shadow-md"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-357.5 items-center justify-between px-4 py-3">
        {/* LOGO */}
        <div className="text-lg font-bold flex items-center gap-1">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-pink-600 scale-125"
          >
            {"{"}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Ajit.dev
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-pink-600 scale-125"
          >
            {"}"}
          </motion.span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className={`
                text-sm font-medium transition
                ${
                  activeSection === item.id
                    ? "text-pink-600"
                    : "text-foreground hover:text-pink-600"
                }
              `}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          {theme === "dark" ? (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setTheme("light")}
              className="rounded-lg p-2 hover:bg-gray-900 transition"
            >
              <Sun className="h-5 w-5 text-pink-500" />
            </motion.button>
          ) : (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setTheme("dark")}
              className="rounded-lg p-2 hover:bg-gray-100 transition"
            >
              <Moon className="h-5 w-5 text-pink-500" />
            </motion.button>
          )}

          {/* HAMBURGER */}
          <button
            className="md:hidden rounded-lg p-2 text-pink-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden absolute w-full z-10 overflow-hidden bg-background border-t"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    text-base font-medium text-left
                    ${
                      activeSection === item.id
                        ? "text-pink-600"
                        : "text-foreground"
                    }
                  `}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
