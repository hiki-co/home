import { PageLayout } from '@/components/PageLayout'

export default function VisionPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light text-muted-foreground mb-4">Vision</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">理念。大層なことは言わない。</p>
          </div>

          {/* Core Values */}
          <div className="mb-12">
            <h2 className="text-xl font-light text-muted-foreground mb-6">大事にしてること</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                <h4 className="text-lg text-muted-foreground mb-3">無理しない</h4>
                <p className="text-sm text-muted-foreground">
                  やりたくない日はやらない。調子いい日だけやる。
                  ノルマとか締め切りとか、できるだけ作らない。
                </p>
              </div>
              <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                <h4 className="text-lg text-muted-foreground mb-3">できることをやる</h4>
                <p className="text-sm text-muted-foreground">
                  コード書ける人は書く。書けない人は別のことやる。
                  できないことは無理してやらない。
                </p>
              </div>
              <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                <h4 className="text-lg text-muted-foreground mb-3">家から出ない</h4>
                <p className="text-sm text-muted-foreground">
                  全部オンライン。顔出しも任意。パジャマでいい。
                  外に出ることを目標にしない。
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mb-12">
            <h2 className="text-xl font-light text-muted-foreground mb-6">考え方</h2>

            <div className="space-y-6">
              <div className="hiki-card">
                <h3 className="text-lg text-muted-foreground mb-3">「ひきこもり」をカジュアルに</h3>
                <p className="text-sm text-muted-foreground">
                  「ひきこもり」って言葉は重いイメージがあるかもしれない。
                  でもここではもっとカジュアルに使う。
                  病気でも、性格でも、単に外が嫌いでも。理由は問わない。
                  家から出ない生活をしてる人、それだけ。
                </p>
              </div>

              <div className="hiki-card">
                <h3 className="text-lg text-muted-foreground mb-3">社会復帰じゃない</h3>
                <p className="text-sm text-muted-foreground">
                  就労支援とかじゃない。「社会復帰」とか言わない。
                  家から出ることを目標にしない。
                  家から出ないまま生きていける仕組みを作る。
                </p>
              </div>

              <div className="hiki-card">
                <h3 className="text-lg text-muted-foreground mb-3">最低限の生活インフラ</h3>
                <p className="text-sm text-muted-foreground">
                  衣食住と心。生きるための最低限。
                  社会不適合者でも最低限生きていける仕組み。
                  ベーシックインカム的な発想。
                  胡散臭いけど本気。
                </p>
              </div>

              <div className="hiki-card">
                <h3 className="text-lg text-muted-foreground mb-3">ゆるい連帯</h3>
                <p className="text-sm text-muted-foreground">
                  組織じゃない。会社でもない。
                  個人事業主やマイクロ法人の緩い連合体。
                  できる人ができることをやる。
                  強制はしない。
                </p>
              </div>
            </div>
          </div>

          {/* What we don't do */}
          <div>
            <h2 className="text-xl font-light text-muted-foreground mb-6">やらないこと</h2>

            <div className="hiki-card">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>・ 外に出ることを目標にする</li>
                <li>・ 「社会復帰」とか言う</li>
                <li>・ ノルマとか締め切りとか作る</li>
                <li>・ 顔出しを強制する</li>
                <li>・ 理由を聞く</li>
                <li>・ 頑張れとか言う</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
