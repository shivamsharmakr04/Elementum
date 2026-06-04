import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="w-full bg-white py-6 px-8 sticky top-0 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-semibold">
          Elementum
        </h1>

        <ul className="hidden md:flex gap-10 text-sm font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-gray-500 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-gray-500 transition"
            >
              Studio
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="hover:text-gray-500 transition"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#newsletter"
              className="hover:text-gray-500 transition"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-gray-500 transition"
            >
              Testimonials
            </a>
          </li>

          <li>
            <a
              href="#footer"
              className="hover:text-gray-500 transition"
            >
              FAQs
            </a>
          </li>

        </ul>

        <button className="md:hidden">
          <HiOutlineMenuAlt3 size={28} />
        </button>

      </div>

    </nav>
  );
}

export default Navbar;