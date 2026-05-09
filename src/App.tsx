/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Youtube, Music2, Play, Disc3 } from "lucide-react";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="min-h-screen bg-nero text-ghost font-sans relative flex flex-col selection:bg-gold selection:text-black">
      {/* Background Atmosphere */}
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

      {/* Styled Overlay for Grain/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-50"></div>

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-8 md:px-16 py-8 backdrop-blur-sm bg-nero/30 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-gold tracking-[0.3em] text-sm font-semibold cursor-pointer"
          onClick={() => { setActiveTab("Home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          OFFICIAL ARCHIVE
        </motion.div>
        <div className="hidden md:flex gap-12 text-[11px] tracking-[0.2em] text-stardust font-medium uppercase">
          {["Home", "Music", "Profile", "Visuals", "Connect"].map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              onClick={() => {
                setActiveTab(item);
                const element = document.getElementById(item.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`hover:text-gold transition-colors relative group ${activeTab === item ? "text-gold" : ""}`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all ${activeTab === item ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 flex flex-col min-h-screen">
        {/* Main Artist Background Visual */}
        <div className="absolute inset-0 z-0 flex items-center justify-center md:justify-end overflow-hidden pointer-events-none">
          <motion.img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
            alt="MusicCHAEBOL.K"
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full w-full object-cover md:translate-x-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nero via-nero/60 md:via-nero/20 to-transparent"></div>
        </div>

        <main className="relative z-10 flex-grow grid grid-cols-1 md:grid-cols-12 px-8 md:px-16 items-center pt-32 pb-20">
          <div className="md:col-span-7 flex flex-col justify-center py-12 md:py-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gold font-serif italic text-xl md:text-2xl mb-4 tracking-wide"
            >
              세상 단 하나 뿐인 남자,
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-[100px] font-serif leading-[0.85] tracking-tighter mb-8"
            >
              Music<br/><span className="text-gold">CHAEBOL.K</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, borderLeftWidth: 0 }}
              whileInView={{ opacity: 1, borderLeftWidth: 2 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="border-l-2 border-gold pl-8 mt-4"
            >
              <p className="text-stardust text-base md:text-lg leading-relaxed max-w-md font-light">
                세포 하나하나까지 '음악인' 바로 그.
              </p>
              <motion.button 
                whileHover={{ backgroundColor: "var(--color-gold)", color: "#000" }}
                onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-10 px-10 py-4 border border-gold text-gold uppercase text-xs tracking-[0.3em] transition-all cursor-pointer"
              >
                Listen Now
              </motion.button>
            </motion.div>
          </div>

          {/* Immersive Visual Element */}
          <div className="md:col-span-5 relative h-full flex items-center justify-center min-h-[400px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1 }}
                className="relative w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-ebony border border-white/10 shadow-2xl overflow-hidden group"
              >
                {/* Atmospheric Background Visual */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-nero via-nero/40 to-transparent"></div>
                  
                  {/* Decorative Text Overlay matching the uploaded image style */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 p-6 text-center">
                    <div className="space-y-1">
                      <h4 className="text-gold font-serif text-2xl tracking-[0.2em] font-bold drop-shadow-2xl">음악재벌K</h4>
                      <p className="text-gold/80 text-[10px] tracking-[0.4em] font-medium">MusicCHAEBOL.K</p>
                    </div>
                    <div className="relative">
                      <h2 className="text-6xl md:text-7xl font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                        M.A.M
                      </h2>
                      <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                  <span className="text-[10px] tracking-[0.5em] text-gold uppercase block mb-1 font-medium bg-nero/60 backdrop-blur-md py-2 border-y border-white/5">New Release. MusicCHAEBOL.K</span>
                </div>
              </motion.div>
            
            {/* Vertical Accent Text */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90 text-[10px] tracking-[0.8em] text-stardust/30 uppercase whitespace-nowrap hidden md:block">
              A Day in the Life Aesthetic
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
                className="text-4xl md:text-6xl font-serif tracking-tight mb-4"
              >
                MusicCHAEBOL.K Official
              </motion.h2>
              <p className="text-stardust/60 text-sm md:text-base max-w-2xl font-light leading-relaxed">
                음악으로 채워진 하루를 모든 감각으로 받아들이는 한 사람의 자아를 투영하는 MusicCHAEBOL.K의 공식 아카이브입니다.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 text-stardust/50"
            >
              <div className="flex flex-col items-end">
                <span className="text-[10px] tracking-widest uppercase">Artist</span>
                <span className="text-sm text-gold">MusicCHAEBOL.K</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] tracking-widest uppercase">Release</span>
                <span className="text-sm">2026 Archive</span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Album Cover Art Display */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square bg-ebony border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden group"
              >
                  <img 
                    src="https://images.unsplash.com/photo-1514525253344-f814d0743b1a?q=80&w=1974&auto=format&fit=crop" 
                    alt="MusicCHAEBOL.K Visual" 
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
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
            </div>

            {/* Tracklist List */}
            <div className="lg:col-span-7">
              <div className="space-y-1">
                {TRACKS.map((track, i) => (
                  <motion.div
                    key={track.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ x: 10 }}
                    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-gold/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] font-mono text-stardust group-hover:text-gold transition-colors">{track.id}</span>
                      <div>
                        <h4 className={`text-sm md:text-base tracking-wide transition-colors ${track.isTitle ? "text-gold font-medium" : "text-ghost group-hover:text-gold"}`}>
                          {track.title}
                          {track.isTitle && <span className="ml-3 text-[9px] px-1 border border-gold/50 text-gold uppercase tracking-widest bg-gold/5 pt-[1px]">Title</span>}
                        </h4>
                        <span className="text-[10px] text-stardust/60 italic font-light">{track.version}</span>
                      </div>
                    </div>
                    <Play size={12} className="opacity-0 group-hover:opacity-100 text-gold transition-all" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="relative z-10 py-32 px-8 md:px-16 border-t border-white/5 bg-nero/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gold text-xs tracking-[0.4em] uppercase block mb-4"
              >
                Information
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-serif tracking-tight mb-12"
              >
                음악재벌K<br/>
                <span className="text-gold/80 flex items-center gap-4">
                  <span className="text-2xl font-sans font-light tracking-[0.2em]">MusicCHAEBOL.K</span>
                  <div className="h-[1px] w-20 bg-gold/30"></div>
                </span>
                <span className="text-2xl italic font-serif mt-2 block">PROFILE</span>
              </motion.h2>

              <div className="space-y-12">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "키", value: "178cm" },
                    { label: "몸무게", value: "75kg" },
                    { label: "출생 행성", value: "지구" },
                    { label: "자주가는 곳", value: "세븐일레븐" }
                  ].map((item, i) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="border-l border-gold/20 pl-4"
                    >
                      <span className="text-[10px] uppercase tracking-widest text-stardust/40 mb-1 block">{item.label}</span>
                      <span className="text-ghost font-medium tracking-wide">{item.value}</span>
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
                    <div className="h-[1px] w-full bg-white/5"></div>
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
                    <div className="h-[1px] w-full bg-white/5"></div>
                  </div>
                  <p className="text-stardust/80 tracking-wide font-light">무례함, 이기적인 행동</p>
                </motion.div>
              </div>
            </div>

            <div className="md:col-span-7 bg-ebony/30 border border-white/5 p-12 relative overflow-hidden group">
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
                  {[
                    "신해철", "위종수", "이영훈", 
                    "유해준", "김경호", "그리고 이세상 모든 뮤지션"
                  ].map((musician, i) => (
                    <motion.div 
                      key={musician}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold/50 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-ghost/80 group-hover/item:text-gold transition-colors tracking-wide">{musician}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Visuals Section - Refactored as Gallery */}
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
                className="text-4xl md:text-6xl font-serif tracking-tight mb-8"
              >
                Visual Identity
              </motion.h2>
              <p className="text-stardust/70 font-light leading-relaxed text-lg italic">
                "음악재벌K의 비주얼은, 하루를 살아가는 한 사람의 모습을 그대로 투영합니다. 음악으로 채워진 그 하루를 모든 감각으로 받아들이는 한 사람의 자아 그 자체로."
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-[10px] tracking-[0.8em] text-gold/20 uppercase vertical-text">
                Day in the Life
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Visuals content removed as requested */}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 flex items-center justify-center gap-8"
          >
            <div className="h-[1px] w-full bg-white/5"></div>
            <p className="text-[10px] tracking-[0.5em] text-stardust/40 uppercase whitespace-nowrap">
              The Aesthetic of Loneliness
            </p>
            <div className="h-[1px] w-full bg-white/5"></div>
          </motion.div>
        </div>
      </section>

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
              { label: "Instagram", value: "@musicchaebolk", link: "#" },
              { label: "YouTube", value: "MusicCHAEBOL.K", link: "#" },
              { label: "Management", value: "musicchaebolk@naver.com", link: "mailto:musicchaebolk@naver.com" }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="group cursor-pointer"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-stardust/40 block mb-2">{item.label}</span>
                <span className="text-gold text-lg md:text-xl font-medium group-hover:text-gold/70 transition-colors">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Decorative Bar */}
      <footer className="relative z-10 px-8 md:px-16 py-8 grid grid-cols-1 md:grid-cols-3 border-t border-white/5 items-center gap-6 md:gap-0 bg-nero">
        <div className="text-[10px] tracking-[0.2em] text-stardust text-center md:text-left">
          &copy; 2026 MusicCHAEBOL.K. ALL RIGHTS RESERVED.
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="w-12 h-[1px] bg-gold/30"></div>
          <div className="text-gold text-3xl md:text-4xl font-serif">"HearWeGO!"</div>
          <div className="w-12 h-[1px] bg-gold/30"></div>
        </div>
        <div className="flex justify-center md:justify-end gap-6 text-stardust">
          {[
            { icon: Instagram, label: "IG" },
            { icon: Youtube, label: "YT" },
            { icon: Music2, label: "SC" }
          ].map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              whileHover={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] cursor-pointer transition-colors"
            >
              <Icon size={14} className="md:hidden" />
              <span className="hidden md:block">{label}</span>
            </motion.div>
          ))}
        </div>
      </footer>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}

