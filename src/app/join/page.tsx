import { PageLayout } from '@/components/PageLayout'

export default function JoinPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">はいる</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">参加したい人へ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Who can join */}
            <div className="animate-fade-in-up stagger-1">
              <h2 className="text-xl font-light text-foreground mb-4">こんな人</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">家から出ない</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">ゆるく稼ぎたい</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-foreground font-medium">仲間欲しい</h4>
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
            <h2 className="text-xl font-light text-foreground mb-4">はじめに</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="hiki-card-interactive group">
                <div className="text-sm text-foreground mb-1 group-hover:text-primary transition-colors">個人の集まり</div>
                <div className="text-xs text-muted-foreground">法人じゃない。雇用関係もない。</div>
              </div>
              <div className="hiki-card-interactive group">
                <div className="text-sm text-foreground mb-1 group-hover:text-primary transition-colors">稼ぎ方は自由</div>
                <div className="text-xs text-muted-foreground">各自が個人事業主として動く形。</div>
              </div>
              <div className="hiki-card-interactive group">
                <div className="text-sm text-foreground mb-1 group-hover:text-primary transition-colors">自営業になれる</div>
                <div className="text-xs text-muted-foreground">開業届出せば無料。働いてるふりができる。</div>
              </div>
              <div className="hiki-card-interactive group">
                <div className="text-sm text-foreground mb-1 group-hover:text-primary transition-colors">途中離脱OK</div>
                <div className="text-xs text-muted-foreground">抜けるのも自由。理由も聞かない。</div>
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
                <p className="text-sm text-muted-foreground">雑談とか相談とか。</p>
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
