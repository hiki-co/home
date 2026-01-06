import { PageLayout } from '@/components/PageLayout'

export default function JoinPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light text-muted-foreground mb-4">Join</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">参加したい人へ</p>
          </div>

          {/* Who can join */}
          <div className="mb-12">
            <h2 className="text-xl font-light text-muted-foreground mb-6">こんな人</h2>

            <div className="hiki-card">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/50">→</span>
                  <span>家から出ない生活してる人。理由は問わない。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/50">→</span>
                  <span>個人事業主やマイクロ法人でなんかやりたい人。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/50">→</span>
                  <span>仲間欲しいけど外出はしたくない人。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/50">→</span>
                  <span>ゆるく稼ぎたい人。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/50">→</span>
                  <span>なんとなく興味ある人。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What you can do */}
          <div className="mb-12">
            <h2 className="text-xl font-light text-muted-foreground mb-6">できること</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="hiki-card">
                <h4 className="text-sm text-muted-foreground mb-2">コード書ける人</h4>
                <p className="text-xs text-muted-foreground">ウェブ制作、自動化とか。</p>
              </div>
              <div className="hiki-card">
                <h4 className="text-sm text-muted-foreground mb-2">書ける人</h4>
                <p className="text-xs text-muted-foreground">Zine記事、ブログ、翻訳とか。</p>
              </div>
              <div className="hiki-card">
                <h4 className="text-sm text-muted-foreground mb-2">作れる人</h4>
                <p className="text-xs text-muted-foreground">デザイン、イラスト、動画とか。</p>
              </div>
              <div className="hiki-card">
                <h4 className="text-sm text-muted-foreground mb-2">話せる人</h4>
                <p className="text-xs text-muted-foreground">相談、メンタリング、配信とか。</p>
              </div>
              <div className="hiki-card">
                <h4 className="text-sm text-muted-foreground mb-2">売れる人</h4>
                <p className="text-xs text-muted-foreground">せどり、ハンドメイド、仕入れとか。</p>
              </div>
              <div className="hiki-card">
                <h4 className="text-sm text-muted-foreground mb-2">特になくても</h4>
                <p className="text-xs text-muted-foreground">話し相手とか、アイデア出すだけでも。</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-xl font-light text-muted-foreground mb-6">連絡先</h2>

            <div className="hiki-card">
              <div className="p-4 bg-muted/20 rounded-lg mb-4">
                <div className="text-sm text-muted-foreground">Slack準備中</div>
              </div>
              <p className="text-xs text-muted-foreground">
                まだ準備中。もうちょっと待って。
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-light text-muted-foreground mb-6">よくある質問</h2>

            <div className="space-y-3">
              <div className="hiki-card">
                <div className="text-sm text-muted-foreground mb-1">Q. お金かかる？</div>
                <div className="text-xs text-muted-foreground">A. 今のところ無料。将来的には知らない。</div>
              </div>
              <div className="hiki-card">
                <div className="text-sm text-muted-foreground mb-1">Q. 毎日何かしないとダメ？</div>
                <div className="text-xs text-muted-foreground">A. 別に。やりたい時だけやればいい。</div>
              </div>
              <div className="hiki-card">
                <div className="text-sm text-muted-foreground mb-1">Q. 顔出し必要？</div>
                <div className="text-xs text-muted-foreground">A. 不要。アイコンでもアバターでも。</div>
              </div>
              <div className="hiki-card">
                <div className="text-sm text-muted-foreground mb-1">Q. どうやって参加するの？</div>
                <div className="text-xs text-muted-foreground">A. Slack作る予定。それまで待って。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
