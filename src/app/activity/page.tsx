import { PageLayout } from '@/components/PageLayout'

export default function ActivityPage() {
  return (
    <PageLayout>
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light text-muted-foreground mb-4">Activity</h1>
            <div className="section-divider mb-4"></div>
            <p className="text-lg text-muted-foreground">やってること・やりたいこと</p>
          </div>

          {/* Current Activities */}
          <div className="mb-12">
            <h2 className="text-xl font-light text-muted-foreground mb-6">今やってること</h2>
            <p className="text-sm text-muted-foreground mb-6">できることから、ゆるく</p>

            <div className="space-y-4">
              <div className="hiki-card">
                <h3 className="text-lg text-muted-foreground mb-2">通販</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  ネットショップで何か売る。古着とか変なものとか。まだ何売るか決まってない。
                </p>
                <div className="text-xs text-muted-foreground/60">
                  Medusaでオープンソースのショップ構築予定。家から出なくても仕入れから発送までできる仕組みを考え中。
                </div>
              </div>

              <div className="hiki-card">
                <h3 className="text-lg text-muted-foreground mb-2">Zine</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  ウェブマガジン的なやつ。ひきこもりの視点から書く。
                </p>
                <div className="text-xs text-muted-foreground/60">
                  Ghostでウェブマガジン。日常のこと、考えてること、レビューとか。有料コンテンツもやるかも。
                </div>
              </div>

              <div className="hiki-card">
                <h3 className="text-lg text-muted-foreground mb-2">OSS</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  オープンソース開発。家から出なくてもコードは書ける。
                </p>
                <div className="text-xs text-muted-foreground/60">
                  GitHubでオープンソース開発。ひきこもりでも貢献できる。コード書ける人は書く、書けない人はドキュメントとか翻訳とか。
                </div>
              </div>

              <div className="hiki-card">
                <h3 className="text-lg text-muted-foreground mb-2">相談</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  レンタルひきこもり的なやつ。需要あるか知らない。
                </p>
                <div className="text-xs text-muted-foreground/60">
                  Cal.comで予約受付。話し相手とか、ひきこもり生活のコツとか、IT相談とか。有料にするかは検討中。
                </div>
              </div>
            </div>
          </div>

          {/* Future Plans */}
          <div className="mb-12">
            <h2 className="text-xl font-light text-muted-foreground mb-6">将来やりたいこと</h2>
            <p className="text-sm text-muted-foreground mb-6">妄想段階。実現するかは知らない。</p>

            <div className="rounded-xl border border-border/50 overflow-hidden">
              <div className="p-6 bg-card/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                    <h4 className="text-sm text-muted-foreground mb-2">衣</h4>
                    <p className="text-xs text-muted-foreground">古着屋とか。安くてちょっといい服。リアル店舗もやりたい。</p>
                  </div>
                  <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                    <h4 className="text-sm text-muted-foreground mb-2">食</h4>
                    <p className="text-xs text-muted-foreground">カフェとかシーシャとかCBDとか。脳を調律しながらイベントもできるスペース。</p>
                  </div>
                  <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                    <h4 className="text-sm text-muted-foreground mb-2">住</h4>
                    <p className="text-xs text-muted-foreground">シェアハウスとか。最低限の住居を安く。ひきこもりでも住める場所。</p>
                  </div>
                  <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                    <h4 className="text-sm text-muted-foreground mb-2">心</h4>
                    <p className="text-xs text-muted-foreground">自助会とか勉強会とか。ゆるい繋がりと居場所。ITで繋ぐ。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/10 rounded-lg">
              <p className="text-xs text-muted-foreground">
                社会不適合者でも最低限生きていける仕組み。ベーシックインカム的な生活インフラ。
                胡散臭いけど本気。オンラインから始めて、いつかリアルな拠点も。
              </p>
            </div>
          </div>

          {/* Roadmap */}
          <div>
            <h2 className="text-xl font-light text-muted-foreground mb-6">ロードマップ（妄想）</h2>
            <p className="text-sm text-muted-foreground mb-6">実現するかは知らない</p>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50"></div>

              <div className="space-y-4">
                <div className="relative pl-10">
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-muted-foreground/30 border-2 border-background"></div>
                  <div className="hiki-card py-3 px-4">
                    <div className="text-xs text-muted-foreground mb-1">Phase 0</div>
                    <div className="text-sm text-muted-foreground">ホームページ作った ← 今ここ</div>
                  </div>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-border border-2 border-background"></div>
                  <div className="hiki-card py-3 px-4 opacity-80">
                    <div className="text-xs text-muted-foreground mb-1">Phase 1</div>
                    <div className="text-sm text-muted-foreground">Slackで仲間集める（かも）</div>
                  </div>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-border border-2 border-background"></div>
                  <div className="hiki-card py-3 px-4 opacity-60">
                    <div className="text-xs text-muted-foreground mb-1">Phase 2</div>
                    <div className="text-sm text-muted-foreground">オンラインでなんか売る（たぶん）</div>
                  </div>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-border border-2 border-background"></div>
                  <div className="hiki-card py-3 px-4 opacity-40">
                    <div className="text-xs text-muted-foreground mb-1">Phase ???</div>
                    <div className="text-sm text-muted-foreground">ひきこもりでも生きていける</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
