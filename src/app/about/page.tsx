import { PageLayout } from '@/components/PageLayout'

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light text-muted-foreground mb-4">About</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">家から出ないで稼ぐための緩い集まり</p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* What is hiki co. */}
            <section className="hiki-card">
              <h2 className="text-xl font-light text-muted-foreground mb-4">hiki co.とは</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  基本家から出ない人たちが集まって、ゆるく仕事して、ゆるく稼ぐ。
                  個人事業主やマイクロ法人持ってる人の緩い連合体。
                </p>
                <p>
                  「ひきこもり」って言葉は重いかもしれないけど、ここではもっとカジュアルに使ってる。
                  理由は問わない。病気でも、性格でも、単に外が嫌いでも。
                  家から出ない生活をしてる人、それでいい。
                </p>
              </div>
            </section>

            {/* What we are not */}
            <section className="hiki-card">
              <h2 className="text-xl font-light text-muted-foreground mb-4">やらないこと</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  就労支援とかじゃない。「社会復帰」とか言わない。
                  家から出ることを目標にしない。
                </p>
                <p>
                  家から出ないまま生きていくための仕組みを、なんとなく作る。
                  それだけ。
                </p>
              </div>
            </section>

            {/* Future Vision */}
            <section className="hiki-card">
              <h2 className="text-xl font-light text-muted-foreground mb-4">いつかやりたいこと</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  衣食住と心をサブカル的にゆるく提供できたらいいな、くらいの温度感。
                </p>
                <p>
                  オンラインから始めて、いつかリアルな拠点も。
                  古着屋、カフェ、シェアハウス、自助会、勉強会。
                  社会不適合者でも最低限生きていける仕組み。胡散臭いけど本気。
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-xl font-light text-muted-foreground mb-6">FAQ</h2>
              <div className="space-y-3">
                <div className="hiki-card">
                  <div className="text-sm text-muted-foreground mb-1">Q. hiki co.って何？</div>
                  <div className="text-xs text-muted-foreground">A. 家から出ない人たちの緩い集まり。個人事業主とかマイクロ法人とか。</div>
                </div>
                <div className="hiki-card">
                  <div className="text-sm text-muted-foreground mb-1">Q. ガチのひきこもりじゃないとダメ？</div>
                  <div className="text-xs text-muted-foreground">A. 別に。基本家にいる人ならOK。理由は聞かない。</div>
                </div>
                <div className="hiki-card">
                  <div className="text-sm text-muted-foreground mb-1">Q. 本当に稼げるの？</div>
                  <div className="text-xs text-muted-foreground">A. まだわからない。でもやってみる。</div>
                </div>
                <div className="hiki-card">
                  <div className="text-sm text-muted-foreground mb-1">Q. 会社なの？</div>
                  <div className="text-xs text-muted-foreground">A. 今は個人事業主1人。将来的にマイクロ法人化するかも。</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
