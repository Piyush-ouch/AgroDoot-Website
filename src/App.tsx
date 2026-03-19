import React, { useEffect, useState } from 'react';
import { Droplets, Map, MessageSquare, Users, ArrowRight, ChevronDown, Zap, Activity, TrendingDown, CheckCircle2, LayoutGrid, Sprout, Smartphone, Settings, Bug } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pestHeatmapImg from './assets/pest_heatmap.png';
import heroImg from './assets/farmer-hero.png';
import iotSensorImg from './assets/iot-sensor.png';
import logoImg from './assets/logo.png';
import teamMember1 from './assets/team-member-1.png';
import teamMember2 from './assets/team-member-2.png';
import teamMember3 from './assets/team-member-3.png';

import { translations } from './translations';
import type { Language } from './translations';

const FadeIn = ({ children, delay = 0, direction = 'up' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0, x: 0, 
      transition: { duration: 0.7, delay, ease: "easeOut" } 
    }
  };

  return (
    <motion.div ref={ref as any} initial="hidden" animate={controls as any} variants={variants as any}>
      {children}
    </motion.div>
  );
};

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = translations[lang];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी (HI)' },
    { code: 'mr', label: 'मराठी (MR)' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#021808] via-[#052912] to-[#021307] text-white font-sans overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#10b981]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#047857]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#021808]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="AgroDoot Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold tracking-tight text-white hidden sm:block">AgroDoot</span>
          </div>
          
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 shadow-sm backdrop-blur-md">
            <a href="#" className="px-6 py-2 text-sm font-medium bg-[#22c55e] text-[#021808] rounded-full">{t.navHome}</a>
            <a href="#problem" className="px-6 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-full">{t.navProblem}</a>
            <a href="#solution" className="px-6 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-full">{t.navSolution}</a>
            <a href="#features" className="px-6 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-full">{t.navFeatures}</a>
          </div>

          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-white/5 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md hover:bg-white/10 transition-colors shrink-0 outline-none"
              >
                {languages.find(l => l.code === lang)?.label}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-3 w-40 bg-[#021808]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2 z-50 flex flex-col"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as Language);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10 ${lang === l.code ? 'text-[#4ade80] bg-white/5' : 'text-white/80 hover:text-white'}`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition-colors shrink-0">{t.login}</button>
            <button className="hidden sm:block bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-md shrink-0">
              {t.signup}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Header / Hero Text */}
        <section className="pt-40 pb-16 px-6 relative max-w-[1400px] mx-auto text-center z-10">
          {/* Floating graphic elements */}
          <div className="floating-cross top-20 left-[15%] text-white/40" />
          <div className="floating-dot top-40 right-[20%] text-[#22c55e]/60" />
          <div className="floating-cross bottom-10 right-[15%] text-white/40" />
          <div className="floating-dot bottom-20 left-[25%] text-[#22c55e]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-sm font-medium mb-8 shadow-sm backdrop-blur-md text-[#4ade80]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" /> {t.heroTag}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-medium leading-[1.1] md:leading-[1.05] tracking-tight mb-8 max-w-5xl mx-auto text-white">
              {t.heroH1Part1} <br className="hidden sm:block" /> {t.heroH1Part2} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#22c55e]">{t.heroH1Highlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.heroDesc}
            </p>
            <button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#021808] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 mx-auto shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:-translate-y-1 shrink-0">
              {t.heroBtn} <ArrowRight className="w-5 h-5 shrink-0" />
            </button>
          </motion.div>
        </section>

        {/* Hero Image - Lush Greenery */}
        <section className="px-6 max-w-[1400px] mx-auto mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-[50vh] md:h-[70vh] rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/10"
          >
            <img 
              src={heroImg}
              alt="Lush vibrant green farm with farmer using tech" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021808] via-transparent to-transparent opacity-90" />
            <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-start md:items-end text-white gap-6">
              <h2 className="text-3xl md:text-5xl font-medium max-w-xl leading-tight text-white drop-shadow-lg">{t.heroSecondary}</h2>
              <div className="flex bg-white/10 backdrop-blur-md px-6 py-4 rounded-full text-sm font-medium border border-white/20 items-center justify-center gap-2 hover:bg-white/20 transition-colors cursor-pointer text-center w-full md:w-auto shrink-0">
                {t.downloadApp} <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative z-10">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/10 shadow-2xl">
              {[
                { stat: "10+", label: t.statsSmart },
                { stat: "40%", label: t.statsWater },
                { stat: "98%", label: t.statsAccuracy },
                { stat: "24/7", label: t.statsCare },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="text-center md:text-left md:pl-8 first:pl-0">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#4ade80]">{s.stat}</h3>
                    <p className="text-white/60 text-xs sm:text-sm font-medium tracking-wide uppercase">{s.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Statement Cards */}
        <section id="problem" className="py-24 max-w-[1400px] mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight text-white mb-16 text-center">
              {t.probCardsTitle}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
               { icon: Droplets, title: t.probCard1Title, desc: t.probCard1Desc, color: "text-blue-400" },
               { icon: Zap, title: t.probCard2Title, desc: t.probCard2Desc, color: "text-yellow-400" },
               { icon: Activity, title: t.probCard3Title, desc: t.probCard3Desc, color: "text-orange-400" },
               { icon: TrendingDown, title: t.probCard4Title, desc: t.probCard4Desc, color: "text-red-400" },
            ].map((card, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors h-full flex flex-col shadow-xl">
                  <div className={`bg-white/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
                    <card.icon className={`w-8 h-8 ${card.color}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-white/60 leading-relaxed flex-1">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* What Does AgroDoot Do Section */}
        <section className="py-24 px-6 relative z-10 bg-[#052912]/30 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/10 group">
                <img 
                  src={iotSensorImg} 
                  alt="Agricultural IoT sensor station in field" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021808]/80 to-transparent" />
                <div className="absolute inset-0 bg-[#22c55e]/10 mix-blend-overlay" />
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight text-white mb-10">
                {t.whatDoesTitle} <span className="text-[#4ade80] font-bold">{t.whatDoesTitleHighlight}</span> {t.whatDoesTitleEnd}
              </h2>
              <div className="space-y-6">
                {[
                  t.whatDoes1,
                  t.whatDoes2,
                  t.whatDoes3,
                  t.whatDoes4,
                  t.whatDoes5,
                  t.whatDoes6,
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-[#22c55e] shrink-0 mt-1" />
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-[#052912] to-transparent border-t border-white/5">
          <div className="max-w-[1400px] mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight text-white mb-16 text-center">
                {t.howItWorksTitle}
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 cursor-default">
              {[
                { num: "1", title: t.howStep1Title, desc: t.howStep1Desc },
                { num: "2", title: t.howStep2Title, desc: t.howStep2Desc },
                { num: "3", title: t.howStep3Title, desc: t.howStep3Desc },
                { num: "4", title: t.howStep4Title, desc: t.howStep4Desc },
              ].map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-[#052912] border border-[#22c55e]/20 rounded-[2rem] p-8 hover:bg-[#0a3f1e] hover:border-[#22c55e]/40 transition-all duration-500 h-full flex flex-col items-center text-center shadow-2xl group">
                    <div className="bg-white text-[#052912] w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:-translate-y-2 group-hover:bg-[#22c55e] group-hover:text-[#021808] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-500 relative">
                      <div className="absolute inset-0 bg-white blur-lg opacity-20 rounded-2xl group-hover:opacity-60 transition-opacity"></div>
                      <span className="relative z-10">{step.num}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-[#4ade80] transition-colors duration-300">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base flex-1">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Multi-Crop Capabilities Section */}
        <section className="py-24 px-6 relative z-10">
          <div className="absolute inset-0 bg-[#021307]/80 -z-10" />
          <div className="max-w-[1400px] mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight text-white mb-6">
                  {t.multiCropTitle}
                </h2>
                <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                  {t.multiCropSub}
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 cursor-default">
              {[
                { icon: LayoutGrid, title: t.mc1Title, desc: t.mc1Desc, color: "text-orange-400", bg: "bg-orange-400/10" },
                { icon: Droplets, title: t.mc2Title, desc: t.mc2Desc, color: "text-blue-400", bg: "bg-blue-400/10" },
                { icon: Sprout, title: t.mc3Title, desc: t.mc3Desc, color: "text-[#4ade80]", bg: "bg-[#4ade80]/10" },
                { icon: Smartphone, title: t.mc4Title, desc: t.mc4Desc, color: "text-indigo-400", bg: "bg-indigo-400/10" },
                { icon: Settings, title: t.mc5Title, desc: t.mc5Desc, color: "text-purple-400", bg: "bg-purple-400/10" },
                { icon: Bug, title: t.mc6Title, desc: t.mc6Desc, color: "text-red-400", bg: "bg-red-400/10" },
              ].map((card, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col shadow-xl group">
                    <div className={`${card.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className={`w-8 h-8 ${card.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base flex-1">{card.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Solutions Cards */}
        <section id="solution" className="py-24 px-6 relative z-10">
          <div className="absolute inset-0 bg-[#052912]/50 skew-y-[-2deg] -z-10" />
          
          <div className="max-w-[1400px] mx-auto">
            <FadeIn>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <h2 className="text-4xl md:text-5xl font-medium max-w-xl leading-tight">{t.solH2}</h2>
                <p className="text-white/60 max-w-sm mt-6 md:mt-0 text-lg">
                  {t.solDesc}
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <FadeIn delay={0.1}>
                <div className="group rounded-[2.5rem] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#22c55e]/50 hover:bg-white/10 transition-all p-3 flex flex-col h-full shadow-2xl">
                  <div className="h-[350px] rounded-[2rem] overflow-hidden relative">
                    <img src={pestHeatmapImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="1-Month Pest Heatmap" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021808]/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="bg-[#22c55e] p-3 rounded-xl text-[#021808] shrink-0">
                        <Map className="w-6 h-6 shrink-0" />
                      </div>
                      <span className="font-semibold text-xl">{t.feat1Title}</span>
                    </div>
                  </div>
                  <div className="p-8 pt-6">
                    <p className="text-white/70 leading-relaxed text-lg">
                      {t.feat1Desc}
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Feature 2 */}
              <FadeIn delay={0.2}>
                <div className="group rounded-[2.5rem] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#22c55e]/50 hover:bg-white/10 transition-all p-3 flex flex-col h-full shadow-2xl">
                  <div className="h-[350px] rounded-[2rem] overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2609&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Irrigation on green field" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021808]/90 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="bg-[#22c55e] p-3 rounded-xl text-[#021808] shrink-0">
                        <Droplets className="w-6 h-6 shrink-0" />
                      </div>
                      <span className="font-semibold text-xl">{t.feat2Title}</span>
                    </div>
                  </div>
                  <div className="p-8 pt-6">
                    <p className="text-white/70 leading-relaxed text-lg">
                      {t.feat2Desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Small Highlight Section */}
        <section id="features" className="py-24 px-6 relative z-10">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-gradient-to-r from-[#052912] to-[#0a3f1e] p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <FadeIn>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
                <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-[#4ade80] shrink-0" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-2xl md:text-4xl font-medium leading-relaxed text-center md:text-left">
                {t.whatsappFeature1} <span className="text-[#4ade80] font-bold">{t.whatsappFeatureHighlight}</span>{t.whatsappFeature2}
              </h2>
            </FadeIn>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-6 relative z-10 border-t border-white/5">
          <div className="max-w-[1000px] mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight text-white mb-8">
                  {t.pricingTitle}
                </h2>
                <div className="text-white/60 text-sm md:text-lg flex flex-wrap items-center justify-center gap-2 md:gap-4 font-medium">
                  {t.pricingSub.split('•').map((part: string, i: number, arr: any[]) => (
                    <React.Fragment key={i}>
                      <span>{part.trim()}</span>
                      {i < arr.length - 1 && <span className="text-[#22c55e] hidden sm:block">•</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto cursor-default">
              {/* Starter Kit */}
              <FadeIn delay={0.1}>
                <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 h-full flex flex-col items-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">{t.starterKit}</h3>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight">{t.starterPrice}</div>
                  <ul className="space-y-4 mb-12 w-full max-w-[280px] mx-auto flex-1">
                    {[t.sk1, t.sk2, t.sk3, t.sk4].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-white/80 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-4 rounded-full font-bold transition-all mt-auto backdrop-blur-md">
                    {t.orderNow}
                  </button>
                </div>
              </FadeIn>

              {/* Full Farm Kit */}
              <FadeIn delay={0.2}>
                <div className="bg-[#052912] border-2 border-[#22c55e]/50 rounded-[3rem] p-10 h-full flex flex-col items-center relative shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:border-[#22c55e] transition-all duration-300 md:-translate-y-4">
                  <div className="absolute -top-4 bg-[#eab308] text-[#021808] px-6 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">
                    {t.bestValue}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 mt-4">{t.fullKit}</h3>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight">{t.fullPrice}</div>
                  <ul className="space-y-4 mb-12 w-full max-w-[280px] mx-auto flex-1">
                    {[t.fk1, t.fk2, t.fk3, t.fk4, t.fk5].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-white/80 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-[#021808] py-4 rounded-full font-bold transition-all mt-auto shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                    {t.orderNow}
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="px-6 max-w-[1400px] mx-auto pb-32 relative z-10">
          <FadeIn>
            <div className="w-full rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2689&auto=format&fit=crop" 
                alt="Beautiful vast green agricultural field" 
                className="w-full h-[60vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#021808]/90 via-[#021808]/80 to-transparent flex flex-col justify-center px-6 sm:px-12 md:px-24">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium text-white mb-8 max-w-2xl leading-tight text-center md:text-left">
                  {t.ctaH2Part1} <br className="sm:hidden" /><span className="text-[#4ade80]">{t.ctaH2Highlight}</span> {t.ctaH2Part2}
                </h2>
                <div className="flex flex-col sm:flex-row w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[2rem] sm:rounded-full gap-2 mx-auto md:mx-0">
                  <input 
                    type="email" 
                    placeholder={t.emailPlaceholder} 
                    className="flex-1 bg-transparent px-6 py-3 sm:py-0 min-w-0 outline-none text-white placeholder-white/50 text-center sm:text-left"
                  />
                  <button className="bg-[#22c55e] text-[#021808] px-8 py-4 rounded-full font-bold hover:bg-[#16a34a] transition-colors w-full sm:w-auto shrink-0">
                    {t.subscribe}
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 border-t border-white/10 relative z-10 bg-[#021307]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-3xl md:text-4xl font-medium">{t.teamH2}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
              {[
                { id: 1, name: "Mahir Mulani", role: t.roleFounder, image: teamMember1 },
                { id: 2, name: "Piyush Jangade", role: t.roleCoFounder, image: teamMember2 },
                { id: 3, name: "Mayuri Patil", role: t.roleResearcher, image: teamMember3 },
              ].map((member, i) => (
                <FadeIn key={member.id} delay={i * 0.1}>
                  <div className="group text-center w-full max-w-[250px]">
                    <div className="aspect-square rounded-full bg-white/5 border border-white/10 mb-6 overflow-hidden relative mx-auto max-w-[200px] group-hover:border-[#22c55e]/50 transition-colors">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
                          <Users className="w-12 h-12 text-[#22c55e]/50" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                    <p className="text-[#4ade80] text-sm font-medium">{member.role}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#021006] border-t border-white/5 py-16 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="sm:col-span-2 md:col-span-1 md:border-r border-white/5 md:pr-8">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="AgroDoot Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold tracking-tight text-white">AgroDoot</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              {t.footerDesc}
            </p>
          </div>
          <div className="md:pl-8">
            <h4 className="font-medium text-lg mb-6 text-white/90">{t.company}</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">{t.navHome}</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">{t.aboutUs}</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">{t.products}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-6 text-white/90">{t.resources}</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">{t.blog}</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">{t.helpCenter}</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">{t.contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-6 text-white/90">{t.legal}</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">{t.privacy}</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">{t.terms}</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>© 2026 AgroDoot. {t.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium tracking-wide flex-wrap justify-center">
            <span className="hover:text-white transition-colors cursor-pointer">Twitter</span>
            <span className="hover:text-white transition-colors cursor-pointer">LinkedIn</span>
            <span className="hover:text-white transition-colors cursor-pointer">Instagram</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
