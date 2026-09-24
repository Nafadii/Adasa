import React from "react"
import { Link } from "react-router-dom"
import postsData from "../../../Data/posts.json"
import { MoveLeft, Info, ChevronLeft } from "lucide-react"
import {
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6"

export default function Footer() {
  const quickLinks = [
    { title: "الرئيسية", path: "/" },
    { title: "المدونة", path: "/blog" },
    { title: "من نحن", path: "/about" },
  ]
  const categoryLinks = [
    { title: "إضاءة", path: "/blog?category=إضاءة" },
    { title: "بورتريه", path: "/blog?category=بورتريه" },
    { title: "مناظر طبيعية", path: "/blog?category=مناظر طبيعية" },
    { title: "تقنيات", path: "/blog?category=تقنيات" },
  ]
  return (
    <>
      <footer
        className="relative overflow-hidden border-t border-[#262626] bg-[#0a0a0a] text-neutral-300"
        dir="rtl"
      >
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-5">
            <div className="lg:col-span-1">
              <Link to="/" className="mb-4 flex flex-row items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-orange-600 transition-all duration-300 group-hover:scale-105">
                  <span className="text-xl font-bold text-white">ع</span>
                </div>
                <span className="text-xl font-bold text-white">عدسة</span>
              </Link>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="flex gap-2">
                <Link
                  to={postsData.siteInfo.social.twitter}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white"
                >
                  <FaXTwitter className="h-5 w-5" />
                </Link>
                <Link
                  to={postsData.siteInfo.social.github}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white"
                >
                  <FaGithub className="h-5 w-5" />
                </Link>
                <Link
                  to={postsData.siteInfo.social.linkedin}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Link>
                <Link
                  to={postsData.siteInfo.social.youtube}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white"
                >
                  <FaYoutube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
                <span className="h-0.5 w-8 rounded-full bg-linear-to-r from-orange-500 to-yellow-500"></span>
                استكشف
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      <ChevronLeft className="-mr-4 h-4 w-4 text-orange-500 opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
                <span className="h-0.5 w-8 rounded-full bg-linear-to-r from-orange-500 to-yellow-500"></span>
                التصنيفات
              </h3>
              <ul className="space-y-4">
                {categoryLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-orange-500"
                    >
                      <ChevronLeft className="-mr-4 h-4 w-4 text-orange-500 opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
                <span className="h-0.5 w-8 rounded-full bg-linear-to-r from-orange-500 to-yellow-500"></span>
                ابقى على اطلاع
              </h3>
              <p className="mb-4 text-sm text-neutral-500">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <form action="" className="space-y-3">
                
                <div className="relative">
                  <input
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full rounded-xl border border-[#262626] bg-[#161616] px-4 py-3 text-sm text-white placeholder-neutral-600 transition-all duration-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none"
                    type="email"
                  />
                    
                </div>
                <button type="submit" className="btn-primary w-full text-sm">
                  اشترك
                </button>
              </form>
            </div>
          </div>
          <div className="relative border-t border-[#262626] ">
            <div className=" px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="flex flex-row items-center gap-1 text-sm text-neutral-600">
                  © 2026 عدسة. صنع بكل
                  <FaHeart className="text-orange-500" />
                  جميع الحقوق محفوظة.
                </p>

                <div className="flex gap-6">
                  <Link
                    to="/privacy"
                    className="text-sm text-neutral-600 transition-colors duration-300 hover:text-orange-500"
                  >
                    سياسة الخصوصية
                  </Link>
                  <Link
                    to="/terms"
                    className="text-sm text-neutral-600 transition-colors duration-300 hover:text-orange-500"
                  >
                    شروط الخدمة
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
