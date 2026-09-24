import { Link } from "react-router-dom"
import postsData from "../../Data/posts.json"
import { MoveLeft, Info, ChevronLeft } from "lucide-react"
import HeroBackground from "../../components/myComponents/HeroBackground/HeroBackground"
import HeroStats from "../../components/myComponents/HeroStats/HeroStats"
import RecentBlogs from "../../components/myComponents/RecentBlogs/RecentBlogs"
import Categories from "../../components/myComponents/Categories/Categories"
import LastBlogs from "../../components/myComponents/LastBlogs/LastBlogs"
import Subscribe from "../../components/myComponents/Subscribe/Subscribe"

export default function Home() {
  const recentPosts = postsData.posts.slice(0, 3)

  return (
    <div className="py-10" dir="rtl">
    
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#0a0a0a]">
        <HeroBackground />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
          
            <div className="section-label mb-4">
              <span className="relative ml-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
              </span>
              <h1 className="text-sm font-medium text-neutral-300">
                مرحباً بك في عدسة
              </h1>
            </div>

            <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              اكتشف <span className="gradient-text">فن</span>
              <br /> التصوير الفوتوغرافي
            </h1>
            <p className="mx-auto mb-5 max-w-2xl text-xl leading-relaxed text-neutral-400 md:text-2xl">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

  
            <div className="flex items-center justify-center gap-5 pt-4">
              <Link to="/blog">
                <button className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-0.5">
                  <span>استكشف المقالات</span>
                  <MoveLeft className="transition-transform group-hover:-translate-x-1" />
                </button>
              </Link>
              <Link to="/about">
                <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#262626] bg-transparent px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500">
                  <Info className="h-5 w-5" /> اعرف المزيد
                </button>
              </Link>
            </div>

   
            <HeroStats />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] py-24">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-orange-500/5 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="section-label mb-4">
                <span className="relative ml-2 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium text-orange-500">
                  مميز
                </span>
              </div>
              <h2 className="section-title">مقالات مختارة</h2>
              <p className="section-subtitle">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link to="/blog">
              <button className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 px-5 py-3 text-white transition-all duration-300 hover:-translate-y-0.5">
                <span>عرض الكل</span>
                <ChevronLeft className="transition-transform group-hover:-translate-x-1" />
              </button>
            </Link>
          </div>
          <RecentBlogs />
        </div>
      </section>

      <section className="relative border-y border-[#262626] bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-4">
              <span className="relative ml-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
              </span>
              التنصيفات
            </span>
            <h2 className="section-title">استكشف حسب الموضوع</h2>
            <p className="section-subtitle">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <Categories />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] py-24">
        <div className="absolute bottom-0 left-0 h-full w-1/3 bg-linear-to-r from-orange-500/5 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LastBlogs />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] py-24">
        <div className="absolute top-0 left-1/2 h-75 w-150 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"></div>
        <Subscribe />
      </section>
    </div>
  )
}
