import React, { useEffect, useState, useCallback } from 'react';
import { Droplets, MessageSquare, Users, ArrowRight, ChevronDown, Zap, Activity, TrendingDown, CheckCircle2, LayoutGrid, Sprout, Smartphone, Settings, Bug, Facebook, Instagram, Youtube, Linkedin, Phone, Leaf, Trophy, Award, Calendar, MapPin } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pestHeatmapImg from './assets/pest_heatmap.png';

import iotSensorImg from './assets/iot-sensor.png';
import smartIrrigationImg from './assets/smart_irrigation.png';
import multiCropImg from './assets/multi_crop.png';

import multipleFarmingImg from './assets/multiple_farming.jpg';
import reimagineFarmingImg from './assets/reimagine_farming.jpg';
import farmerAppShowcaseImg from './assets/farmer_app_showcase.png';
import waterWastageImg from './assets/water_wastage.png';
import electricityCostsImg from './assets/electricity_costs.png';
import farmVisitsImg from './assets/farm_visits.png';
import cropLossImg from './assets/crop_loss.png';
import howStep1Img from './assets/how_step1.png';
import howStep2Img from './assets/how_step2.png';
import howStep3Img from './assets/how_step3.png';
import howStep4Img from './assets/how_step4.png';
import logoImg from './assets/logo.png';
import teamMember1 from './assets/team-member-1.png';
import teamMember2 from './assets/team-member-2.png';


import indradhanuStageImg from './assets/indradhanu_stage.jpg';
import indradhanuPosterImg from './assets/indradhanu_poster.jpg';
import indradhanuCheckImg from './assets/indradhanu_check.png';

import eyantraBoothGroupImg from './assets/eyantra_booth_group.jpg';
import eyantraStageWinnersImg from './assets/eyantra_stage_winners.png';
import eyantraBoothTeamImg from './assets/eyantra_booth_team.jpg';
import eyantraAwardSlideImg from './assets/eyantra_award_slide.jpg';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);
  const t = translations[lang];

  const solutions = [
    {
      title: t.solCard1Title || "Smart Irrigation",
      desc: t.solCard1Desc || "Automate your watering schedules based on real-time soil moisture and weather data.",
      detail: t.solCard1Detail || "Farmers will get alerted whenever there is a need for irrigation and can visualize their entire farm in real-time through our app at a very low cost.",
      icon: Droplets,
      img: smartIrrigationImg,
      color: "text-blue-400"
    },
    {
      title: t.solCard2Title || "Pest Prediction",
      desc: t.solCard2Desc || "Identify early signs of pest infestations and diseases using AI and localized heatmaps.",
      detail: t.solCard2Detail || "Farmers will receive predictive heatmaps of potential diseases or pest outbreaks 15-20 days in advance. This subscription-based service ensures healthy crops, prevents crop damage, and reduces treatment costs.",
      icon: Bug,
      img: pestHeatmapImg,
      color: "text-red-400"
    },
    {
      title: t.solCard3Title || "Multi-Crop Automation",
      desc: t.solCard3Desc || "Manage diverse crop zones seamlessly from a single dashboard with tailored automation.",
      detail: t.solCard3Detail || "Farmers can grow multiple crops in a single field with tailored zone-wise automation, optimizing resource usage to maximize productivity and overall profit.",
      icon: LayoutGrid,
      img: multiCropImg,
      color: "text-[#4ade80]"
    }
  ];

  const [activeAchievement, setActiveAchievement] = useState<'indradhanu' | 'eyantra'>('indradhanu');
  const [activeImg, setActiveImg] = useState(0);

  const indradhanuImages = [
    indradhanuStageImg,
    indradhanuPosterImg,
    indradhanuCheckImg
  ];

  const eyantraImages = [
    eyantraAwardSlideImg,
    eyantraStageWinnersImg,
    eyantraBoothTeamImg,
    eyantraBoothGroupImg
  ];

  const achievementImages = activeAchievement === 'indradhanu' ? indradhanuImages : eyantraImages;

  const nextImg = () => {
    setActiveImg((prev) => (prev + 1) % achievementImages.length);
  };
  const prevImg = () => {
    setActiveImg((prev) => (prev - 1 + achievementImages.length) % achievementImages.length);
  };

  const handleSwitchAchievement = (ach: 'indradhanu' | 'eyantra') => {
    setActiveAchievement(ach);
    setActiveImg(0);
  };

  const SLIDE_INTERVAL = 5000;
  const TOTAL_SLIDES = 3;

  const slides = [
    {
      tag: t.heroSlide1Tag,
      h1Line1: t.heroSlide1H1Line1,
      h1Line2: t.heroSlide1H1Line2,
      desc: t.heroSlide1Desc,
      images: [reimagineFarmingImg],
    },
    {
      tag: t.heroSlide2Tag,
      h1Line1: t.heroSlide2H1Line1,
      h1Line2: t.heroSlide2H1Line2,
      desc: t.heroSlide2Desc,
      images: [pestHeatmapImg],
    },
    {
      tag: t.heroSlide3Tag,
      h1Line1: t.heroSlide3H1Line1,
      h1Line2: t.heroSlide3H1Line2,
      desc: t.heroSlide3Desc,
      images: [multipleFarmingImg],
    },
  ];

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setSlideKey(prev => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % TOTAL_SLIDES);
      setSlideKey(prev => prev + 1);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

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
            <a href="#achievements" className="px-6 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-full">{t.navAchievements}</a>
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

          </div>
        </div>
      </nav>

      <main>
        {/* ==================== HERO CAROUSEL ==================== */}
        <section className="hero-carousel pt-20 relative z-10">
          {/* Decorative grid lines */}
          <div className="hero-grid-lines" />

          {/* Social Sidebar */}
          <div className="social-sidebar">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-text-${currentSlide}-${slideKey}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6 md:gap-8"
              >
                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span className="text-[#4ade80] text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
                    {slides[currentSlide].tag}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight text-white"
                >
                  {slides[currentSlide].h1Line1}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22c55e] to-[#16a34a]">
                    {slides[currentSlide].h1Line2}
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="text-base md:text-lg text-white/60 max-w-lg leading-relaxed"
                >
                  {slides[currentSlide].desc}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-wrap items-center gap-4 mt-2"
                >
                  <a 
                    href="https://wa.me/918010764435?text=Hello%20AgroDoot!%20I%20have%20an%20enquiry." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-[#021808] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:-translate-y-1"
                  >
                    {t.heroCta1} <Phone className="w-4 h-4" />
                  </a>
                  <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all hover:-translate-y-1">
                    {t.heroCta2}
                  </button>
                </motion.div>

                {/* Progress Dots */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="slide-dots mt-4"
                >
                  {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                    <button
                      key={`dot-${i}-${slideKey}-${i === currentSlide}`}
                      className={`slide-dot ${i === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Right - Image Collage / Single Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-images-${currentSlide}-${slideKey}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={slides[currentSlide].images.length === 1 ? "hidden md:block w-full h-[500px] rounded-[3rem] overflow-hidden relative border border-white/10 shadow-2xl" : "hero-collage hidden md:grid"}
              >
                {slides[currentSlide].images.length === 1 ? (
                  <>
                    <motion.img
                      src={slides[currentSlide].images[0]}
                      alt="AgroDoot showcase"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021808]/40 to-transparent pointer-events-none" />
                  </>
                ) : (
                  slides[currentSlide].images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.85, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                      className={`collage-item collage-item-${idx + 1}`}
                    >
                      <img src={img} alt={`AgroDoot showcase ${idx + 1}`} />
                    </motion.div>
                  ))
                )}
              </motion.div>
            </AnimatePresence>

            {/* Mobile: single hero image */}
            <div className="md:hidden w-full h-[300px] rounded-[2rem] overflow-hidden relative border border-white/10 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`mobile-hero-${currentSlide}-${slideKey}`}
                  src={slides[currentSlide].images[0]}
                  alt="AgroDoot showcase"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#021808]/60 to-transparent" />
            </div>
          </div>
        </section>


        {/* About AgroDoot Section */}
        <section className="relative z-10 py-12 md:py-0 border-b border-white/10">
          <div className="flex flex-col md:flex-row">
            {/* Left Image */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex items-center justify-center">
              <img 
                src={farmerAppShowcaseImg} 
                alt="Farmer using AgroDoot app" 
                className="w-full h-auto max-h-[600px] object-cover rounded-[2rem] shadow-2xl border border-white/10" 
              />
            </div>
            
            {/* Right Content */}
            <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                A Future-Ready Farm All From Your Phone
              </h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                AgroDoot empowers Indian farmers with affordable, solar-powered irrigation automation, fertigation automation, blending traditional wisdom with modern technology. Designed to be rugged, simple and modular, it fits into existing setups without disruption.
              </p>
              
              <div className="space-y-8 mb-12">
                {/* Feature 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#22c55e]/30 flex items-center justify-center bg-[#22c55e]/10">
                    <Sprout className="w-6 h-6 text-[#4ade80]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Agriculture automation</h3>
                    <p className="text-white/70 leading-relaxed">Step into smart farming with automation. No guesswork, no water waste, only smart agriculture solutions</p>
                  </div>
                </div>
                
                {/* Feature 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#22c55e]/30 flex items-center justify-center bg-[#22c55e]/10">
                    <LayoutGrid className="w-6 h-6 text-[#4ade80]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Landscape automation</h3>
                    <p className="text-white/70 leading-relaxed">Manage landscapes in an eco-friendly and efficient way while taking complete control through automation</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#021808] px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)] flex items-center gap-2 w-fit">
                  More About <Leaf className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Banner */}
        <div className="scrolling-banner-container">
          <div className="scrolling-content">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`banner-1-${i}`} className="scrolling-item">
                <Leaf className="w-5 h-5 text-[#4ade80]" />
                <span>Most Advanced Wireless Irrigation & Fertigation Automation.</span>
              </div>
            ))}
          </div>
          <div className="scrolling-content" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`banner-2-${i}`} className="scrolling-item">
                <Leaf className="w-5 h-5 text-[#4ade80]" />
                <span>Most Advanced Wireless Irrigation & Fertigation Automation.</span>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Statement Cards */}
        <section id="problem" className="py-24 max-w-[1400px] mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight text-white mb-16 text-center">
              {t.probCardsTitle}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
               { icon: Droplets, title: t.probCard1Title, desc: t.probCard1Desc, color: "text-blue-400", img: waterWastageImg },
               { icon: Zap, title: t.probCard2Title, desc: t.probCard2Desc, color: "text-yellow-400", img: electricityCostsImg },
               { icon: Activity, title: t.probCard3Title, desc: t.probCard3Desc, color: "text-orange-400", img: farmVisitsImg },
               { icon: TrendingDown, title: t.probCard4Title, desc: t.probCard4Desc, color: "text-red-400", img: cropLossImg },
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#063016] shadow-xl hover:shadow-[0_15px_30px_rgba(34,197,94,0.15)] cursor-pointer transition-all duration-300 h-full flex flex-col"
              >
                <div className="h-[200px] overflow-hidden relative shrink-0">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063016] via-[#063016]/60 to-transparent" />
                </div>
                
                <div className="p-6 relative -mt-12 flex-grow flex flex-col">
                  <div className={`w-14 h-14 rounded-[1rem] bg-[#042010]/80 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-5 shadow-lg transform transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                    <card.icon className={`w-7 h-7 ${card.color}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{card.title}</h3>
                  <p className="text-white/70 leading-relaxed flex-1 text-sm md:text-base">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-24 relative z-10 bg-[#042010] border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{t.solTitle || "Our Solutions"}</h2>
                <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
                  {t.solSub || "Comprehensive, AI-powered tools designed to revolutionize your farming experience."}
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {solutions.map((sol, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                  whileHover={{ y: -15 }}
                  onClick={() => setSelectedSolution(idx)}
                  className="group relative rounded-[2.5rem] overflow-hidden border border-[#22c55e]/20 bg-[#063016] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)] cursor-pointer transition-all duration-300"
                >
                  <div className="h-[250px] overflow-hidden relative">
                    <img src={sol.img} alt={sol.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#063016] via-transparent to-transparent" />
                  </div>
                  <div className="p-8 relative -mt-16">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-[#042010]/80 backdrop-blur-xl border border-[#22c55e]/30 flex items-center justify-center mb-8 shadow-xl transform transition-transform group-hover:scale-110 group-hover:-rotate-3">
                      <sol.icon className={`w-10 h-10 ${sol.color}`} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{sol.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-8 text-lg">{sol.desc}</p>
                    <div className="flex items-center text-[#4ade80] font-bold group-hover:gap-6 gap-2 transition-all duration-300">
                      {t.learnMore || "Learn More"} <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Does It Work Section */}
        <section className="py-24 max-w-[1400px] mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] tracking-tight text-white mb-6">
                How Does It Work?
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Transform your farm into a smart ecosystem in four simple steps.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
               { icon: Settings, title: "1. Install Hardware", desc: "Quickly deploy our rugged, solar-powered sensor nodes directly into your farm fields.", color: "text-blue-400", img: howStep1Img },
               { icon: Smartphone, title: "2. Connect App", desc: "Seamlessly sync the hardware to the AgroDoot mobile dashboard using wireless technology.", color: "text-purple-400", img: howStep2Img },
               { icon: Activity, title: "3. AI Analysis", desc: "Our powerful AI engine continuously analyzes real-time soil and weather data.", color: "text-orange-400", img: howStep3Img },
               { icon: CheckCircle2, title: "4. Automated Action", desc: "Smart algorithms automatically control your irrigation and trigger predictive alerts.", color: "text-green-400", img: howStep4Img },
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#063016] shadow-xl hover:shadow-[0_15px_30px_rgba(34,197,94,0.15)] cursor-pointer transition-all duration-300 h-full flex flex-col"
              >
                <div className="h-[200px] overflow-hidden relative shrink-0">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063016] via-[#063016]/60 to-transparent" />
                </div>
                
                <div className="p-6 relative -mt-12 flex-grow flex flex-col">
                  <div className={`w-14 h-14 rounded-[1rem] bg-[#042010]/80 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-5 shadow-lg transform transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                    <card.icon className={`w-7 h-7 ${card.color}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{card.title}</h3>
                  <p className="text-white/70 leading-relaxed flex-1 text-sm md:text-base">{card.desc}</p>
                </div>
              </motion.div>
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
                <div className="bg-[#0f2e1b]/80 border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-4">{t.starterKit}</h3>
                  <div className="text-4xl md:text-5xl font-extrabold text-[#4ade80] mb-8 tracking-tight">{t.starterPrice}</div>
                  <ul className="space-y-4 mb-10 flex-1">
                    {[t.sk1, t.sk2, t.sk3, t.sk4].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/90 font-medium">
                        <span className="text-[#22c55e] font-bold mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/20 py-3 rounded-xl font-bold transition-all mt-auto backdrop-blur-md">
                    {t.orderNow}
                  </button>
                </div>
              </FadeIn>

              {/* Full Farm Kit */}
              <FadeIn delay={0.2}>
                <div className="bg-[#0f2e1b]/90 border border-[#22c55e] rounded-2xl p-8 h-full flex flex-col relative shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] transition-all duration-300">
                  <div className="absolute -top-3 left-8 bg-[#fbbf24] text-[#021808] px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase shadow-md">
                    {t.bestValue}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 mt-2">{t.fullKit}</h3>
                  <div className="text-4xl md:text-5xl font-extrabold text-[#4ade80] mb-8 tracking-tight">{t.fullPrice}</div>
                  <ul className="space-y-4 mb-10 flex-1">
                    {[t.fk1, t.fk2, t.fk3, t.fk4, t.fk5].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/90 font-medium">
                        <span className="text-[#22c55e] font-bold mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-[#021808] py-3 rounded-xl font-bold transition-all mt-auto shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    {t.orderNow}
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ==================== ACHIEVEMENTS SECTION ==================== */}
        <section id="achievements" className="py-24 px-6 relative z-10 bg-[#021307]/50 border-t border-white/5">
          <div className="absolute inset-0 bg-[#021307]/80 -z-10" />
          <div className="max-w-[1400px] mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <span className="text-[#4ade80] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3 block">
                  {t.navAchievements}
                </span>
                <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight text-white mb-6">
                  {t.achievementsTitle}
                </h2>
                <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                  {t.achievementsSub}
                </p>
              </div>
            </FadeIn>

            {/* Achievement Tabs Toggle */}
            <FadeIn delay={0.1}>
              <div className="flex justify-center gap-4 mb-16">
                <div className="flex flex-col sm:flex-row p-1.5 bg-white/5 border border-white/10 rounded-2xl sm:rounded-full backdrop-blur-md shadow-lg gap-2 sm:gap-0">
                  <button
                    onClick={() => handleSwitchAchievement('indradhanu')}
                    className={`px-6 py-3 rounded-xl sm:rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 outline-none ${activeAchievement === 'indradhanu' ? 'bg-[#22c55e] text-[#021808] shadow-[0_4px_12px_rgba(34,197,94,0.3)]' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                  >
                    <Trophy className="w-4 h-4 shrink-0" /> 1st Prize — Indradhanu
                  </button>
                  <button
                    onClick={() => handleSwitchAchievement('eyantra')}
                    className={`px-6 py-3 rounded-xl sm:rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 outline-none ${activeAchievement === 'eyantra' ? 'bg-[#22c55e] text-[#021808] shadow-[0_4px_12px_rgba(34,197,94,0.3)]' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                  >
                    <Award className="w-4 h-4 shrink-0" /> Technical Excellence — e-Yantra
                  </button>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Interactive Image Slider (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <FadeIn direction="right">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-[#042010] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                    {/* Main Image Slider with Framer Motion AnimatePresence */}
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${activeAchievement}-${activeImg}`}
                        src={achievementImages[activeImg]}
                        alt={`AgroDoot Hackathon Milestone ${activeImg + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                      />
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021808]/60 to-transparent pointer-events-none" />

                    {/* Navigation Arrows */}
                    <button 
                      onClick={prevImg}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#021808]/80 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#22c55e] transition-all hover:scale-110 shadow-lg shrink-0 opacity-0 group-hover:opacity-100 duration-300"
                      aria-label="Previous image"
                    >
                      <ArrowRight className="w-5 h-5 rotate-180" />
                    </button>
                    <button 
                      onClick={nextImg}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#021808]/80 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#22c55e] transition-all hover:scale-110 shadow-lg shrink-0 opacity-0 group-hover:opacity-100 duration-300"
                      aria-label="Next image"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    {/* Floating Prize Badge */}
                    <div className="absolute top-4 left-4 bg-[#fbbf24] text-[#021808] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                      {activeAchievement === 'indradhanu' ? (
                        <>
                          <Trophy className="w-3.5 h-3.5 shrink-0" /> 1st Prize ₹1 Lakh
                        </>
                      ) : (
                        <>
                          <Award className="w-3.5 h-3.5 shrink-0" /> Technical Excellence
                        </>
                      )}
                    </div>
                  </div>
                </FadeIn>

                {/* Thumbnails */}
                <FadeIn direction="up" delay={0.2}>
                  <div className="flex gap-4 justify-center flex-wrap">
                    {achievementImages.map((img, idx) => (
                      <button
                        key={`${activeAchievement}-thumb-${idx}`}
                        onClick={() => setActiveImg(idx)}
                        className={`w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-md ${activeImg === idx ? 'border-[#22c55e] scale-105 shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'border-white/10 opacity-60 hover:opacity-100 hover:scale-102'}`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Right Column: Content Cards (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAchievement}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 text-[#4ade80] text-sm font-semibold w-fit mb-4">
                      {activeAchievement === 'indradhanu' ? (
                        <>
                          <Trophy className="w-4 h-4 shrink-0" /> Grand Challenge Winner
                        </>
                      ) : (
                        <>
                          <Award className="w-4 h-4 shrink-0" /> IIT Bombay e-Yantra
                        </>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                      {activeAchievement === 'indradhanu' ? t.indradhanuTitle : t.eyantraTitle}
                    </h3>
                    <p className="text-[#4ade80] font-semibold text-lg flex items-center gap-2 mb-6">
                      <Calendar className="w-5 h-5 animate-pulse shrink-0" /> {activeAchievement === 'indradhanu' ? t.indradhanuSubtitle : t.eyantraSubtitle}
                    </p>
                    
                    <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
                      <p>{activeAchievement === 'indradhanu' ? t.indradhanuDesc : t.eyantraDesc}</p>
                      <p className="text-sm md:text-base text-white/50 bg-white/5 border border-white/5 p-4 rounded-2xl italic">
                        {activeAchievement === 'indradhanu' ? t.indradhanuHost : t.eyantraHost}
                      </p>
                    </div>

                    <div className="h-px bg-white/10 my-8" />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Pillar 1: Structure / KVK */}
                      <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 cursor-default">
                        <span className="text-[#4ade80] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                          {activeAchievement === 'indradhanu' ? (
                            <>
                              <Settings className="w-4 h-4 shrink-0" /> {t.indradhanuStructure}
                            </>
                          ) : (
                            <>
                              <MapPin className="w-4 h-4 shrink-0" /> {t.eyantraProblems}
                            </>
                          )}
                        </span>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                          {activeAchievement === 'indradhanu' ? t.indradhanuStructureDesc : t.eyantraProblemsDesc}
                        </p>
                      </div>

                      {/* Pillar 2: Prize / Prototyping */}
                      <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white/5 border border-[#fbbf24]/30 hover:border-[#fbbf24]/50 transition-all hover:bg-white/10 cursor-default">
                        <span className="text-[#fbbf24] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                          {activeAchievement === 'indradhanu' ? (
                            <>
                              <Trophy className="w-4 h-4 shrink-0" /> {t.indradhanuPrize}
                            </>
                          ) : (
                            <>
                              <Zap className="w-4 h-4 shrink-0" /> {t.eyantraPrototyping}
                            </>
                          )}
                        </span>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                          {activeAchievement === 'indradhanu' ? t.indradhanuPrizeDesc : t.eyantraPrototypingDesc}
                        </p>
                      </div>

                      {/* Pillar 3: Mentorship / Incubation */}
                      <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 cursor-default">
                        <span className="text-[#4ade80] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                          {activeAchievement === 'indradhanu' ? (
                            <>
                              <Users className="w-4 h-4 shrink-0" /> {t.indradhanuMentorship}
                            </>
                          ) : (
                            <>
                              <Sprout className="w-4 h-4 shrink-0" /> {t.eyantraRewards}
                            </>
                          )}
                        </span>
                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                          {activeAchievement === 'indradhanu' ? t.indradhanuMentorshipDesc : t.eyantraRewardsDesc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

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
              <li><a href="#achievements" className="hover:text-[#22c55e] transition-colors">{t.navAchievements}</a></li>
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

      {/* Solution Detail Modal */}
      <AnimatePresence>
        {selectedSolution !== null && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-[#063016] to-[#021808] border border-[#22c55e]/30 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl my-auto z-10"
            >
              {/* Glow effects inside modal */}
              <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#22c55e]/15 blur-[80px] rounded-full pointer-events-none" />
              
              {/* Close Button top right */}
              <button 
                onClick={() => setSelectedSolution(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#22c55e]/50 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-110 shadow-lg outline-none z-20"
                aria-label="Close modal"
              >
                <span className="text-sm font-bold">✕</span>
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#042010] border border-[#22c55e]/30 flex items-center justify-center shadow-lg">
                  {React.createElement(solutions[selectedSolution].icon, {
                    className: `w-8 h-8 ${solutions[selectedSolution].color}`
                  })}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#4ade80] uppercase tracking-wider block mb-1">Our Solution</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {solutions[selectedSolution].title}
                  </h3>
                </div>
              </div>

              {/* Card image inside Modal */}
              <div className="w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden border border-white/10 mb-6 shadow-inner relative">
                <img 
                  src={solutions[selectedSolution].img} 
                  alt={solutions[selectedSolution].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021808]/75 via-transparent to-transparent" />
              </div>

              {/* Modal Body / Description */}
              <div className="space-y-4">
                <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
                  {solutions[selectedSolution].desc}
                </p>
                <div className="h-px bg-white/10 my-4" />
                <div className="bg-[#042010]/80 border border-[#22c55e]/20 rounded-2xl p-6 shadow-inner">
                  <h4 className="text-[#4ade80] font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Why Choose This?
                  </h4>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    {solutions[selectedSolution].detail}
                  </p>
                </div>
              </div>

              {/* Close Action Button */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-[#021808] px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:scale-[1.02] outline-none"
                >
                  {t.solCloseBtn || "Close"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
