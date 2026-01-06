import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { GitHubCorner } from "@/components/GitHubCorner";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <GitHubCorner />

      {/* Hero Section - Full viewport height */}
      <section className="flex-1 min-h-screen relative flex items-center justify-center px-4 md:px-8 overflow-hidden">
        {/* Background decoration - もやもやグラデーション */}
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

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/join"
              className="hiki-btn inline-flex items-center gap-2 text-base py-3 px-8"
            >
              Join
            </Link>
            <Link
              href="/about"
              className="hiki-btn-secondary inline-flex items-center gap-2 text-base py-3 px-8"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
