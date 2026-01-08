import { PageLayout } from '@/components/PageLayout'

export default function ActivityPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">やりたいこと</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">妄想とロードマップ</p>
          </div>

          {/* Current Activities */}
          <div className="mb-10 animate-fade-in-up stagger-1">
            <h2 className="text-xl font-light text-foreground mb-6">やりたいこと（妄想）</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="hiki-card-interactive group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-foreground">通販</h3>
                  <span className="hiki-tag-peach">準備中</span>
                </div>
                <p className="text-sm text-muted-foreground">古着とか売る。何売るかは決まってない。</p>
              </div>

              <div className="hiki-card-interactive group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-foreground">メディア</h3>
                  <span className="hiki-tag-sky">準備中</span>
                </div>
                <p className="text-sm text-muted-foreground">ブログとかマガジンとか。ひきこもり視点で。</p>
              </div>

              <div className="hiki-card-interactive group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-foreground">受注</h3>
                  <span className="hiki-tag-mint">準備中</span>
                </div>
                <p className="text-sm text-muted-foreground">制作とか管理とか。家からできる仕事。</p>
              </div>

              <div className="hiki-card-interactive group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-foreground">相談</h3>
                  <span className="hiki-tag">検討中</span>
                </div>
                <p className="text-sm text-muted-foreground">話し相手とかIT相談とか。需要あるか知らない。</p>
              </div>
            </div>
          </div>

          {/* Future Plans */}
          <div className="mb-10 animate-fade-in-up stagger-2">
            <h2 className="text-xl font-light text-foreground mb-6">作りたい場所（妄想）</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-sm text-foreground mb-1 font-medium">衣</h4>
                <p className="text-xs text-muted-foreground">古着屋とか</p>
              </div>
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-sm text-foreground mb-1 font-medium">食</h4>
                <p className="text-xs text-muted-foreground">カフェとか</p>
              </div>
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-sm text-foreground mb-1 font-medium">住</h4>
                <p className="text-xs text-muted-foreground">シェアハウスとか</p>
              </div>
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-sm text-foreground mb-1 font-medium">心</h4>
                <p className="text-xs text-muted-foreground">居場所とか</p>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="animate-fade-in-up stagger-3">
            <h2 className="text-xl font-light text-foreground mb-6">ロードマップ（妄想）</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="hiki-card-interactive">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground/60">Phase 0</span>
                  <span className="hiki-tag-mint text-xs">✓</span>
                </div>
                <p className="text-sm text-muted-foreground">ホームページ作る</p>
              </div>
              <div className="hiki-card-interactive">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground/60">Phase 1</span>
                  <span className="hiki-tag-peach text-xs">次</span>
                </div>
                <p className="text-sm text-muted-foreground">Discordで仲間募集</p>
              </div>
              <div className="hiki-card-interactive">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground/60">Phase 2</span>
                  <span className="hiki-tag text-xs">いつか</span>
                </div>
                <p className="text-sm text-muted-foreground">何か売り始める</p>
              </div>
              <div className="hiki-card-interactive">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground/60">Phase 3</span>
                  <span className="hiki-tag-sky text-xs">夢</span>
                </div>
                <p className="text-sm text-muted-foreground">衣食住心の実現</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
