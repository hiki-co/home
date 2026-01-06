import { PageLayout } from '@/components/PageLayout'

export default function VisionPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-light text-muted-foreground mb-4">Vision</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">理念。大層なことは言わない。</p>
          </div>

          {/* Core Values */}
          <div className="mb-10 animate-fade-in-up stagger-1">
            <h2 className="text-xl font-light text-muted-foreground mb-6">大事にしてること</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-lg text-muted-foreground mb-2 gradient-text">無理しない</h4>
                <p className="text-sm text-muted-foreground">やりたくない日はやらない。ノルマも締め切りも作らない。</p>
              </div>
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-lg text-muted-foreground mb-2 gradient-text">できることをやる</h4>
                <p className="text-sm text-muted-foreground">できる人ができることをやる。できないことはやらない。</p>
              </div>
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-lg text-muted-foreground mb-2 gradient-text">家から出ない</h4>
                <p className="text-sm text-muted-foreground">全部オンライン。顔出しも任意。外出を目標にしない。</p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mb-10 animate-fade-in-up stagger-2">
            <h2 className="text-xl font-light text-muted-foreground mb-6">考え方</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="hiki-card-interactive group">
                <h3 className="text-base text-muted-foreground mb-2 group-hover:text-primary transition-colors">最低限の生活インフラ</h3>
                <p className="text-sm text-muted-foreground">衣食住と心。ベーシックインカム的な発想。</p>
              </div>

              <div className="hiki-card-interactive group">
                <h3 className="text-base text-muted-foreground mb-2 group-hover:text-primary transition-colors">ゆるい連帯</h3>
                <p className="text-sm text-muted-foreground">組織じゃない。緩い連合体。強制はしない。</p>
              </div>
            </div>
          </div>

          {/* What we don't do */}
          <div className="mb-10 animate-fade-in-up stagger-3">
            <h2 className="text-xl font-light text-muted-foreground mb-4">やらないこと</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="hiki-card-interactive">
                <p className="text-sm text-muted-foreground">外出を目標にする</p>
              </div>
              <div className="hiki-card-interactive">
                <p className="text-sm text-muted-foreground">「社会復帰」と言う</p>
              </div>
              <div className="hiki-card-interactive">
                <p className="text-sm text-muted-foreground">ノルマを作る</p>
              </div>
              <div className="hiki-card-interactive">
                <p className="text-sm text-muted-foreground">顔出しを強制する</p>
              </div>
              <div className="hiki-card-interactive">
                <p className="text-sm text-muted-foreground">理由を聞く</p>
              </div>
              <div className="hiki-card-interactive">
                <p className="text-sm text-muted-foreground">励ます</p>
              </div>
            </div>
          </div>

          {/* Goal */}
          <div className="animate-fade-in-up stagger-4">
            <div className="glass rounded-2xl p-6 glow">
              <h2 className="text-xl font-light text-muted-foreground mb-4 gradient-text">目指すもの</h2>
              <p className="text-muted-foreground">
                衣食住と心。家から出ないまま生きていける仕組み。
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
