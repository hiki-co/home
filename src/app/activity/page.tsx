import type { Metadata } from 'next'
import { PageLayout } from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'やりたいこと | hiki co.',
  description: '家から出ないでできそうなこと',
}

export default function ActivityPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">やりたいこと</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">家から出ないでできそうなこと</p>
          </div>

          {/* Business ideas */}
          <div className="mb-10 animate-fade-in-up stagger-1">
            <h2 className="text-xl font-light text-foreground mb-6">やってみたいこと</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="hiki-card-interactive group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-foreground">レンタル○○</h3>
                  <span className="hiki-tag-peach">妄想</span>
                </div>
                <p className="text-sm text-muted-foreground">Cal.comで予約管理。場所を持つ人の手伝い。自分は家から出ない。</p>
              </div>

              <div className="hiki-card-interactive group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-foreground">通販</h3>
                  <span className="hiki-tag-sky">妄想</span>
                </div>
                <p className="text-sm text-muted-foreground">Medusaで自前EC。Shopifyの手数料を払わない。ハンドメイド、デジタル素材、なんでも。</p>
              </div>

              <div className="hiki-card-interactive group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-foreground">メディア</h3>
                  <span className="hiki-tag-mint">妄想</span>
                </div>
                <p className="text-sm text-muted-foreground">Ghostで自前メディア。暇だからできる情報収集。既存メディアがやらない隙間を埋める。</p>
              </div>

              <div className="hiki-card-interactive group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-foreground">制作</h3>
                  <span className="hiki-tag">妄想</span>
                </div>
                <p className="text-sm text-muted-foreground">Web制作、サイト改修。やりたい人が個人で受ける。案件は共有。</p>
              </div>
            </div>
          </div>

          {/* How we think about earning */}
          <div className="animate-fade-in-up stagger-2">
            <h2 className="text-xl font-light text-foreground mb-6">稼ぎ方の考え方</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-sm text-foreground mb-1 font-medium">自分の商品持つ</h4>
                <p className="text-xs text-muted-foreground">人に頼まれてやるの疲れる</p>
              </div>
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-sm text-foreground mb-1 font-medium">小さく始める</h4>
                <p className="text-xs text-muted-foreground">月1万でもいい</p>
              </div>
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-sm text-foreground mb-1 font-medium">積み上げる</h4>
                <p className="text-xs text-muted-foreground">急がない</p>
              </div>
              <div className="hiki-card-interactive border-l-2 border-l-primary/40">
                <h4 className="text-sm text-foreground mb-1 font-medium">シェアする</h4>
                <p className="text-xs text-muted-foreground">独り占めしない</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
