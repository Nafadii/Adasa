import React from "react"
import { Link } from "react-router-dom"
import postsData from "../../../Data/posts.json"
import { MoveLeft, Clock, Star } from "lucide-react"

export default function RecentBlogs() {
  const recentPosts = postsData.posts.slice(0, 3)

  return (
    <>
      <div className="space-y-8">
        {recentPosts.map((post) => (
          <article
            key={post.slug}
            className="group relative overflow-hidden rounded-3xl border border-[#262626] bg-[#161616] transition-all duration-500 hover:border-orange-500/30"
          >
            <Link
              to={`/blog/${post.slug}`}
              className="grid gap-0 md:grid-cols-2"
            >
              <div className="relative h-72 overflow-hidden md:h-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="ease-out` h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <span className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-3 py-1.5 text-xs font-semibold text-white">
                    <Star className="h-3.5 w-3.5 fill-white" /> مميز
                  </span>
                </span>
              </div>

              <div className="flex h-full flex-col justify-between p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                    {post.category}
                  </span>
                  <Clock className="h-3.5 w-3.5 text-neutral-500" />
                  <span className="text-neutral-500">{post.readTime}</span>
                </div>

                <h2 className="mb-4 text-2xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-orange-500 md:text-3xl">
                  {post.title}
                </h2>

                <p className="mb-6 line-clamp-3 leading-relaxed text-neutral-400">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-12 w-12 rounded-full object-cover shadow-md ring-2 ring-[#262626]"
                      />
                      <div className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full border-2 border-[#161616] bg-orange-500"></div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-neutral-500">{post.date}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-3">
                    اقرأ المقال
                    <MoveLeft className="h-4 w-4 text-orange-500 transition-transform" />
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
