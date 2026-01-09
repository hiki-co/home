import type { Metadata } from 'next'
import { PageLayout } from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'これなに | hiki co.',
  description: '家から出たくない人たちの集まり',
}

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">これなに</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">家から出たくない人たちの集まり</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* What is hiki co. */}
            <div className="glass rounded-2xl p-6 animate-fade-in-up stagger-1">
              <h2 className="text-xl font-light text-foreground mb-4">hiki co.とは</h2>
              <p className="text-muted-foreground">
                家から出たくない人たちが集まって、家から出ないで稼ぐ方法を探す。
                嫌なことして働くくらいなら、自分らでなんかやる。
              </p>
            </div>

            {/* Stance */}
            <div className="hiki-card-interactive animate-fade-in-up stagger-2">
              <h2 className="text-xl font-light text-foreground mb-4">スタンス</h2>
              <p className="text-muted-foreground">
                就労支援とかじゃない。福祉でもない。
                なんか別の経済圏つくれないかなっていう実験。
              </p>
            </div>

            {/* Structure */}
            <div className="hiki-card-interactive animate-fade-in-up stagger-3">
              <h2 className="text-xl font-light text-foreground mb-4">組織形態</h2>
              <p className="text-muted-foreground">
                会社じゃない。雇用関係なし。上下関係もなし。
                やりたい人がやりたいことをやる。それだけ。
              </p>
            </div>

            {/* Future Vision */}
            <div className="glass rounded-2xl p-6 glow animate-fade-in-up stagger-4">
              <h2 className="text-xl font-light text-foreground mb-4 gradient-text">目指すところ</h2>
              <p className="text-muted-foreground">
                家から出ないで生きていける状態。
              </p>
            </div>
          </div>

          {/* How to earn */}
          <div className="mt-6 animate-fade-in-up stagger-5">
            <h2 className="text-xl font-light text-foreground mb-4">なんでいけると思うか</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">いつでも空いてる</h4>
                <p className="text-xs text-muted-foreground">深夜も早朝も平日昼間も</p>
              </div>
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">集中できる</h4>
                <p className="text-xs text-muted-foreground">社会生活のノイズがない</p>
              </div>
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">匿名でいい</h4>
                <p className="text-xs text-muted-foreground">顔も声も名前も出さなくていい</p>
              </div>
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">金かからない</h4>
                <p className="text-xs text-muted-foreground">通勤もオフィスも要らない</p>
              </div>
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">外から見える</h4>
                <p className="text-xs text-muted-foreground">中にいると見えないものがある</p>
              </div>
              <div className="hiki-card-interactive">
                <h4 className="text-sm text-foreground font-medium mb-1">少額で回る</h4>
                <p className="text-xs text-muted-foreground">生活コスト低いから</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
