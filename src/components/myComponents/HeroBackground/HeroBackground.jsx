export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl" />
    </>
  )
}
