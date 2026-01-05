import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Full viewport height */}
      <section className="flex-1 min-h-screen relative flex items-center justify-center px-4 md:px-8 overflow-hidden">
        {/* Background decoration - yamidao風もやもやグラデーション */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* 上部からの楕円グラデーション */}
          <div className="hero-gradient-top absolute inset-0"></div>
          {/* 下部からのグラデーション */}
          <div className="hero-gradient-bottom absolute inset-0"></div>
          {/* 動くもやもや */}
          <div className="bg-blur-circle absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20"></div>
          <div className="bg-blur-circle absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/25"></div>
          <div className="bg-blur-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-accent/15"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Icon & Title */}
          <div className="mb-8 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Image
                src="/icon.png"
                alt="hiki co."
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-muted-foreground leading-tight tracking-wide">
              hiki co.
            </h1>
            <p className="text-base text-muted-foreground">
              家から出ないけど、稼ぐ
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
            <a href="#about" className="hover:text-muted-foreground transition-colors duration-500">→ 紹介</a>
            <a href="#vision" className="hover:text-muted-foreground transition-colors duration-500">→ 理念</a>
            <a href="#activities" className="hover:text-muted-foreground transition-colors duration-500">→ 活動</a>
            <a href="#join" className="hover:text-muted-foreground transition-colors duration-500">→ 参加</a>
          </div>
        </div>
      </section>

      {/* Roadmap Section - 妄想 */}
      <section className="py-12 px-4 md:px-8 bg-muted/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-lg font-light text-muted-foreground mb-1">ロードマップ（妄想）</h2>
            <p className="text-xs text-muted-foreground">実現するかは知らない</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
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
                  <div className="text-sm text-muted-foreground">Discord作って仲間集める（かも）</div>
                </div>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-border border-2 border-background"></div>
                <div className="hiki-card py-3 px-4 opacity-60">
                  <div className="text-xs text-muted-foreground mb-1">Phase 2</div>
                  <div className="text-sm text-muted-foreground">なんか作って売る（たぶん）</div>
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
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-light text-muted-foreground mb-2">About</h2>
            <div className="section-divider mb-4"></div>
            <p className="text-muted-foreground">家から出ないで稼ぐための緩い集まり</p>
          </div>

          <div className="hiki-card">
            <p className="text-muted-foreground leading-relaxed mb-4">
              基本家から出ない人たちが集まって、ゆるく仕事して、ゆるく稼ぐ。
              個人事業主やマイクロ法人持ってる人の緩い連合体。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              就労支援とかじゃない。
              家から出ないまま生きていくための仕組みを、なんとなく作る。
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-16 px-4 md:px-8 bg-muted/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-light text-muted-foreground mb-2">理念</h2>
            <div className="section-divider mb-4"></div>
            <p className="text-muted-foreground">大層なことは言わない</p>
          </div>

          <div className="rounded-xl border border-border/50 overflow-hidden">
            <div className="p-4 bg-card/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                  <h4 className="text-sm text-muted-foreground mb-2">無理しない</h4>
                  <p className="text-xs text-muted-foreground">やりたくない日はやらない。調子いい日だけやる。</p>
                </div>
                <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                  <h4 className="text-sm text-muted-foreground mb-2">できることをやる</h4>
                  <p className="text-xs text-muted-foreground">コード書ける人は書く。書けない人は別のことやる。</p>
                </div>
                <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                  <h4 className="text-sm text-muted-foreground mb-2">家から出ない</h4>
                  <p className="text-xs text-muted-foreground">全部オンライン。顔出しも任意。パジャマでいい。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-light text-muted-foreground mb-2">やってること</h2>
            <div className="section-divider mb-4"></div>
            <p className="text-muted-foreground">ざっくり説明</p>
          </div>

          <div className="rounded-xl border border-border/50 overflow-hidden">
            <div className="p-4 bg-card/30">
              <div className="space-y-3">
                <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                  <h4 className="text-sm text-muted-foreground mb-2">ECサイト運営</h4>
                  <p className="text-xs text-muted-foreground">Medusaでネットショップ。せどりとか変なもの売る。何売るかまだ決まってない。</p>
                </div>
                <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                  <h4 className="text-sm text-muted-foreground mb-2">Zine発行</h4>
                  <p className="text-xs text-muted-foreground">Ghostでウェブマガジン。ひきこもりの視点から書く。有料コンテンツもやるかも。</p>
                </div>
                <div className="hiki-card border-l-2 border-l-muted-foreground/30">
                  <h4 className="text-sm text-muted-foreground mb-2">予約販売</h4>
                  <p className="text-xs text-muted-foreground">Cal.comで相談・メンタリング。レンタルひきこもり的なやつ。需要あるか知らない。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 px-4 md:px-8 bg-muted/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-light text-muted-foreground mb-2">参加したい人へ</h2>
            <div className="section-divider mb-4"></div>
          </div>

          <div className="hiki-card">
            <div className="text-muted-foreground space-y-2 mb-6 text-sm">
              <p>家から出ない生活してる人。理由は問わない。</p>
              <p>個人事業主やマイクロ法人でなんかやりたい人。</p>
              <p>仲間欲しいけど外出はしたくない人。</p>
            </div>

            <div className="p-4 bg-muted/20 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">連絡先</div>
              <div className="text-sm text-muted-foreground">Discord準備中</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-light text-muted-foreground mb-2">FAQ</h2>
            <div className="section-divider mb-4"></div>
            <p className="text-muted-foreground">よくある質問（想定）</p>
          </div>

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
            <div className="hiki-card">
              <div className="text-sm text-muted-foreground mb-1">Q. どうやって参加するの？</div>
              <div className="text-xs text-muted-foreground">A. Discord作る予定。それまで待って。</div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16 px-4 md:px-8 bg-muted/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-light text-muted-foreground mb-2">更新履歴</h2>
            <div className="section-divider mb-4"></div>
          </div>

          <div className="text-sm">
            <div className="flex gap-4">
              <div className="text-muted-foreground w-24 shrink-0 font-mono">2025.12.31</div>
              <div className="text-muted-foreground">サイト作った（適当に）</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-muted-foreground text-sm">
            <div>
              <div className="mb-1">hiki co.</div>
              <div className="text-xs">家から出ないけど、生きていく</div>
            </div>
            <div className="text-xs">
              © 2025 (たぶん)
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
