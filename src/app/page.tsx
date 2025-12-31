export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-medium text-gray-900">hiki co.</h1>
            <p className="text-xs text-gray-500">オンラインギークハウス（仮）</p>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-gray-900">紹介</a>
            <a href="#vision" className="hover:text-gray-900">理念</a>
            <a href="#join" className="hover:text-gray-900">参加</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        {/* Hero */}
        <section>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
              家から出ないけど、稼ぐ
            </h2>

            <div className="space-y-3 text-gray-600">
              <p>ひきこもり当事者が集まって、ゆるく仕事して、ゆるく稼ぐ。</p>
              <p>社会復帰とか目指してない。このままで生きていく。</p>
            </div>

            <div className="pt-4 space-y-2 text-sm">
              <div><a href="#about" className="text-gray-900 hover:underline">→ hiki co.とは</a></div>
              <div><a href="#vision" className="text-gray-900 hover:underline">→ 理念</a></div>
              <div><a href="#join" className="text-gray-900 hover:underline">→ 参加したい</a></div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-gray-200 pt-16">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-normal text-gray-900">1</div>
              <div className="text-xs text-gray-500 mt-1">運営メンバー</div>
            </div>
            <div>
              <div className="text-3xl font-normal text-gray-900">0</div>
              <div className="text-xs text-gray-500 mt-1">プロジェクト進行中</div>
            </div>
            <div>
              <div className="text-3xl font-normal text-gray-900">¥0</div>
              <div className="text-xs text-gray-500 mt-1">総収益（今のところ）</div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-gray-200 pt-16 space-y-12">
          <div>
            <h3 className="text-2xl font-normal text-gray-900 mb-2">hiki co.とは</h3>
            <p className="text-sm text-gray-500">ひきこもり当事者による運営団体</p>
          </div>

          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              ひきこもり当事者が集まって、ゆるく仕事して、ゆるく稼ぐための運営団体。
              個人事業主やマイクロ法人を持つ人たちの緩い連合体。
            </p>
            <p>
              就労支援とかじゃない。社会復帰を目指すわけでもない。
              このままの状態で生きていくための仕組みを作る。
            </p>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="border-t border-gray-200 pt-16 space-y-12">
          <div>
            <h3 className="text-2xl font-normal text-gray-900 mb-2">理念</h3>
            <p className="text-sm text-gray-500">大層なことは言わない</p>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">無理しない</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                やりたくない日はやらない。調子いい日だけやる。完璧主義は捨てた。
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">できることをやる</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                コード書ける人は書く。書けない人は別のことやる。得意なことだけやる。
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">家から出ない</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                全部オンライン。会議もチャット。顔出しも任意。パジャマでいい。
              </p>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section id="activities" className="border-t border-gray-200 pt-16 space-y-12">
          <div>
            <h3 className="text-2xl font-normal text-gray-900 mb-2">やってること</h3>
            <p className="text-sm text-gray-500">ざっくり説明</p>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">案件の共同受注</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Web制作、アプリ開発、ライティングなど。やりたい人が手を挙げて分担する。
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">プロダクト開発</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                SaaSとか、ツールとか。失敗前提。成功したらラッキー。
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">スキルシェア</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                得意なことを時間単位で売る。需要あるかは知らない。
              </p>
            </div>
          </div>
        </section>

        {/* Join */}
        <section id="join" className="border-t border-gray-200 pt-16 space-y-6">
          <div>
            <h3 className="text-2xl font-normal text-gray-900 mb-2">参加したい人へ</h3>
          </div>

          <div className="space-y-4 text-sm text-gray-600">
            <p>ひきこもり当事者、元当事者、予備軍。</p>
            <p>個人事業主として何すればいいかわからない人。</p>
            <p>マイクロ法人持ってるけど仲間欲しい人。</p>
          </div>

          <div className="bg-gray-100 p-4 text-sm">
            <div className="text-gray-500 mb-1">連絡先</div>
            <div className="text-gray-600">Discord準備中</div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-gray-200 pt-16 space-y-8">
          <h3 className="text-2xl font-normal text-gray-900">よくある質問（想定）</h3>

          <div className="space-y-6 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-gray-900">Q. hiki co.って何？</div>
              <div className="text-gray-600">A. ひきこもり当事者が運営する団体。緩い連合体。</div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900">Q. 本当に稼げるの？</div>
              <div className="text-gray-600">A. まだわからない。でもやってみる。</div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900">Q. 会社なの？</div>
              <div className="text-gray-600">A. 今は個人事業主1人。将来的に法人化するかも。</div>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900">Q. どうやって参加するの？</div>
              <div className="text-gray-600">A. Discord作る予定。それまで待って。</div>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="border-t border-gray-200 pt-16 space-y-6">
          <h3 className="text-2xl font-normal text-gray-900">更新履歴</h3>

          <div className="space-y-4 text-sm">
            <div className="flex gap-4">
              <div className="text-gray-500 w-24 shrink-0">2025.12.31</div>
              <div className="text-gray-600">サイト作った（適当に）</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <div>
              <div className="font-medium text-gray-700 mb-1">hiki co.</div>
              <div>家から出ないけど、生きていく</div>
            </div>
            <div>© 2025 (たぶん)</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
