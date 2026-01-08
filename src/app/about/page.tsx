import { PageLayout } from '@/components/PageLayout'

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">これなに</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">家から出ないで稼ぐための緩い集まり</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* What is hiki co. */}
            <div className="glass rounded-2xl p-6 animate-fade-in-up stagger-1">
              <h2 className="text-xl font-light text-foreground mb-4">hiki co.とは</h2>
              <p className="text-muted-foreground">
                家から出ない人たちが集まって、ゆるく仕事して、ゆるく稼ぐ。
                「ひきこもり」をカジュアルに。理由は問わない。
              </p>
            </div>

            {/* What we are not */}
            <div className="hiki-card-interactive animate-fade-in-up stagger-2">
              <h2 className="text-xl font-light text-foreground mb-4">スタンス</h2>
              <p className="text-muted-foreground">
                就労支援じゃない。外出を目標にしない。
                家から出ないまま生きていく仕組みを作る。
              </p>
            </div>

            {/* Structure */}
            <div className="hiki-card-interactive animate-fade-in-up stagger-3">
              <h2 className="text-xl font-light text-foreground mb-4">組織形態</h2>
              <p className="text-muted-foreground">
                個人事業主の緩い連合体。いつか合同会社になるかもしれない。
                できる人ができることをやる。やれる範囲で。
              </p>
            </div>

            {/* Future Vision */}
            <div className="glass rounded-2xl p-6 glow animate-fade-in-up stagger-4">
              <h2 className="text-xl font-light text-foreground mb-4 gradient-text">いつかやりたいこと</h2>
              <p className="text-muted-foreground">
                衣食住と心をゆるく提供する。古着屋、カフェ、シェアハウス、居場所。
                まあ、そのうち。
              </p>
            </div>
          </div>

          {/* How to earn */}
          <div className="mt-6 animate-fade-in-up stagger-5">
            <h2 className="text-xl font-light text-foreground mb-4">稼ぎ方の構造</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">時間のズレ</h4>
                <p className="text-xs text-muted-foreground">深夜も早朝も平日昼間も空いてる</p>
              </div>
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">集中の深さ</h4>
                <p className="text-xs text-muted-foreground">社会生活のノイズがない</p>
              </div>
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">匿名でいい</h4>
                <p className="text-xs text-muted-foreground">顔も声も名前も要らない経済圏</p>
              </div>
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">中間コスト零</h4>
                <p className="text-xs text-muted-foreground">通勤もオフィスも会議室も無い</p>
              </div>
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">周縁の視点</h4>
                <p className="text-xs text-muted-foreground">中心にいると見えないものが見える</p>
              </div>
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">低い固定費</h4>
                <p className="text-xs text-muted-foreground">生活コストが低いから少額でも回る</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
