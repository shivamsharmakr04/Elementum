import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Elementum
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="#home"
                  className="hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-white transition"
                >
                  Studio
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition"
                >
                  Testimonials
                </a>
              </li>

            </ul>
          </div>

          {/* Policies */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="#newsletter"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-white transition"
                >
                  Our Services
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#home"
                  className="hover:text-white transition"
                >
                  Back To Top
                </a>
              </li>

            </ul>
          </div>

          {/* Social Media */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>New Delhi, India</p>

              <a
                href="tel:+919876543210"
                className="block hover:text-white"
              >
                +91 9876543210
              </a>

              <a
                href="mailto:hello@elementum.com"
                className="block hover:text-white"
              >
                hello@elementum.com
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          © 2026 Elementum. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;