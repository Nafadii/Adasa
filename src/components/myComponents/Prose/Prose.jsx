import React from "react"
import postData from "../../../Data/posts.json"
import { Camera } from "lucide-react"

export default function BlogContent({ content }) {
  if (!content) return null

  const sections = content.split("\n\n## ")
  const introText = sections[0]
  const bodySections = sections.slice(1)

  return (
    <div dir="rtl">
      {introText && (
        <p className="mb-8 text-lg leading-relaxed text-neutral-300">
          {introText.trim()}
        </p>
      )}

      {bodySections.map((sec, index) => {
        const [title, ...paragraphLines] = sec.split("\n\n")
        const paragraphText = paragraphLines.join("\n\n")
        const sectionId = `section-${index}`

        return (
          <div key={index} className="mb-10">
            <h2
              id={sectionId}
              className="mb-4 flex scroll-mt-24 items-center gap-3 text-2xl font-bold text-white md:text-3xl"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                <Camera className="h-5 w-5 text-orange-500" />
              </span>
              {title.trim()}
            </h2>

            <p className="text-lg leading-relaxed text-neutral-300">
              {paragraphText.trim()}
            </p>
          </div>
        )
      })}
    </div>
  )
}
