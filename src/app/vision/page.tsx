import type { Metadata } from 'next'
import { PageLayout } from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'かんがえ | hiki co.',
  description: '家から出たくない人の生存戦略',
}

export default function VisionPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">かんがえ</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">家から出たくない人の生存戦略</p>
          </div>

          {/* Core Philosophy */}
          <div className="mb-10 animate-fade-in-up stagger-1">
            <h2 className="text-xl font-light text-foreground mb-6">根っこの考え</h2>

            <div className="glass rounded-2xl p-6 mb-6">
              <p className="text-muted-foreground">
                外に出て嫌なことして働くの無理。でも金は要る。
                じゃあ家から出ないで稼ぐ方法を自分らでつくるしかない。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-lg text-foreground mb-2">嫌なことしない</h4>
                <p className="text-sm text-muted-foreground">通勤、人間関係、無駄な会議。全部なし。自分のペースでやる。</p>
              </div>
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-lg text-foreground mb-2">仕組みをつくる</h4>
                <p className="text-sm text-muted-foreground">毎日頑張らなくても回る何かをつくりたい。</p>
              </div>
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-lg text-foreground mb-2">家から出ない</h4>
                <p className="text-sm text-muted-foreground">全部オンライン。顔出しもしなくていい。外に出るのがゴールじゃない。</p>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="mb-10 animate-fade-in-up stagger-2">
            <h2 className="text-xl font-light text-foreground mb-6">なぜ成り立つか</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="hiki-card-interactive group">
                <h3 className="text-base text-foreground mb-2 group-hover:text-primary transition-colors">金かからない</h3>
                <p className="text-sm text-muted-foreground">生活コスト低ければ、少額でも回る。月5万で生きれる人もいる。</p>
              </div>

              <div className="hiki-card-interactive group">
                <h3 className="text-base text-foreground mb-2 group-hover:text-primary transition-colors">手数料払いたくない</h3>
                <p className="text-sm text-muted-foreground">プラットフォームに抜かれるの嫌。自分でインフラ持てばいい。</p>
              </div>

              <div className="hiki-card-interactive group">
                <h3 className="text-base text-foreground mb-2 group-hover:text-primary transition-colors">急がない</h3>
                <p className="text-sm text-muted-foreground">時間はある。ゆっくり積み上げる。1年後に効いてくればいい。</p>
              </div>

              <div className="hiki-card-interactive group">
                <h3 className="text-base text-foreground mb-2 group-hover:text-primary transition-colors">AIにやらせる</h3>
                <p className="text-sm text-muted-foreground">一人でも結構できる時代。人雇わなくていい。AIと組む。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
