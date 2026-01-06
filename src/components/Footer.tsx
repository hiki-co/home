import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-muted-foreground text-sm">
          <div>
            <Link href="/" className="mb-1 block hover:opacity-80 transition-opacity">
              hiki co.
            </Link>
            <div className="text-xs">家から出ないけど、生きていく</div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-xs">
            <Link href="/about" className="hover:opacity-80 transition-opacity">これなに</Link>
            <Link href="/activity" className="hover:opacity-80 transition-opacity">やりたいこと</Link>
            <Link href="/vision" className="hover:opacity-80 transition-opacity">かんがえ</Link>
            <Link href="/join" className="hover:opacity-80 transition-opacity">はいる</Link>
          </div>
        </div>
        <div className="mt-8 text-xs text-muted-foreground/60 text-center">
          © 2026 hiki co. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
