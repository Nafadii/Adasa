import React from "react"
import { Link } from "react-router-dom"
import postsData from "../../../Data/posts.json"
import {
  Sun,
  User,
  Mountain,
  Sliders,
  Camera,
  Folder,
  ChevronLeft,
} from "lucide-react"

// 1. خريطة الأيقونات والألوان حسب اسم الـ Category
const categoryConfig = {
  إضاءة: { icon: Sun, gradient: "from-orange-500 to-yellow-500" },
  بورتريه: { icon: User, gradient: "from-orange-600 to-orange-400" },
  "مناظر طبيعية": { icon: Mountain, gradient: "from-orange-500 to-yellow-500" },
  تقنيات: { icon: Sliders, gradient: "from-orange-500 to-yellow-500" },
  معدات: { icon: Camera, gradient: "from-orange-500 to-yellow-500" },
}

export default function Categories() {
  const posts = postsData.posts || []

  // 2. حساب عدد المقالات لكل تصنيف تلقائياً من الـ JSON
  const categoryCounts = posts.reduce((acc, post) => {
    if (post.category) {
      acc[post.category] = (acc[post.category] || 0) + 1
    }
    return acc
  }, {})

  // 3. تحويل الكائن لمصفوفة جاهزة للعرض
  const dynamicCategories = Object.keys(categoryCounts).map((catName) => ({
    title: catName,
    count: `${categoryCounts[catName]} مقالة`,
    icon: categoryConfig[catName]?.icon || Folder, // أيقونة افتراضية
    gradient:
      categoryConfig[catName]?.gradient || "from-orange-500 to-yellow-500",
  }))

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6" dir="rtl">
      {dynamicCategories.map((cat, index) => {
        const IconComponent = cat.icon

        return (
          <Link
            key={cat.title}
            to={`/blog?category=${encodeURIComponent(cat.title)}`}
            style={{ animationDelay: `${index * 100}ms` }}
            className="group relative block overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/30"
          >
            {/* خلفية الجرادينت */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${cat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />

            {/* محتوى الكارت */}
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 transition-colors duration-300 group-hover:border-transparent group-hover:bg-white/20">
                <IconComponent className="h-6 w-6 text-orange-500 transition-colors duration-300 group-hover:text-white" />
              </div>

              <h3 className="mb-1 text-lg font-bold text-white group-hover:text-white">
                {cat.title}
              </h3>
              <p className="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-white/80">
                {cat.count}
              </p>

              <div className="absolute top-5 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#262626] opacity-0 transition-all duration-300 group-hover:bg-white/20 group-hover:opacity-100">
                <ChevronLeft className="h-4 w-4 text-white" />
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
