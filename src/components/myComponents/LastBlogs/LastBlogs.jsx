import React from "react"
import { Link } from "react-router-dom"
import postsData from "../../../Data/posts.json"
import { ChevronLeft, Clock, MoveLeft } from "lucide-react"

export default function LastBlogs() {
  const lastblogs = postsData.posts.slice(3, 6)
  return (
    <>
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="section-label mb-4">
            <span className="relative ml-2 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
            </span>
            <span className="text-sm font-medium text-orange-500">الاحدث</span>
          </span>
          <h2 className="section-title text-white">أحدث المقالات</h2>
          <p className="section-subtitle max-w-lg">
            محتوى جديد طازج من المطبعة
          </p>
        </div>
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 font-semibold text-orange-500 transition-colors hover:text-orange-400"
        >
          عرض جميع المقالات
          <MoveLeft />
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {lastblogs.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-2xl bg-[#161616]"
          >
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute top-4 right-4">
                  <span className="rounded-full border border-[#333333] bg-[#0a0a0a]/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-sm text-neutral-500">
                  <Clock className="h-3.5 w-3.5 text-neutral-500" />
                  <span className="text-neutral-500">{post.readTime}</span>
                  <span className="h-1 w-1 rounded-full bg-neutral-600"></span>
                  <span className="text-neutral-500">{post.date}</span>
                </div>

                <h3 className="mb-3 line-clamp-2 text-xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-orange-500">
                  {post.title}
                </h3>

                <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-neutral-400">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-[#262626] pt-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-12 w-12 rounded-full object-cover shadow-md ring-2 ring-[#262626]"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 transition-colors duration-300 group-hover:border-transparent group-hover:bg-orange-500">
                    <ChevronLeft className="h-4 w-4 text-orange-500 transition-colors duration-300 group-hover:text-white" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  )
}
