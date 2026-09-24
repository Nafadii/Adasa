import { Newspaper, Users, FolderOpen, PenTool } from "lucide-react"

const statsData = [
  { id: 1, icon: Newspaper, value: "+50", label: "مقالة", iconClass: "" },
  { id: 2, icon: Users, value: "+10ألف", label: "قارئ", iconClass: "" },
  { id: 3, icon: FolderOpen, value: "4", label: "تصنيفات", iconClass: "" },
  { id: 4, icon: PenTool, value: "6", label: "كاتب", iconClass: "-rotate-90" },
]

export default function HeroStats() {
  return (
    <>
      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
        {statsData.map(({ id, icon: Icon, value, label, iconClass }) => (
          <div
            key={id}
            className="rounded-2xl border border-[#262626] bg-[#161616]/60 p-4 backdrop-blur-md transition-transform duration-300 hover:scale-105"
          >
            <Icon
              className={`mx-auto mb-2 h-6 w-6 text-orange-500 ${iconClass} `}
            />
            <p className="gradient-text text-2xl font-bold md:text-3xl">
              {value}
            </p>
            <p className="text-sm text-neutral-400">{label}</p>
          </div>
        ))}
      </div>
    </>
  )
}
