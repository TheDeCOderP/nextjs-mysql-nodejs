import Link from "next/link";

// components/Header.js
export default function Header() {
    return (
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Dental Clinic</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  