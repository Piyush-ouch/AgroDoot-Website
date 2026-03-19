import React, { useEffect } from 'react';
import { Leaf, Droplets, Map, MessageSquare, Users, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pestHeatmapImg from './assets/pest_heatmap.png';

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#021808] via-[#052912] to-[#021307] text-white font-sans overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#10b981]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#047857]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#021808]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-[#22c55e]" />
            <span className="text-2xl font-bold tracking-tight text-white">AgroDoot</span>
          </div>
          
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 shadow-sm backdrop-blur-md">
            <a href="#" className="px-6 py-2 text-sm font-medium bg-[#22c55e] text-[#021808] rounded-full">Home</a>
            <a href="#problem" className="px-6 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-full">Problem</a>
            <a href="#solution" className="px-6 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-full">Solution</a>
            <a href="#features" className="px-6 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-full">Features</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition-colors">Log In</button>
            <button className="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-md">
              Sign Up Free
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
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" /> Next-Gen Farming Wellness
            </div>
            <h1 className="text-5xl md:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8 max-w-5xl mx-auto text-white">
              Bring Fresh Growth <br /> To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#22c55e]">Agriculture.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience the ultimate farming journey with precise automated irrigation, AI pest predictions, and real-time market insights.
            </p>
            <button className="bg-[#22c55e] hover:bg-[#16a34a] text-[#021808] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 mx-auto shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:-translate-y-1">
              Get Started <ArrowRight className="w-5 h-5" />
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
              src="/farmer-hero.png" 
              alt="Lush vibrant green farm with farmer using tech" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021808] via-transparent to-transparent opacity-90" />
            <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-start md:items-end text-white gap-6">
              <h2 className="text-3xl md:text-5xl font-medium max-w-xl leading-tight text-white drop-shadow-lg">The Journey to Perfection in Farming.</h2>
              <div className="flex bg-white/10 backdrop-blur-md px-6 py-4 rounded-full text-sm font-medium border border-white/20 items-center gap-2 hover:bg-white/20 transition-colors cursor-pointer">
                Download AgroDoot App <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative z-10">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 shadow-2xl">
              {[
                { stat: "10+", label: "Smart Features" },
                { stat: "40%", label: "Water Saved" },
                { stat: "98%", label: "Prediction Accuracy" },
                { stat: "24/7", label: "Automated Care" },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="text-center md:text-left md:pl-8 first:pl-0">
                    <h3 className="text-4xl md:text-5xl font-bold mb-2 text-[#4ade80]">{s.stat}</h3>
                    <p className="text-white/60 text-sm font-medium tracking-wide uppercase">{s.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section id="problem" className="py-24 max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-sm mb-6">
                The Challenge
              </div>
              <div className="flex flex-wrap gap-4 mt-8 opacity-80">
                <span className="text-sm font-medium border border-white/20 bg-white/5 rounded-full px-5 py-2">Water Waste</span>
                <span className="text-sm font-medium border border-white/20 bg-white/5 rounded-full px-5 py-2">Unpredictable Pests</span>
                <span className="text-sm font-medium border border-white/20 bg-white/5 rounded-full px-5 py-2">Market Guesswork</span>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight text-white mb-8">
                Traditional Labor-Intensive Farming Highlights <span className="text-red-400">Ongoing Inefficiencies.</span>
              </h2>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed border-l-2 border-[#22c55e]/30 pl-6">
                <p>
                  Due to a lack of precision farming techniques, massive amounts of precious water go to waste every single day.
                </p>
                <p>
                  Sudden pest attacks destroy entire yields overnight because farmers have no prior warning. Furthermore, farmers are left guessing which markets offer the best prices for their harvest, leading to lost profits.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features / Solutions Cards */}
        <section id="solution" className="py-24 px-6 relative z-10">
          <div className="absolute inset-0 bg-[#052912]/50 skew-y-[-2deg] -z-10" />
          
          <div className="max-w-[1400px] mx-auto">
            <FadeIn>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <h2 className="text-4xl md:text-5xl font-medium max-w-xl leading-tight">Next-Gen Solutions For Optimal Crop Growth</h2>
                <p className="text-white/60 max-w-sm mt-6 md:mt-0 text-lg">
                  We are entirely automating the farm. Manage everything directly from your phone.
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
                      <div className="bg-[#22c55e] p-3 rounded-xl text-[#021808]">
                        <Map className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-xl">1-Month Pest Heatmaps</span>
                    </div>
                  </div>
                  <div className="p-8 pt-6">
                    <p className="text-white/70 leading-relaxed text-lg">
                      Our advanced AI model analyzes crop data to recognize if pests will occur in the field up to a month in advance. We provide precise heatmaps indicating high-risk zones.
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
                      <div className="bg-[#22c55e] p-3 rounded-xl text-[#021808]">
                        <Droplets className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-xl">Automated AI Irrigation</span>
                    </div>
                  </div>
                  <div className="p-8 pt-6">
                    <p className="text-white/70 leading-relaxed text-lg">
                      Manage irrigation from your phone with the AgroDoot app. AI decides the exact right time to give water to the plants for maximum productivity and minimal waste.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Small Highlight Section */}
        <section id="features" className="py-24 px-6 relative z-10">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16 bg-gradient-to-r from-[#052912] to-[#0a3f1e] p-12 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <FadeIn>
              <div className="w-32 h-32 rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
                <MessageSquare className="w-12 h-12 text-[#4ade80]" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-2xl md:text-4xl font-medium leading-relaxed">
                Get entire farm reports delivered instantly on your <span className="text-[#4ade80]">WhatsApp</span>. Track which agri-markets offer high prices to maximize your profits.
              </h2>
            </FadeIn>
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
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium text-white mb-8 max-w-2xl leading-tight">
                  Join the Agricultural <br className="sm:hidden" /><span className="text-[#4ade80]">Revolution</span> Today.
                </h2>
                <div className="flex flex-col sm:flex-row w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[2rem] sm:rounded-full gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-transparent px-6 py-3 sm:py-0 min-w-0 outline-none text-white placeholder-white/50 text-center sm:text-left"
                  />
                  <button className="bg-[#22c55e] text-[#021808] px-8 py-4 rounded-full font-bold hover:bg-[#16a34a] transition-colors w-full sm:w-auto shrink-0">
                    Subscribe
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
              <h2 className="text-3xl md:text-4xl font-medium">Meet the Innovators</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group text-center">
                    <div className="aspect-square rounded-full bg-white/5 border border-white/10 mb-6 overflow-hidden relative mx-auto max-w-[200px] group-hover:border-[#22c55e]/50 transition-colors">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
                        <Users className="w-12 h-12 text-[#22c55e]/50" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl mb-1">Team Member {i}</h3>
                    <p className="text-[#4ade80] text-sm font-medium">Founder & Engineer</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#021006] border-t border-white/5 py-16 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 border-r border-white/5 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-[#22c55e]" />
              <span className="text-2xl font-bold tracking-tight text-white">AgroDoot</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Bringing precision agriculture and artificial intelligence to every farmer's fingertips. Maximizing yield, minimizing waste.
            </p>
          </div>
          <div className="md:pl-8">
            <h4 className="font-medium text-lg mb-6 text-white/90">Company</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Products</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-6 text-white/90">Resources</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-6 text-white/90">Legal</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#22c55e] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>© 2026 AgroDoot. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium tracking-wide">
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
