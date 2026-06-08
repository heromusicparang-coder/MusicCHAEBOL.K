/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Instagram, Youtube, Music2, Play, Disc3, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState } from "react";

const GALLERY_IMAGES = [
  {
    src: "/visuals1.png",
    title: "The Golden Beginning",
    category: "Archive 01",
    description: "음악재벌K의 찬란한 시작과 고결한 감성을 담은 첫 번째 비주얼 아카이브."
  },
  {
    src: "/visuals2.png",
    title: "Enigmatic Harmony",
    category: "Archive 02",
    description: "선율과 조명이 하나로 만나는 순간 포착된 아티스트의 예술적 교감."
  },
  {
    src: "/visuals3.png",
    title: "Midnight Melody",
    category: "Archive 03",
    description: "적막한 밤을 채우는 따뜻한 음색 아래 드리운 깊고 멜랑콜리한 실루엣."
  },
  {
    src: "/visuals4.png",
    title: "Acoustic Sentiment",
    category: "Archive 04",
    description: "어쿠스틱 선율 뒤에 숨겨진 깊고 서정적인 음악재벌K의 내면 세계."
  },
  {
    src: "/visuals5.png",
    title: "Resonant Echoes",
    category: "Archive 05",
    description: "공간을 가득 메우는 맑고 웅장한 울림의 한 순간을 정밀하게 기록한 컷."
  },
  {
    src: "/visuals6.png",
    title: "Vocal Elegance",
    category: "Archive 06",
    description: "호흡 끝에 담긴 아련함과 찰나의 절제미가 빚어낸 순수 초상."
  },
  {
    src: "/visuals7.png",
    title: "Warm Spotlight",
    category: "Archive 07",
    description: "따스한 스포트라이트 조명이 만들어내는 매혹적이고 아늑한 골든 프레임."
  },
  {
    src: "/visuals8.png",
    title: "Silent Reflection",
    category: "Archive 08",
    description: "음악적 고뇌 속에서 발견하는 진실된 자아와 고요한 감성의 깊이."
  },
  {
    src: "/visuals9.png",
    title: "Newtro Waves",
    category: "Archive 09",
    description: "현대적 감성과 레트로 무드가 완벽히 교차하는 독창적인 그래픽 아카이브."
  },
  {
    src: "/visuals11.png",
    title: "Eternal Stardust",
    category: "Archive 11",
    description: "우주의 성좌처럼 영글어가는 음악에 대한 집념과 영원히 빛날 열정."
  },
  {
    src: "/visuals13.png",
    title: "The Inner Composer",
    category: "Archive 13",
    description: "악상과 연주가 깊이 동기화되며 드러내는 세밀한 음악재벌K 본연의 아우라."
  },
  {
    src: "/visuals14.png",
    title: "Symphonic Spectrum",
    category: "Archive 14",
    description: "풍부한 공감각적 컬러 베리에이션으로 완성하는 독창적인 시네마틱 프레임."
  },
  {
    src: "/visuals15.png",
    title: "MusicCHAEBOL Iconic",
    category: "Archive 15",
    description: "가장 영광스럽고 특별한 기품과 왕실의 아우라가 깃든 음악재벌K 시그니처 마스터피스."
  }
];

const TRACKS = [
  { id: "01", title: "엄마야", version: "Guitar Ver.", isTitle: true },
  { id: "02", title: "애연", version: "Guitar Ver." },
  { id: "03", title: "사랑이란", version: "Guitar Ver." },
  { id: "04", title: "멈춰서 기다리지 않네, 사랑은", version: "NEWTRO ver." },
  { id: "05", title: "추억아 사랑아", version: "NEWTRO ver." },
  { id: "06", title: "만연", version: "MOON ver." },
  { id: "07", title: "내 마음에 비", version: "Rainy ver." },
  { id: "08", title: "오빠를 잊어다오 2.0", version: "MOON ver.", isTitle: true },
  { id: "09", title: "세월이 흘러도", version: "NEWTRO ver." },
  { id: "10", title: "하늘이 운다", version: "Rainy ver." },
  { id: "11", title: "불러봅니다.", version: "MOON ver." },
  { id: "12", title: "행복하세요.", version: "NEWTRO ver." },
  { id: "13", title: "오빠를 잊어다오", version: "XIS EDM ver." },
  { id: "14", title: "이별을 꼭 쥔 채", version: "GRAND ver." },
  { id: "15", title: "세월이 흘러도", version: "4중주 ver." }
];

export default function App() {
  const [activeTab, setActiveTab ] = useState("Home");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const HOME_VIDEOS = ["/homemovie.mp4"];

  const handleVideoEnded = () => {
    if (HOME_VIDEOS.length > 1) {
      setCurrentVideoIndex((prev) => (prev + 1) % HOME_VIDEOS.length);
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-nero text-ghost font-sans relative flex flex-col selection:bg-gold selection:text-black">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
          className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-ebony rounded-full blur-[80px]"
        />
      </div>

      {/* Carbon overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-50" />

      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-8 md:px-16 py-8 backdrop-blur-sm bg-nero/30 border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-gold tracking-[0.3em] text-sm font-semibold cursor-pointer notranslate"
          translate="no"
          onClick={() => {
            setActiveTab("Home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          MusicCHAEBOL.K ARCHIVE
        </motion.div>
        <div className="hidden md:flex gap-12 text-[11px] tracking-[0.2em] text-stardust font-medium uppercase">
          {["Home", "Music", "Profile", "Visuals", "Connect"].map((tab, idx) => (
            <motion.button
              key={tab}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              onClick={() => handleScrollToSection(tab)}
              className={`hover:text-gold transition-colors relative group ${activeTab === tab ? "text-gold" : ""}`}
            >
              <span className="notranslate" translate="no">{tab}</span>
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all ${activeTab === tab ? "w-full" : "w-0 group-hover:w-full"}`} />
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Hero Home Section */}
      <section id="home" className="relative flex flex-col min-h-screen justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            key={HOME_VIDEOS[currentVideoIndex]}
            autoPlay
            muted
            playsInline
            loop={HOME_VIDEOS.length === 1}
            onEnded={handleVideoEnded}
            className="absolute inset-0 w-full h-full object-contain"
          >
            <source src={HOME_VIDEOS[currentVideoIndex]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 backdrop-blur-[2px]" />
        </div>

        <main className="relative z-10 px-8 md:px-16 pt-24 md:pt-32 pb-12 md:pb-20 max-w-4xl mx-auto w-full text-center">
          <div className="flex flex-col items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gold font-serif italic text-sm md:text-lg mb-4 tracking-wide notranslate"
              translate="no"
            >
              -HearWeGo!-
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-[100px] font-serif leading-[0.85] tracking-tighter mb-8 md:mb-10 notranslate"
              translate="no"
            >
              Music
              <br />
              <span className="text-gold">CHAEBOL.K</span>
            </motion.h1>

            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 0.5, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-[1px] w-16 md:w-24 bg-gold mb-6 md:mb-8 origin-center"
              />
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-stardust text-sm md:text-base leading-relaxed max-w-md font-light mb-4"
              >
                세포 하나하나까지 '음악인' 바로 그.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mb-6 md:mb-10 notranslate"
                translate="no"
              >
                <h4 className="text-gold/60 font-serif text-2xl md:text-[80px] leading-tight tracking-[0.2em]">
                  음악재벌K
                </h4>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.8 }}
                whileHover={{ backgroundColor: "var(--color-gold)", color: "#000", scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollToSection("Music")}
                className="px-10 py-4 md:px-12 md:py-5 border border-gold text-gold uppercase text-[8px] md:text-[10px] tracking-[0.4em] transition-all cursor-pointer bg-gold/5 backdrop-blur-sm"
              >
                Listen Now
              </motion.button>

              <div className="mt-12 md:mt-20 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  className="flex flex-col items-center notranslate"
                  translate="no"
                >
                  <span className="text-[8px] md:text-[10px] tracking-[0.8em] text-gold/40 uppercase mb-3 md:mb-4 font-medium">
                    New Release.
                  </span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="sparkle-text text-xl md:text-4xl font-black tracking-[0.2em] md:tracking-[0.3em] uppercase italic leading-none"
                  >
                    M.A.M
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Music Section */}
      <section id="music" className="relative z-10 py-32 px-8 md:px-16 border-t border-white/5 bg-nero">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gold text-xs tracking-[0.4em] uppercase block mb-4"
              >
                1st. Full Album
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-serif tracking-tight mb-4 notranslate"
                translate="no"
              >
                MusicCHAEBOL.K Official
              </motion.h2>
              <p className="text-stardust/60 text-sm md:text-base max-w-2xl font-light leading-relaxed">
                음악으로 채워진 하루를 모든 감각으로 받아들이는 한 사람의 자아를 투영하는 {" "}
                <span className="notranslate" translate="no">MusicCHAEBOL.K</span>의 공식 아카이브입니다.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 text-stardust/50"
            >
              <div className="flex flex-col items-end notranslate" translate="no">
                <span className="text-[10px] tracking-widest uppercase">Artist</span>
                <span className="text-sm text-gold notranslate" translate="no">MusicCHAEBOL.K</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col items-end">
                <span className="text-[10px] tracking-widest uppercase">Release</span>
                <span className="text-sm">2026 Archive</span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square bg-[#E5E5E5] border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden group mb-8"
              >
                <img
                  src="/smallJaket1.png"
                  alt="MusicCHAEBOL.K Visual"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-black/80 z-10" />
                <Disc3 className="w-32 h-32 text-gold/40 animate-spin-slow relative z-20" />
                <div className="absolute bottom-8 left-8 right-8 z-30">
                  <div className="h-[1px] w-full bg-white/10 mb-6" />
                  <div className="flex justify-between items-center text-stardust">
                    <span className="text-[10px] tracking-[0.3em] uppercase">Noir Sentiment</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase">Vol. 01</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-8 bg-gold/50" />
                  <h3 className="notranslate text-gold text-[10px] tracking-[0.4em] uppercase font-bold text-center" translate="no">
                    MUSIC / ALBUM INTRODUCTION
                  </h3>
                  <div className="h-[1px] w-8 bg-gold/50" />
                </div>
                <div className="space-y-4 text-stardust/80 text-sm leading-relaxed font-light italic text-center px-4">
                  <p className="text-gold/90 font-medium not-italic mb-6 notranslate" translate="no">
                    ‘음악재벌K 1st. M.A.M'
                  </p>
                  <p>
                    엄마.
                    <br />
                    당신의 아들로 태어나 마이크를 쥐고 
                    <br />
                    정성껏 담았습니다. 
                    <br />
                    이야기를, 소리를, 삶을.
                  </p>
                  <p>
                    여러분께 닿을 순간까지 아름답기만을 바랐습니다.
                    <br />
                    팔 벌려 안아줄 반가운 사람처럼, 지금 들리는 소리에 담은 정성을 마음껏 누려주시옵소서.
                  </p>
                  <p className="text-xs pt-4 border-t border-white/5 text-stardust/90">
                    * 혼자만의 속삭임이 기타리스트 '이완희' 군을 만나, 어우러지고, 멋들어지고, 생기가 더 해졌습니다.
                  </p>
                  <p className="text-xs text-stardust/90">
                    ARTSTAGE Audio의 '천호성' 프로듀서님의 손길이 닿아 조화롭게 완성되었습니다.
                    <br />
                    살며시 내려앉은 겨울 새벽의 눈처럼, 녹아든 Yunnia (윤니아), 오고은, 두 분의 화음들로 더욱 풍성할 수 있었습니다.
                  </p>
                  <p className="pt-6">
                    이 앨범에 담긴 소리들이 닿은 
                    <br />
                    모든 분들게 축복이 가득하길 바라며,
                    <br />
                    다음 앨범에서는 더욱 더 정성 담은 소리로
                    <br />
                    인사드리겠습니다.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold">TRACK LIST</span>
                  <div className="h-[1px] flex-grow bg-white/5" />
                </div>
                <div className="space-y-1">
                  {TRACKS.map((track, idx) => (
                    <motion.div
                      key={track.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * idx }}
                      whileHover={{ x: 10 }}
                      className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-gold/30 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-[10px] font-mono text-stardust group-hover:text-gold transition-colors">
                          {track.id}
                        </span>
                        <div>
                          <h4 className={`text-sm md:text-base tracking-wide transition-colors ${track.isTitle ? "text-gold font-medium" : "text-ghost group-hover:text-gold"}`}>
                            {track.title}
                            {track.isTitle && (
                              <span className="ml-3 text-[9px] px-1 border border-gold/50 text-gold uppercase tracking-widest bg-gold/5 pt-[1px]">
                                Title
                              </span>
                            )}
                          </h4>
                          <span className="text-[10px] text-gold/80 italic font-normal tracking-wider">
                            {track.version}
                          </span>
                        </div>
                      </div>
                      <Play size={12} className="opacity-0 group-hover:opacity-100 text-gold transition-all" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Credits Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-ebony/40 p-8 md:p-12 border border-white/5 max-w-6xl mx-auto w-full"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold">CREDITS</span>
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
              {[
                { label: "작사, 작곡", value: <span className="notranslate" translate="no">음악재벌K (MusicCHAEBOL.K)</span> },
                { label: "편곡", value: <span className="notranslate" translate="no">이완희 & 음악재벌K (MusicCHAEBOL.K), DJXIS</span> },
                { label: "TRACKING & SOUND DESIGN", value: <span className="notranslate" translate="no">음악재벌K (MusicCHAEBOL.K) & 이완희</span> },
                { label: "GUITAR", value: "이완희" },
                { label: "VOCAL", value: <span className="notranslate" translate="no">음악재벌K (MusicCHAEBOL.K)</span> },
                { label: "RECORDING", value: <span className="notranslate" translate="no">음악재벌K (MusicCHAEBOL.K)</span> },
                { label: "MIXING & MASTERING", value: "ARTSTAGE Audio 천호성" },
                { label: "CHORUS", value: "Yunnia (윤니아), 오고은" },
                { label: "ALBUM ART WORK", value: "Jung jin hee" },
                { label: "THANKS TO", value: "first of all 'YOU'" },
                { label: "VERY ~ SPECIAL THANKS TO", value: "세상의 모든 울 엄마들", className: "sm:col-span-2 lg:col-span-2" }
              ].map((credit, idx) => (
                <div key={credit.label} className={`space-y-2 ${credit.className || ""}`}>
                  <span className="text-[10px] uppercase tracking-widest text-gold/70 block border-b border-gold/20 pb-1">
                    {credit.label}
                  </span>
                  <span className="text-stardust/90 text-sm font-light tracking-wide block">
                    {credit.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="relative z-10 py-32 px-8 md:px-16 border-t border-white/5 bg-nero/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-6">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gold text-xs tracking-[0.4em] uppercase block mb-4"
              >
                Information
              </motion.span>
              <div className="mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-serif tracking-tight mb-2"
                >
                  음악재벌K
                  <br />
                  <span className="text-gold/80 flex items-center gap-4 notranslate" translate="no">
                    <span className="text-xl sm:text-2xl font-sans font-light tracking-[0.2em] notranslate" translate="no">
                      MusicCHAEBOL.K
                    </span>
                  </span>
                </motion.h2>
                <span className="text-gold text-xs tracking-[0.4em] uppercase block">PROFILE</span>
              </div>

              {/* Profile Image Trigger */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={() => setIsProfileModalOpen(true)}
                className="w-full h-auto aspect-[3/4] md:aspect-[2/3] bg-ebony/40 rounded-xl overflow-hidden border border-gold/30 hover:border-gold/60 shadow-2xl relative group mb-10 transition-all duration-500 cursor-zoom-in"
              >
                <img
                  src="/profile.png"
                  alt="MusicCHAEBOL.K Profile Portrait"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/chaebol_profile.png";
                  }}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-6 right-6 bg-black/70 text-gold text-xs tracking-wider px-4 py-2 rounded-full border border-gold/35 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn size={14} className="animate-pulse" />
                  <span className="font-light">확대보기</span>
                </div>
              </motion.div>

              <div className="space-y-12">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "키", value: "178cm" },
                    { label: "몸무게", value: "75kg" },
                    { label: "출생 행성", value: "지구" },
                    { label: "자주가는 곳", value: "세븐일레븐" }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="border-l border-gold/20 pl-4"
                    >
                      <span className="text-[10px] uppercase tracking-widest text-stardust/40 mb-1 block">
                        {item.label}
                      </span>
                      <span className="text-ghost font-medium tracking-wide">
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-gold shrink-0">Likes</span>
                    <div className="h-[1px] w-full bg-white/5" />
                  </div>
                  <p className="text-stardust/80 tracking-wide font-light">망고, 고기</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-gold shrink-0">Dislikes</span>
                    <div className="h-[1px] w-full bg-white/5" />
                  </div>
                  <p className="text-stardust/80 tracking-wide font-light">무례함, 이기적인 행동</p>
                </motion.div>
              </div>
            </div>

            <div className="md:col-span-6 bg-ebony/30 border border-white/5 p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none">
                <Music2 size={300} className="text-white" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                    <Music2 size={20} />
                  </div>
                  <h3 className="text-xl font-serif tracking-[0.1em]">RESPECTED MUSICIANS</h3>
                </div>
                <p className="text-stardust/70 text-lg leading-relaxed mb-12 font-light">
                  "그들의 음악은 나의 영감이자 길이다."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                  {["신해철", "위종수", "이영훈", "유해준", "김경호", "그리고 이세상 모든 뮤지션"].map((musician, idx) => (
                    <motion.div
                      key={musician}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold/50 group-hover/item:scale-150 transition-transform" />
                      <span className="text-ghost/80 group-hover/item:text-gold transition-colors tracking-wide">
                        {musician}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identity Section (Gallery) */}
      <section id="visuals" className="relative z-10 py-32 px-8 md:px-16 border-t border-white/5 bg-nero">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gold text-xs tracking-[0.4em] uppercase block mb-4"
              >
                Gallery
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-serif tracking-tight mb-8 notranslate"
                translate="no"
              >
                Visual Identity
              </motion.h2>
              <p className="text-stardust/70 font-light leading-relaxed text-lg italic">
                "음악재벌K의 비주얼 아카이브. 음악이 흐르는 삶의 매 순간을 응축한 사진들입니다."
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-[10px] tracking-[0.8em] text-gold/20 uppercase vertical-text">
                Visual Archive
              </div>
            </div>
          </div>

          {/* Gallery Masonry Columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-6xl mx-auto space-y-8">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
                onClick={() => setSelectedImageIndex(idx)}
                className="break-inside-avoid display-inline-block w-full mb-8 bg-ebony/30 hover:bg-ebony/50 overflow-hidden border border-white/5 shadow-xl hover:shadow-2xl hover:border-gold/30 group cursor-pointer relative rounded-md transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-auto">
                  <img
                    src={img.src}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback logic
                      e.currentTarget.src = "/chaebol_profile.png";
                    }}
                    className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
                  <div className="absolute top-4 right-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2 bg-black/60 rounded-full backdrop-blur-sm">
                    <ZoomIn size={16} />
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <span className="text-gold/60 text-[9px] tracking-[0.3em] uppercase mb-2 block font-light">
                    {img.category}
                  </span>
                  <p className="text-white text-base font-serif italic tracking-wider mb-1">
                    {img.title}
                  </p>
                  <p className="text-stardust/60 text-[11px] leading-relaxed font-light line-clamp-2">
                    {img.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 flex items-center justify-center gap-8"
          >
            <div className="h-[1px] w-full bg-white/5" />
            <p className="text-[10px] tracking-[0.5em] text-stardust/40 uppercase whitespace-nowrap">
              The Aesthetic of Music
            </p>
            <div className="h-[1px] w-full bg-white/5" />
          </motion.div>
        </div>
      </section>

      {/* Gallery Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md px-4 py-8"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-stardust/80 hover:text-gold hover:scale-110 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(null);
              }}
              title="Close (ESC)"
            >
              <X size={24} />
            </motion.button>

            {/* Prev Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-stardust/80 hover:text-gold hover:scale-110 p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((idx) =>
                  idx !== null ? (idx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
                );
              }}
              title="Previous"
            >
              <ChevronLeft size={28} />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-stardust/80 hover:text-gold hover:scale-110 p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((idx) =>
                  idx !== null ? (idx + 1) % GALLERY_IMAGES.length : null
                );
              }}
              title="Next"
            >
              <ChevronRight size={28} />
            </motion.button>

            {/* Image Frame */}
            <div
              className="relative max-w-4xl max-h-[75vh] flex items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_IMAGES[selectedImageIndex].src}
                alt={GALLERY_IMAGES[selectedImageIndex].title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "/chaebol_profile.png";
                }}
                className="max-w-full max-h-[70vh] object-contain rounded border border-white/10 shadow-2xl"
              />
            </div>

            {/* Metadata overlay */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-center max-w-2xl px-6"
              onClick={(e) => e.stopPropagation()}
              key={`info-${selectedImageIndex}`}
            >
              <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-2">
                {GALLERY_IMAGES[selectedImageIndex].category}
              </span>
              <h3 className="text-2xl font-serif text-white tracking-wide mb-3">
                {GALLERY_IMAGES[selectedImageIndex].title}
              </h3>
              <p className="text-stardust/70 text-sm leading-relaxed max-w-md mx-auto font-light animate-[fadeIn_0.5s_ease-out]">
                {GALLERY_IMAGES[selectedImageIndex].description}
              </p>
              <div className="mt-4 text-[10px] tracking-[0.2em] text-white/30 uppercase">
                {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Lightbox Modal */}
      <AnimatePresence>
        {isProfileModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md px-4 py-8"
            onClick={() => setIsProfileModalOpen(false)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-stardust/80 hover:text-gold hover:scale-110 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setIsProfileModalOpen(false);
              }}
              title="Close (ESC)"
            >
              <X size={24} />
            </motion.button>

            {/* Image Frame */}
            <div
              className="relative max-w-4xl max-h-[80vh] flex items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src="/profile.png"
                alt="MusicCHAEBOL.K Dynamic Portrait"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "/chaebol_profile.png";
                }}
                className="max-w-full max-h-[75vh] object-contain rounded-xl border border-gold/40 shadow-2xl"
              />
            </div>

            {/* Metadata Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-center max-w-2xl px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-2">
                PROFILE PORTRAIT
              </span>
              <h3 className="text-2xl font-serif text-white tracking-wide mb-3">음악재벌K</h3>
              <p className="text-stardust/70 text-sm leading-relaxed max-w-md mx-auto font-light">
                음악재벌K의 공식 메인 디스플레이 프로필 사진입니다.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Connect Section */}
      <section id="connect" className="relative z-10 py-32 px-8 md:px-16 border-t border-white/5 bg-nero/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-12"
          >
            Stay Connected
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { label: "Instagram", value: "@musicchaebolk", link: "https://www.instagram.com/musicchaebolk" },
              { label: "YouTube", value: <span className="notranslate" translate="no">MusicCHAEBOL.K</span>, link: "#" },
              { label: "Management", value: "musicchaebolk@naver.com", link: "mailto:musicchaebolk@naver.com" }
            ].map((conn, idx) => (
              <motion.a
                key={conn.label}
                href={conn.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="group cursor-pointer block notranslate"
                translate="no"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-stardust/40 block mb-2">
                  {conn.label}
                </span>
                <span className="text-gold text-lg md:text-xl font-medium group-hover:text-gold/70 transition-colors">
                  {conn.value}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 md:px-16 py-8 grid grid-cols-1 md:grid-cols-3 border-t border-white/5 items-center gap-6 md:gap-0 bg-nero">
        <div className="text-[10px] tracking-[0.2em] text-stardust text-center md:text-left notranslate" translate="no">
          © 2026 MusicCHAEBOL.K. ALL RIGHTS RESERVED.
        </div>
        <div className="flex justify-center items-center gap-6 notranslate" translate="no">
          <div className="w-12 h-[1px] bg-gold/30" />
          <div className="text-gold text-3xl md:text-4xl font-serif notranslate" translate="no">
            "HearWeGo!"
          </div>
          <div className="w-12 h-[1px] bg-gold/30" />
        </div>
        <div className="flex justify-center md:justify-end gap-6 text-stardust">
          {[
            { icon: Instagram, label: "IG", url: "https://www.instagram.com/musicchaebolk" },
            { icon: Youtube, label: "YT", url: "#" },
            { icon: Music2, label: "SC", url: "#" }
          ].map(({ icon: Icon, label, url }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] cursor-pointer transition-colors"
            >
              <Icon size={14} className="md:hidden" />
              <span className="hidden md:block">{label}</span>
            </motion.a>
          ))}
        </div>
      </footer>

      {/* Global CSS animations styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .sparkle-text {
          background: linear-gradient(
            to right, 
            #b8860b 0%, 
            #ffd700 25%, 
            #ffffff 50%, 
            #ffd700 75%, 
            #b8860b 100%
          );
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: shimmer 4s linear infinite;
          filter: drop-shadow(0 0 2px rgba(212, 175, 55, 0.3));
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
