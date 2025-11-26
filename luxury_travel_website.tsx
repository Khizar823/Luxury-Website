'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Plane, Hotel, Globe, Car, Shield, Ship, Briefcase, MapPin, Phone, Mail, Menu, X, CheckCircle, ArrowRight, Star } from 'lucide-react';

export default function LuxuryTravelWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      if (scrollY > 100) {
        navRef.current.style.background = 'rgba(0, 0, 0, 0.85)';
        navRef.current.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
      } else {
        navRef.current.style.background = 'rgba(0, 0, 0, 0.4)';
        navRef.current.style.boxShadow = 'none';
      }
    }
  }, [scrollY]);

  const services = [
    {
      icon: Plane,
      title: 'Flight Bookings',
      description: 'International & domestic tickets with best available fares',
      features: ['One-way, round-trip & multi-city', 'Best fare guarantee', '24/7 assistance'],
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      hoverColor: 'hover:shadow-blue-500/30'
    },
    {
      icon: Globe,
      title: 'Visa Assistance',
      description: 'Complete visa processing handled remotely',
      features: ['Tourist & business visas', 'Document verification', 'Embassy scheduling'],
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
      hoverColor: 'hover:shadow-purple-500/30'
    },
    {
      icon: Hotel,
      title: 'Hotel Bookings',
      description: 'Budget to luxury stays worldwide',
      features: ['Hotels & resorts', 'Honeymoon specials', 'Family accommodations'],
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
      hoverColor: 'hover:shadow-orange-500/30'
    },
    {
      icon: MapPin,
      title: 'Tour Packages',
      description: 'Custom-designed international packages',
      features: ['Dubai, Turkey, Thailand', 'Maldives, Europe & more', 'Umrah packages'],
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      hoverColor: 'hover:shadow-green-500/30'
    },
    {
      icon: Car,
      title: 'Transport Services',
      description: 'Airport transfers & car rentals',
      features: ['Pick-up & drop-off', 'International rentals', 'Private chauffeur'],
      color: 'from-indigo-500 to-blue-500',
      gradient: 'bg-gradient-to-br from-indigo-500/20 to-blue-500/20',
      hoverColor: 'hover:shadow-indigo-500/30'
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Complete travel protection coverage',
      features: ['Medical insurance', 'Lost baggage cover', 'Trip cancellation'],
      color: 'from-teal-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-teal-500/20 to-cyan-500/20',
      hoverColor: 'hover:shadow-teal-500/30'
    },
    {
      icon: Ship,
      title: 'Cruise Holidays',
      description: 'Luxury cruise bookings worldwide',
      features: ['Family packages', 'Couple cruises', 'Premium experiences'],
      color: 'from-violet-500 to-purple-500',
      gradient: 'bg-gradient-to-br from-violet-500/20 to-purple-500/20',
      hoverColor: 'hover:shadow-violet-500/30'
    },
    {
      icon: Briefcase,
      title: 'Corporate Travel',
      description: 'Business travel solutions',
      features: ['Remote booking support', 'VIP arrangements', 'Executive travel'],
      color: 'from-pink-500 to-rose-500',
      gradient: 'bg-gradient-to-br from-pink-500/20 to-rose-500/20',
      hoverColor: 'hover:shadow-pink-500/30'
    }
  ];

  const destinations = [
    { 
      name: 'Dubai', 
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90&auto=format&fit=crop',
      video: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90',
      description: 'Luxury & Innovation',
      overlay: 'from-purple-900/80'
    },
    { 
      name: 'Turkey', 
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&q=90&auto=format&fit=crop',
      video: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&q=90',
      description: 'History & Culture',
      overlay: 'from-amber-900/80'
    },
    { 
      name: 'Thailand', 
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=90&auto=format&fit=crop',
      video: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=90',
      description: 'Tropical Paradise',
      overlay: 'from-emerald-900/80'
    },
    { 
      name: 'Maldives', 
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=90&auto=format&fit=crop',
      video: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=90',
      description: 'Island Dreams',
      overlay: 'from-cyan-900/80'
    },
    { 
      name: 'Europe', 
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=90&auto=format&fit=crop',
      video: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=90',
      description: 'Timeless Elegance',
      overlay: 'from-blue-900/80'
    },
    { 
      name: 'Malaysia', 
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=90&auto=format&fit=crop',
      video: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=90',
      description: 'Modern Asia',
      overlay: 'from-red-900/80'
    }
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.15) translate(-2%, -2%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(236, 72, 153, 0.4); }
        }
        
        @keyframes scroll-indicator {
          0% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(8px); }
          100% { opacity: 0.3; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 2000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(236, 72, 153, 0.3);
        }
      `}</style>

      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        {/* Advanced Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-blue-950/30" />
          
          <div 
            className="absolute w-[800px] h-[800px] bg-purple-500/8 rounded-full blur-[120px] animate-float"
            style={{ 
              top: `${10 + Math.sin(scrollY * 0.001) * 5}%`, 
              left: `${5 + Math.cos(scrollY * 0.001) * 3}%`,
              animationDelay: '0s'
            }} 
          />
          <div 
            className="absolute w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[100px] animate-float"
            style={{ 
              top: `${50 + Math.sin(scrollY * 0.0015) * 4}%`, 
              right: `${5 + Math.cos(scrollY * 0.0015) * 3}%`,
              animationDelay: '2s'
            }} 
          />
          <div 
            className="absolute w-[700px] h-[700px] bg-pink-500/8 rounded-full blur-[110px] animate-float"
            style={{ 
              bottom: `${5 + Math.sin(scrollY * 0.0012) * 5}%`, 
              left: `${40 + Math.cos(scrollY * 0.0012) * 4}%`,
              animationDelay: '4s'
            }} 
          />
          
          {/* Mouse follower effect */}
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out"
            style={{
              left: `${mousePosition.x - 192}px`,
              top: `${mousePosition.y - 192}px`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>

        {/* Premium Navigation */}
        <nav 
          ref={navRef}
          className="fixed top-0 w-full z-50 glass-effect border-b border-white/10 transition-all duration-500"
          style={{ transition: 'background 0.3s ease, box-shadow 0.3s ease' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-3 sm:gap-4 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-purple-500/50 animate-pulse-glow">
                <Plane className="text-white" size={24} strokeWidth={2.5} />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-md opacity-60" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
                  Luxury Travel
                </h1>
                <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide">WORLDWIDE EXCELLENCE</p>
              </div>
            </a>

            <div className="hidden md:flex gap-8 lg:gap-10 items-center">
              {['Services', 'Destinations', 'Why Us', 'Contact'].map((item, idx) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="relative text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors duration-300 group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-out" />
                </a>
              ))}
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300 relative z-50"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden glass-effect border-t border-white/10 animate-slide-up">
              <div className="flex flex-col gap-6 p-8">
                {['Services', 'Destinations', 'Why Us', 'Contact'].map((item, idx) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    onClick={() => setMenuOpen(false)} 
                    className="text-lg font-medium text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section - Cinematic */}
        <section 
          id="hero" 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`,
                transition: 'transform 0.1s ease-out'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          </div>

          <div 
            className="max-w-6xl mx-auto text-center relative z-20"
            style={{ 
              transform: `translateY(${Math.min(scrollY * 0.15, 100)}px)`,
              opacity: Math.max(1 - scrollY / 600, 0.3)
            }}
          >
            <div className="mb-6 sm:mb-8 inline-block animate-scale-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <span className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm backdrop-blur-xl font-medium tracking-widest glass-effect">
                ✨ PREMIUM • REMOTE • WORLDWIDE
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-[1.1] tracking-tight px-4">
              <span className="block text-white mb-2 animate-slide-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                Experience
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient animate-slide-up text-shadow-glow" style={{ animationDelay: '0.4s', opacity: 0 }}>
                Limitless Travel
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed font-light px-4 animate-slide-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
              Where luxury meets convenience. Your complete travel solution, delivered remotely with unparalleled excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 animate-slide-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <a 
                href="#contact" 
                className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-semibold text-base sm:text-lg overflow-hidden transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Begin Your Journey
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              </a>
              <a 
                href="#services" 
                className="px-8 sm:px-12 py-4 sm:py-5 glass-effect rounded-full font-semibold text-base sm:text-lg border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-scroll-indicator">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2.5">
              <div className="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          id="services" 
          className={`relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            visibleSections['services'] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <div className="inline-block mb-4 animate-scale-in" style={{ animationDelay: '0.1s', opacity: visibleSections['services'] ? 1 : 0 }}>
                <span className="px-6 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm glass-effect font-medium tracking-widest text-purple-300">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight px-4">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient">
                  Premium Services
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-light px-4">
                Comprehensive travel solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative glass-effect rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-700 cursor-pointer overflow-hidden ${
                    visibleSections['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  } hover:scale-105 hover:-translate-y-2 ${service.hoverColor} hover:shadow-2xl`}
                  style={{ 
                    transitionDelay: `${index * 80}ms`,
                    animation: visibleSections['services'] ? `slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms forwards` : 'none'
                  }}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                      <service.icon size={32} className="text-white" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className={`space-y-3 transition-all duration-700 overflow-hidden ${
                      activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm sm:text-base">
                          <CheckCircle size={18} className="text-green-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Section - Cinematic */}
        <section 
          id="destinations" 
          className={`relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            visibleSections['destinations'] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <div className="inline-block mb-4 animate-scale-in" style={{ animationDelay: '0.1s', opacity: visibleSections['destinations'] ? 1 : 0 }}>
                <span className="px-6 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs sm:text-sm glass-effect font-medium tracking-widest text-blue-300">
                  DESTINATIONS
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight px-4">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-gradient">
                  Explore the World
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-light px-4">
                Handpicked destinations for unforgettable experiences
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  className={`group relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
                    visibleSections['destinations'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  } hover:scale-[1.03] hover:shadow-2xl`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animation: visibleSections['destinations'] ? `slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms forwards` : 'none'
                  }}
                >
                  {/* Cinematic Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover animate-ken-burns group-hover:scale-110 transition-transform duration-[20000ms]"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${dest.overlay} via-black/60 to-transparent z-10 group-hover:via-black/40 transition-all duration-700`} />
                  </div>
                  
                  {/* Country Name with Cinematic Effect */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                    <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <Star className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                        <span className="text-xs sm:text-sm text-gray-200 font-medium tracking-wide">{dest.description}</span>
                      </div>
                      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-white drop-shadow-2xl">
                        {dest.name}
                      </h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 transform translate-y-4 group-hover:translate-y-0">
                        <button className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 glass-effect rounded-full border border-white/30 hover:bg-white/20 transition-all text-xs sm:text-sm font-medium backdrop-blur-xl">
                          Discover More
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 animate-shimmer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section 
          id="why-us" 
          className={`relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            visibleSections['why-us'] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <div className="inline-block mb-4 animate-scale-in" style={{ animationDelay: '0.1s', opacity: visibleSections['why-us'] ? 1 : 0 }}>
                <span className="px-6 py-2.5 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-xs sm:text-sm glass-effect font-medium tracking-widest text-pink-300">
                  WHY US
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight px-4">
                <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent animate-gradient">
                  Excellence Delivered
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-light px-4">
                Experience the difference of premium remote travel services
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { 
                  title: '100% Online Service', 
                  desc: 'Book from your home, office, or anywhere! No need to visit physical offices. Save time and travel with just a few clicks.', 
                  icon: Globe,
                  benefit: '🎯 Save 3+ hours per booking'
                },
                { 
                  title: 'Instant Confirmations', 
                  desc: 'Get immediate booking confirmations via WhatsApp. Real-time updates on flights, hotels & visas. No waiting, no delays!', 
                  icon: Plane,
                  benefit: '⚡ Fastest service guaranteed'
                },
                { 
                  title: 'Best Price Promise', 
                  desc: 'Competitive rates with exclusive deals. Premium service without premium prices. Hidden discounts for loyal customers!', 
                  icon: Star,
                  benefit: '💰 Save up to 30% vs competitors'
                },
                { 
                  title: '24/7 Live Support', 
                  desc: 'Expert travel consultants available anytime. Emergency assistance during your trip. Direct WhatsApp support - no bots!', 
                  icon: Phone,
                  benefit: '🔥 Real humans, real help'
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`group relative glass-effect rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-700 ${
                    visibleSections['why-us'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  } hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20`}
                  style={{ 
                    transitionDelay: `${i * 100}ms`,
                    animation: visibleSections['why-us'] ? `slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms forwards` : 'none'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-purple-500/50">
                      <item.icon size={28} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tight text-center">{item.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center mb-4">{item.desc}</p>
                    <div className="px-4 py-2.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-center glass-effect">
                      <span className="text-xs sm:text-sm font-semibold text-green-400">{item.benefit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className={`relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            visibleSections['contact'] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-blue-600/30 glass-effect rounded-3xl lg:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 animate-pulse-glow" style={{ animationDuration: '4s' }} />
              
              <div className="relative z-10 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight px-4">
                  <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-gradient">
                    Ready for Adventure?
                  </span>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 lg:mb-16 max-w-3xl mx-auto font-light leading-relaxed px-4">
                  Connect with us today and let's create your perfect journey together
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12 lg:mb-16 px-4">
                  <a 
                    href="https://wa.me/923332263519" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-semibold text-sm sm:text-lg overflow-hidden transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-green-500/50"
                  >
                    <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span className="whitespace-nowrap">WhatsApp: 03332263519</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                  </a>
                  <a 
                    href="mailto:info@luxurytravel.com" 
                    className="group relative flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-sm sm:text-lg overflow-hidden transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-purple-500/50"
                  >
                    <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>Email Us</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 px-4">
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Instant Response
                  </span>
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Expert Guidance
                  </span>
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    Best Rates
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-white/10 text-center px-4">
              <p className="text-gray-500 text-sm sm:text-base font-light mb-2">© 2024 Luxury Travel & Tours — Premium Remote Travel Services</p>
              <p className="text-gray-600 text-xs sm:text-sm">Your trusted worldwide travel partner</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
