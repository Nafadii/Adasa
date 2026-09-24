import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo-GdqARQRt.png"
import { Search, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 z-50 border-b border-transparent bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-500"
        dir="rtl"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="group">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold">عدسة</span>
                  <span className="hidden text-sm tracking-wide text-orange-400/80 sm:block">
                    عالم التصوير الفوتوغرافي
                  </span>
                </div>
              </div>
            </Link>

            <div className="hidden items-center md:flex">
              <div className="flex items-center rounded-full border border-[#262626] bg-[#161616] p-1.5">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
                      : "rounded-full px-5 py-2.5 text-sm font-medium text-neutral-400 transition-all duration-300 hover:text-white"
                  }
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
                      : "rounded-full px-5 py-2.5 text-sm font-medium text-neutral-400 transition-all duration-300 hover:text-white"
                  }
                >
                  المدونة
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
                      : "rounded-full px-5 py-2.5 text-sm font-medium text-neutral-400 transition-all duration-300 hover:text-white"
                  }
                >
                  من نحن
                </NavLink>
              </div>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                className="rounded-xl border border-transparent p-3 text-neutral-500 transition-all duration-300 hover:border-[#262626] hover:bg-[#161616] hover:text-orange-500"
              >
                <Search className="h-5 w-5" />
              </button>
              <NavLink
                to="/blog"
                className="rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                ابدأ القراءة
              </NavLink>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer rounded-xl border border-transparent p-3 text-neutral-400 transition-all duration-300 hover:border-[#262626] hover:bg-[#161616] hover:text-white md:hidden"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out md:hidden ${
              isOpen
                ? "grid-rows-[1fr] pb-6 opacity-100"
                : "pointer-events-none grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="rounded-2xl border border-[#262626] bg-[#161616] p-4 backdrop-blur-xl">
                <div className="flex flex-col space-y-2">
                  <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-sm font-medium text-orange-500 transition-all duration-300"
                        : "rounded-xl px-4 py-3 text-sm font-medium text-neutral-400 transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
                    }
                  >
                    الرئيسية
                  </NavLink>
                  <NavLink
                    to="/blog"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-sm font-medium text-orange-500 transition-all duration-300"
                        : "rounded-xl px-4 py-3 text-sm font-medium text-neutral-400 transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
                    }
                  >
                    المدونة
                  </NavLink>
                  <NavLink
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-sm font-medium text-orange-500 transition-all duration-300"
                        : "rounded-xl px-4 py-3 text-sm font-medium text-neutral-400 transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
                    }
                  >
                    من نحن
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-6 py-4 text-center text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                  >
                    ابدأ القراءة
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
