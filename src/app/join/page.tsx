import { PageLayout } from '@/components/PageLayout'

export default function JoinPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-light text-muted-foreground mb-4">はいる</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">参加したい人へ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Who can join */}
            <div className="animate-fade-in-up stagger-1">
              <h2 className="text-xl font-light text-muted-foreground mb-4">こんな人</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">家から出ない</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">ゆるく稼ぎたい</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">仲間欲しい</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">暇してる</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">スキルある</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">なんとなく</h4>
                </div>
              </div>
            </div>

            {/* What you can do */}
            <div className="animate-fade-in-up stagger-2">
              <h2 className="text-xl font-light text-muted-foreground mb-4">できること</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">コード書く</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">文章書く</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">デザインする</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">何か売る</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">話し相手</h4>
                </div>
                <div className="hiki-card-interactive">
                  <h4 className="text-sm text-muted-foreground gradient-text font-medium">特になくても</h4>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-10 animate-fade-in-up stagger-3">
            <h2 className="text-xl font-light text-muted-foreground mb-4">よくある質問</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="hiki-card-interactive group">
                <div className="text-sm text-muted-foreground mb-1 group-hover:text-primary transition-colors">Q. お金かかる？</div>
                <div className="text-xs text-muted-foreground">A. 今のところ無料。</div>
              </div>
              <div className="hiki-card-interactive group">
                <div className="text-sm text-muted-foreground mb-1 group-hover:text-primary transition-colors">Q. 毎日何かしないとダメ？</div>
                <div className="text-xs text-muted-foreground">A. 別に。やりたい時だけ。</div>
              </div>
              <div className="hiki-card-interactive group">
                <div className="text-sm text-muted-foreground mb-1 group-hover:text-primary transition-colors">Q. 顔出し必要？</div>
                <div className="text-xs text-muted-foreground">A. 不要。アイコンでもアバターでも。</div>
              </div>
              <div className="hiki-card-interactive group">
                <div className="text-sm text-muted-foreground mb-1 group-hover:text-primary transition-colors">Q. どうやって参加するの？</div>
                <div className="text-xs text-muted-foreground">A. Discord作る予定。それまで待って。</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up stagger-4">
            <h2 className="text-xl font-light text-muted-foreground mb-4">たまり場</h2>
            <div className="glass rounded-2xl p-6" style={{ boxShadow: '0 0 30px rgba(184, 224, 210, 0.3)' }}>
              <div className="p-4 rounded-lg mb-3" style={{ background: 'var(--pastel-mint)', border: '1px solid rgba(107, 158, 142, 0.2)' }}>
                <div className="text-sm flex items-center gap-2" style={{ color: '#4a6b5e' }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#6b9e8e' }}></span>
                  Discord準備中
                </div>
              </div>
              <p className="text-sm text-muted-foreground">入っても入らなくてもいい。</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
