/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Bolt, 
  Search, 
  ArrowRight, 
  ShoppingCart, 
  CheckCircle2, 
  Terminal, 
  Code, 
  Globe,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const COURSES = [
  {
    id: 1,
    title: "Web Development Mastery",
    category: "Development",
    duration: "12 Weeks",
    price: 45,
    image: "https://picsum.photos/seed/dev/800/450",
    description: "Build modern, high-performance web applications using the latest Next.js and Tailwind CSS tech stack.",
    students: "+4k"
  },
  {
    id: 2,
    title: "Digital Marketing Fundamentals",
    category: "Marketing",
    duration: "6 Weeks",
    price: 25,
    image: "https://picsum.photos/seed/marketing/800/450",
    description: "Master the art of online growth, SEO optimization, and viral content strategies for 2025 platforms.",
    students: "+2k"
  },
  {
    id: 3,
    title: "UI/UX Design Systems",
    category: "Design",
    duration: "8 Weeks",
    price: 15,
    image: "https://picsum.photos/seed/design/800/450",
    description: "Create stunning interfaces and complex design systems using professional principles and Figma.",
    students: "+8k"
  }
];

const PRICING = [
  {
    name: "Basic",
    tier: "Entry Level",
    price: 15,
    features: ["Lifetime course access", "Digital certificate"],
    notIncluded: ["Downloadable assets"],
    buttonText: "Select Basic",
    highlight: false
  },
  {
    name: "Pro",
    tier: "Professional",
    price: 25,
    features: ["Everything in Basic", "Downloadable assets", "Project source files", "Community access"],
    notIncluded: [],
    buttonText: "Select Pro",
    highlight: true
  },
  {
    name: "Elite",
    tier: "Ultimate",
    price: 45,
    features: ["Everything in Pro", "1-on-1 Mentorship session", "Priority email support", "Portfolio review"],
    notIncluded: [],
    buttonText: "Select Elite",
    highlight: false
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-dark selection:bg-primary selection:text-bg-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-700 bg-bg-dark/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                <Bolt className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">NeonSkills</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {["Courses", "Pricing", "About"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium uppercase tracking-wider text-slate-300 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center rounded-lg border border-neutral-700 bg-neutral-800 px-3 h-10 focus-within:border-primary transition-all">
              <Search className="h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="bg-transparent border-none focus:ring-0 text-sm text-slate-100 placeholder:text-slate-500 w-48"
              />
            </div>
            <button className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-5 h-10 text-sm font-bold uppercase tracking-wider text-bg-dark hover:brightness-110 transition-all">
              Login
            </button>
            <button 
              className="md:hidden text-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-neutral-700 bg-bg-dark p-6"
          >
            <nav className="flex flex-col gap-4">
              {["Courses", "Pricing", "About"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-bold uppercase tracking-wider text-slate-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 w-full rounded-lg bg-primary py-3 font-bold uppercase text-bg-dark">
                Login
              </button>
            </nav>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            <img 
              src="https://picsum.photos/seed/matrix/1920/1080?blur=10" 
              alt="Background" 
              className="h-full w-full object-cover opacity-20 grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="container relative z-10 mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Next Gen Learning Platform
              </span>
              <h1 className="neon-glow mb-6 text-5xl font-black uppercase tracking-tighter text-slate-100 md:text-8xl">
                Level Up Your <span className="text-primary">Digital Skills</span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
                Master high-demand skills in coding, design, and marketing with our futuristic curriculum designed for the 2025 economy.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="neon-box-shadow w-full rounded-lg bg-primary px-8 py-4 text-lg font-bold uppercase tracking-wider text-bg-dark hover:scale-105 transition-all sm:w-auto">
                  Start Learning
                </button>
                <button className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-8 py-4 text-lg font-bold uppercase tracking-wider text-slate-100 hover:bg-neutral-700 transition-all sm:w-auto">
                  View Catalog
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20">
          <div className="container mx-auto px-6">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold uppercase tracking-tight text-slate-100">Featured Courses</h2>
                <div className="mt-2 h-1 w-20 bg-primary" />
              </div>
              <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:underline">
                View All <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {COURSES.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-xl border border-neutral-700 bg-neutral-800/50 p-5 transition-all hover:border-primary/50 hover:translate-y-[-4px]"
                >
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-neutral-700">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute right-3 top-3 rounded-md border border-primary/30 bg-bg-dark/80 px-3 py-1 font-bold text-primary backdrop-blur">
                      ${course.price}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                      {course.category} • {course.duration}
                    </span>
                    <h3 className="text-xl font-bold uppercase text-slate-100 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {course.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-6 w-6 rounded-full border-2 border-neutral-800 bg-neutral-700 overflow-hidden">
                              <img src={`https://picsum.photos/seed/${i + index}/50/50`} alt="User" referrerPolicy="no-referrer" />
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-slate-300">{course.students}</span>
                      </div>
                      <button className="flex items-center gap-2 rounded border border-primary/20 px-3 py-2 text-xs font-black uppercase tracking-widest text-primary transition-all group-hover:bg-primary group-hover:text-bg-dark">
                        Enroll <ShoppingCart className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-neutral-800/30 py-20">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-slate-100">Pricing Plans</h2>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Choose your path to excellence</p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              {PRICING.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: plan.highlight ? 1.05 : 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col gap-6 rounded-xl border p-8 transition-all ${
                    plan.highlight 
                      ? "border-primary bg-neutral-800 shadow-[0_0_30px_rgba(108,242,13,0.15)]" 
                      : "border-neutral-700 bg-neutral-800 hover:border-neutral-500"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest text-bg-dark">
                      Most Popular
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <h4 className={`text-sm font-bold uppercase tracking-widest ${plan.highlight ? "text-primary" : "text-slate-400"}`}>
                      {plan.tier}
                    </h4>
                    <h3 className="text-2xl font-black uppercase text-slate-100">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-5xl font-black tracking-tighter text-primary">${plan.price}</span>
                      <span className="text-sm font-bold uppercase text-slate-400">/ course</span>
                    </div>
                  </div>
                  <button className={`flex h-12 w-full items-center justify-center rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${
                    plan.highlight 
                      ? "bg-primary text-bg-dark hover:brightness-110" 
                      : "bg-neutral-700 text-slate-100 hover:bg-neutral-600"
                  }`}>
                    {plan.buttonText}
                  </button>
                  <div className="flex flex-col gap-4 pt-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        {feature}
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-slate-500 line-through">
                        <X className="h-5 w-5 text-neutral-700" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 border-t border-neutral-700">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center justify-between gap-10 rounded-2xl border border-primary/20 bg-primary/5 p-10 md:flex-row">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-bold uppercase text-slate-100">Ready to start your journey?</h2>
                <p className="text-slate-400">Join 50,000+ students mastering the digital frontier today.</p>
              </div>
              <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="min-w-[300px] rounded-lg border-neutral-700 bg-neutral-800 px-6 py-4 text-slate-100 focus:border-primary focus:ring-primary"
                />
                <button className="rounded-lg bg-primary px-8 py-4 font-black uppercase tracking-widest text-bg-dark hover:scale-105 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bg-dark border-t border-neutral-700 px-6 py-12 md:px-12">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-primary">
                <Bolt className="h-6 w-6" />
                <h2 className="text-lg font-bold uppercase tracking-tight text-slate-100">NeonSkills</h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                The world's most advanced learning platform for digital specialists. Built by hackers, for creators.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-100">Platform</h4>
              {["Courses", "Mentors", "Enterprise"].map((item) => (
                <a key={item} href="#" className="text-sm text-slate-400 hover:text-primary transition-colors">{item}</a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-100">Resources</h4>
              {["Documentation", "Blog", "Support"].map((item) => (
                <a key={item} href="#" className="text-sm text-slate-400 hover:text-primary transition-colors">{item}</a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-100">Social</h4>
              <div className="flex gap-4">
                {[Terminal, Code, Globe].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded bg-neutral-800 text-slate-400 hover:bg-primary hover:text-bg-dark transition-all">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-800/50 pt-12 md:flex-row">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              © 2025 NEONSKILLS. ALL SYSTEMS OPERATIONAL.
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <a href="#" className="hover:text-primary">Privacy Protocol</a>
              <a href="#" className="hover:text-primary">Service Terms</a>
              <a href="#" className="hover:text-primary">Cookie Data</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
