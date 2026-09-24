import React from "react"
import postData from "../../../Data/posts.json"
import { Link } from "react-router-dom"
import { Calendar, Clock, List } from "lucide-react"
import { FaEnvelope } from "react-icons/fa6"

export default function TableOfContents({ content, readTime, date }) {
  if (!content) return null

  const sections = content.split("\n\n## ").slice(1)

  return (
    <aside className="order-1 lg:order-2">
      <div className="space-y-6 lg:sticky lg:top-24">
        <div className="rounded-2xl border border-[#262626] bg-[#111111] p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
              <List className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="font-bold text-white">محتويات المقال</h3>
          </div>

          <nav className="space-y-2">
            {sections.map((sec, index) => {
              const title = sec.split("\n\n")[0].trim()
              const sectionId = `section-${index}`

              return (
                <a
                  key={index}
                  href={`#${sectionId}`}
                  className="group flex items-center gap-3 rounded-xl p-3 text-neutral-400 transition-all duration-300 hover:bg-orange-500/5 hover:text-orange-500"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1a1a1a] text-xs font-bold text-neutral-500 transition-colors group-hover:bg-orange-500/10 group-hover:text-orange-500">
                    {index + 1}
                  </span>
                  <span className="text-sm">{title}</span>
                </a>
              )
            })}
          </nav>
        </div>
        <div className="rounded-2xl border border-[#262626] bg-[#111111] p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#0a0a0a] p-4 text-center">
              <Clock className="mb-2 text-xl text-orange-500" />
              <p className="font-bold text-white">{readTime}</p>
              <p className="text-xs text-neutral-500">وقت القراءة</p>
            </div>
            <div className="rounded-xl bg-[#0a0a0a] p-4 text-center">
              <Calendar className="mb-2 text-xl  text-orange-500" />
              <p className="font-bold text-white">{date}</p>
              <p className="text-xs text-neutral-500">تاريخ النشر</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-orange-500/20 bg-linear-to-br from-orange-500/10 to-yellow-500/5 p-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20">
              <FaEnvelope className="text-xl text-orange-500" />
            </div>
            <h3 className="mb-2 font-bold text-white">لا تفوّت جديدنا</h3>
            <p className="mb-4 text-sm text-neutral-400">
              اشترك للحصول على أحدث المقالات
            </p>
            <Link
              to="/blog"
              className="block w-full rounded-xl bg-orange-500 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
            >
              تصفح المزيد
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
