import type { Metadata } from 'next'
import { PageLayout } from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'はいる | hiki co.',
  description: '家から出たくない人向け',
}

export default function JoinPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">はいる</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">家から出たくない人向け</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Who can join */}
            <div className="animate-fade-in-up stagger-1">
              <h2 className="text-xl font-light text-foreground mb-4">こんな人</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">家から出たくない</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">嫌なことして働きたくない</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">でも稼ぎたい</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">なんとなく</h4>
                </div>
              </div>
            </div>

            {/* What you can do */}
            <div className="animate-fade-in-up stagger-2">
              <h2 className="text-xl font-light text-foreground mb-4">できること</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">コード書く</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">文章書く</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">デザインする</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">特になくても</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-10 animate-fade-in-up stagger-3">
            <h2 className="text-xl font-light text-foreground mb-4">知っておいてほしいこと</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="hiki-card-interactive group">
                <div className="text-sm text-foreground mb-1 group-hover:text-primary transition-colors">会社じゃない</div>
                <div className="text-xs text-muted-foreground">雇用関係なし。上下関係なし。指示もしない。</div>
              </div>
              <div className="hiki-card-interactive group">
                <div className="text-sm text-foreground mb-1 group-hover:text-primary transition-colors">好きにやっていい</div>
                <div className="text-xs text-muted-foreground">個人事業主でも法人でも。やり方は自由。</div>
              </div>
              <div className="hiki-card-interactive group">
                <div className="text-sm text-foreground mb-1 group-hover:text-primary transition-colors">開業届出すと自営業</div>
                <div className="text-xs text-muted-foreground">無料。無職から自営業になれる。肩書きほしければ。</div>
              </div>
              <div className="hiki-card-interactive group">
                <div className="text-sm text-foreground mb-1 group-hover:text-primary transition-colors">やめるのも自由</div>
                <div className="text-xs text-muted-foreground">理由聞かない。自営業はそのまま続けられる。</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up stagger-4">
            <h2 className="text-xl font-light text-foreground mb-4">たまり場</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://discord.gg/mcYFM3zWZh"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 transition-all hover:scale-[1.01]"
                style={{ boxShadow: '0 0 20px rgba(184, 224, 210, 0.2)' }}
              >
                <div className="p-3 rounded-lg mb-3" style={{ background: 'var(--pastel-mint)', border: '1px solid rgba(107, 158, 142, 0.2)' }}>
                  <div className="text-sm flex items-center gap-2" style={{ color: '#4a6b5e' }}>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#6b9e8e' }}></span>
                    Discord
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">雑談とか。仕事の話もたまに。</p>
              </a>
              <a
                href="https://github.com/hiki-co"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 transition-all hover:scale-[1.01]"
                style={{ boxShadow: '0 0 20px rgba(212, 196, 224, 0.2)' }}
              >
                <div className="p-3 rounded-lg mb-3" style={{ background: 'var(--pastel-lavender)', border: '1px solid rgba(155, 138, 168, 0.2)' }}>
                  <div className="text-sm flex items-center gap-2" style={{ color: '#5c5466' }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: '#9b8aa8' }}></span>
                    GitHub
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">コード書く人向け。</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
