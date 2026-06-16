"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const links = [

    { name: "Home", href: "/" },

    { name: "About", href: "/about" },

    { name: "Ambrogio", href: "/cafes/ambrogio" },

    { name: "Makmur", href: "/cafes/makmur-jaya" },

    { name: "Jabarano", href: "/cafes/jabarano" },

    { name: "Comparison", href: "/comparison" },

    { name: "Conclusion", href: "/conclusion" },

  ];

  return (

    <nav className="sticky top-0 z-50 bg-[#F8F5F0]/95 backdrop-blur border-b border-[#E4DED7]">

      <div className="container py-5">

        <div className="flex items-center justify-between">

          <Link

            href="/"

            className="font-semibold tracking-[5px] text-[#9A7B4F]"

          >

            BCJ

          </Link>

          {/* DESKTOP */}

          <div className="hidden md:flex gap-6 text-xs uppercase tracking-[2px]">

            {links.map((link) => (

              <Link

                key={link.href}

                href={link.href}

                className={`

                  transition duration-300

                  hover:text-[#9A7B4F]

                  ${pathname === link.href

                    ? "text-[#9A7B4F]"

                    : "text-gray-500"}

                `}

              >

                {link.name}

              </Link>

            ))}

          </div>

          {/* MOBILE BUTTON */}

          <button

            className="md:hidden text-2xl"

            onClick={() => setIsOpen(!isOpen)}

          >

            {isOpen ? "✕" : "☰"}

          </button>

        </div>

        {/* MOBILE MENU */}

        <div

  className={`

    md:hidden

    overflow-hidden

    transition-all

    duration-500

    ease-in-out

    ${isOpen

      ? "max-h-96 opacity-100 mt-6 pb-4"

      : "max-h-0 opacity-0"}

  `}

>

  <div className="flex flex-col gap-5">

    {links.map((link) => (

      <Link

        key={link.href}

        href={link.href}

        onClick={() => setIsOpen(false)}

        className={`

          uppercase

          text-sm

          tracking-[2px]

          transition-all

          duration-300

          hover:text-[#9A7B4F]

          ${pathname === link.href

            ? "text-[#9A7B4F]"

            : "text-gray-500"}

        `}

      >

        {link.name}

      </Link>

    ))}

  </div>

</div>

      </div>

    </nav>

  );

}