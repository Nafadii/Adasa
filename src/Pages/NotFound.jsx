import React from "react"
import { Link } from "react-router-dom"
import { Home, Newspaper, Frown } from "lucide-react"

export default function NotFound() {
  return (
    <main className="grow pt-20" dir="rtl">
      <div className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />

        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-yellow-500/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-lg px-4 text-center">
          <div className="relative mb-6">
            <h1 className="bg-linear-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-[140px] leading-none font-black text-transparent select-none md:text-[180px]">
              404
            </h1>
            <div className="pointer-events-none absolute inset-0 text-[140px] leading-none font-black text-orange-500/20 blur-2xl select-none md:text-[180px]">
              404
            </div>
          </div>

          <div className="relative mx-auto mb-8 h-28 w-28">
            <div className="absolute inset-0 rounded-full border border-orange-500/30 bg-linear-to-br from-orange-500/20 to-yellow-500/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Frown className="h-14 w-14 text-orange-500" />
            </div>
            <div className="absolute -top-2 -right-2 h-5 w-5 rotate-12 animate-bounce rounded-lg bg-orange-500" />
            <div className="absolute -bottom-1 -left-3 h-4 w-4 animate-pulse rounded-full bg-yellow-500" />
          </div>

          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="mb-8 text-lg text-neutral-400">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600"
            >
              <Home className="h-5 w-5" />
              الذهاب للرئيسية
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#262626] bg-[#161616] px-6 py-3 font-semibold text-neutral-300 transition-all duration-300 hover:border-neutral-700 hover:text-white"
            >
              <Newspaper className="h-5 w-5" />
              تصفح المقالات
            </Link>
          </div>

          <div className="border-t border-[#262626] pt-8">
            <p className="mb-4 text-sm text-neutral-500">قد تجد هذه مفيدة:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/blog"
                className="font-medium text-orange-500 transition-colors hover:text-orange-400 hover:underline"
              >
                المدونة
              </Link>
              <span className="text-neutral-600">•</span>
              <Link
                to="/about"
                className="font-medium text-orange-500 transition-colors hover:text-orange-400 hover:underline"
              >
                من نحن
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
