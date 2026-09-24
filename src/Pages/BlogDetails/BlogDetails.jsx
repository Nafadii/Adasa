import postData from "../../Data/posts.json"
import { useParams, Link } from "react-router-dom"
import Prose from "../../components/myComponents/Prose/Prose"
import TableOfContents from "../../components/myComponents/TableOfContents/TableOfContents"
import NotFound from "../NotFound"
import {
  ChevronLeft,
  Clock,
  House,
  Calendar,
  Tags,
  Share2,
  List,
  Images,
  MoveLeft,
} from "lucide-react"
import { FaLink, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6"

export default function BlogDetails() {
  const { slug } = useParams()

  const post = postData.posts.find((p) => p.slug === slug)

  if (!post) {
    return <NotFound />
  }

  const relatedPosts = postData.posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  const suggestedPosts =
    relatedPosts.length > 0
      ? relatedPosts
      : postData.posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <main className="grow pt-20">
      <article className="min-h-screen bg-[#0a0a0a]">
        <div className="relative h-[60vh] min-h-125 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent"></div>
          <div className="absolute top-8 right-8 left-8">
            <nav className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm backdrop-blur-md">
              <Link
                to="/"
                className="text-white/70 transition-colors hover:text-white"
              >
                <House />
              </Link>
              <ChevronLeft className="text-xs text-white/30" />
              <Link
                to="/blog"
                className="text-white/70 transition-colors hover:text-white"
              >
                المدونة
              </Link>
              <ChevronLeft className="text-xs text-white/30" />
              <span className="max-w-50 truncate font-medium text-orange-400">
                {post.category}
              </span>
            </nav>
          </div>
          <div className="absolute right-0 bottom-0 left-0 p-8 md:p-12">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Link
                  to={`/blog/?category=${post.category}`}
                  className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-600"
                >
                  {post.category}
                </Link>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span className="flex items-center gap-2">
                    <Calendar />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <h1 className="mb-6 max-w-4xl text-3xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-orange-500/50"
                />
                <div>
                  <p className="font-bold text-white">{post.author.name}</p>
                  <p className="text-sm text-white/60">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <div className="order-2 lg:order-1">
              <div className="mb-10 rounded-2xl border border-orange-500/20 bg-linear-to-r from-orange-500/10 to-yellow-500/5 p-6">
                <p className="text-lg leading-relaxed text-neutral-200 italic">
                  "{post.excerpt}"
                </p>
              </div>
              <Prose content={post.content} />
              <div className="mt-14 rounded-2xl border border-[#262626] bg-[#111111] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                    <Tags className="text-orange-500" />
                  </div>
                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="cursor-pointer rounded-full border border-[#262626] bg-[#1a1a1a] px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-orange-500/50 hover:text-orange-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-6 rounded-2xl border border-[#262626] bg-[#111111] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                      <Share2 className="text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">شارك المقال</h3>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-all duration-300 hover:border-transparent hover:bg-[#1da1f2] hover:text-white">
                      <FaXTwitter className="h-5 w-5" />
                    </button>
                    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-all duration-300 hover:border-transparent hover:bg-[#0077b5] hover:text-white">
                      <FaLinkedin className="h-5 w-5" />
                    </button>
                    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-all duration-300 hover:border-transparent hover:bg-[#25d366] hover:text-white">
                      <FaWhatsapp className="h-5 w-5" />
                    </button>
                    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-all duration-300 hover:border-transparent hover:bg-orange-500 hover:text-white">
                      <FaLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-[#262626] bg-linear-to-br from-[#161616] to-[#111111] p-8">
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-24 w-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                  />
                  <div className="flex-1 text-center sm:text-right">
                    <span className="text-xs font-semibold tracking-wider text-orange-500 uppercase">
                      كاتب المقال
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {post.author.name}
                    </h3>
                    <p className="mb-3 text-sm text-neutral-500">
                      {post.author.role}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <TableOfContents
              content={post.content}
              readTime={post.readTime}
              date={post.date}
            />
          </div>
          <div className="mt-20 border-t border-[#262626] pt-12">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
                  <Images className="text-xl text-orange-500" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h2>
                  <p className="text-sm text-neutral-500">
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>
              </div>
              <Link
                to="/blog"
                className="group hidden items-center gap-2 text-orange-500 transition-colors hover:text-orange-400 sm:flex"
              >
                عرض الكل
                <MoveLeft className="transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] transition-all duration-300 hover:border-orange-500/30"
                >
                  <Link to={`/blog/${relatedPost.slug}`} className="block">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>

                      <div className="absolute top-4 right-4">
                        <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                          {relatedPost.category}
                        </span>
                      </div>

                      <div className="absolute right-0 bottom-0 left-0 p-5">
                        <h3 className="mb-4 line-clamp-2 text-lg leading-snug font-bold text-white transition-colors duration-300 group-hover:text-orange-500">
                          {relatedPost.title}
                        </h3>

                        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-neutral-400">
                          <span>{relatedPost.readTime}</span>

                          <div className="flex items-center gap-2">
                            <span className="font-medium text-neutral-300">
                              {relatedPost.author.name}
                            </span>
                            <img
                              src={relatedPost.author.avatar}
                              alt={relatedPost.author.name}
                              className="h-6 w-6 rounded-full object-cover ring-1 ring-orange-500/50"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
