import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import postsData from "../../Data/posts.json"
import {
  Newspaper,
  Search,
  LayoutGrid,
  Menu,
  Clock,
  MoveLeft,
  ChevronLeft,
  Calendar,
  RefreshCcw,
  FaceSlightlyFrowning,
  ChevronRight,
} from "lucide-react"

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات")
  const [viewMode, setViewMode] = useState("grid")

  const categories = [
    "جميع المقالات",
    ...new Set(postsData.posts.map((post) => post.category)),
  ]

  const filteredPosts = postsData.posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "جميع المقالات" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  )

  const postsSectionRef = useRef(null)

  useEffect(() => {
    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [currentPage])

  return (
    <main className="grow pt-20">
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>
            <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl"></div>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="section-label mb-6 inline-flex items-center gap-2">
              <Newspaper className="h-4 w-4 rotate-y-180" />
              مدونتنا
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              استكشف
              <span className="gradient-text"> مقالاتنا </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-neutral-400">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
        <div className="sticky top-20 z-40 border-b border-[#262626] bg-[#0a0a0a]/90 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="relative w-full md:w-80">
                <input
                  placeholder="ابحث في المقالات..."
                  className="w-full rounded-xl border border-[#262626] bg-[#161616] px-5 py-3 pr-12 text-white placeholder-neutral-500 focus:border-orange-500 focus:outline-none"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-neutral-500" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`cursor-pointer rounded-2xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "rounded-xl bg-linear-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300"
                          : "rounded-xl border border-[#262626] bg-[#161616] px-4 py-2 text-sm font-medium text-neutral-400 transition-all duration-300 hover:border-orange-500/30"
                      }`}
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          ref={postsSectionRef}
          className="mx-auto max-w-7xl scroll-mt-36.5 px-4 py-12 sm:px-6 lg:px-8"
        >
     
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">
                {filteredPosts.length}
              </span>{" "}
              مقالات
              {selectedCategory !== "جميع المقالات" && (
                <span>
                  {" "}
                  في{" "}
                  <span className="font-bold text-orange-500">
                    {selectedCategory}
                  </span>
                </span>
              )}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-xl border border-[#262626] bg-[#161616] p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`cursor-pointer rounded-lg p-2 transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-orange-500 text-white shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <LayoutGrid className="h-5 w-5" />
                </button>

                <button
                  onClick={() => setViewMode("list")}
                  className={`cursor-pointer rounded-lg p-2 transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-orange-500 text-white shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>

              {(selectedCategory !== "جميع المقالات" || searchQuery !== "") && (
                <button
                  onClick={() => {
                    setSelectedCategory("جميع المقالات")
                    setSearchQuery("")
                  }}
                  className="flex cursor-pointer items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-orange-500"
                >
                  ✕ مسح الفلاتر
                </button>
              )}
            </div>
          </div>
          {filteredPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#262626] bg-[#161616]">
                <FaceSlightlyFrowning className="h-12 w-12 text-neutral-500" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">
                لا توجد مقالات
              </h3>
              <p className="mb-6 max-w-md text-neutral-400">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("جميع المقالات")
                  setSearchQuery("")
                }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <RefreshCcw className="h-5 w-5" />
                إعادة تعيين الفلاتر
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                  : "flex flex-col gap-6"
              }
            >
              {currentPosts.map((post) =>
                viewMode === "list" ? (
                  <article
                    key={post.slug}
                    className="group overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] transition-all duration-500 hover:border-orange-500/30"
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex flex-col md:flex-row"
                    >
                      <div className="relative h-52 w-full shrink-0 overflow-hidden md:h-auto md:w-72 lg:w-80">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex w-full flex-1 flex-col justify-between p-6 md:p-8">
                        <div>
                          <div className="mb-3 flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                              {post.category}
                            </span>
                            <Clock className="h-3.5 w-3.5 text-neutral-500" />
                            <span className="text-neutral-500">
                              {post.readTime}
                            </span>
                            <span className="flex items-center gap-1 text-neutral-500">
                              <Calendar className="h-4 w-4" />
                              {post.date}
                            </span>
                          </div>

                          <h2 className="mb-4 text-2xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-orange-500 md:text-3xl">
                            {post.title}
                          </h2>

                          <p className="mb-6 line-clamp-3 leading-relaxed text-neutral-400">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="mt-auto flex items-center justify-between border-t border-[#262626] pt-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="h-10 w-10 rounded-full object-cover ring-2 ring-[#262626]"
                            />
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {post.author.name}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {post.author.role}
                              </p>
                            </div>
                          </div>

                        
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-3">
                            اقرأ المقال
                            <MoveLeft className="h-5 w-5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ) : (
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
                          <span className="text-neutral-500">
                            {post.readTime}
                          </span>
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
                )
              )}
            </div>
          )}
          {/* شريط الـ Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-2" dir="rtl">
                {/* زر الصفحة السابقة */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-white transition-colors duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* أرقام الصفحات */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl font-medium transition-all duration-300 ${
                        currentPage === page
                          ? " bg-linear-to-r from-orange-500 to-orange-600 text-sm font-medium text-white transition-all duration-300"
                          : " border border-[#262626] bg-[#161616] text-sm font-medium text-neutral-400 transition-all duration-300 hover:border-orange-500/50 hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                {/* زر الصفحة التالية */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-white transition-colors duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>

              {/* نص "صفحة X من Y" */}
              <p className="text-sm text-neutral-500">
                صفحة <span className="text-white">{currentPage}</span> من{" "}
                <span className="text-white">{totalPages}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
