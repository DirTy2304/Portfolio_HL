import { useEffect, useState } from 'react';
import { Download, Mail, Terminal, Shield, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import avatar from '@/assets/avatar.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = '> Initializing cyber defense systems...';
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="cyber-grid absolute inset-0 opacity-20" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Terminal Loading Text */}
          <div className="mb-8 animate-fade-in">
            <p className="text-primary font-mono text-sm md:text-base">
              {typedText}
              <span className={`inline-block w-2 h-4 bg-primary ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
            </p>
          </div>

          {/* Avatar */}
          <div className="mb-8 animate-fade-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-cyber rounded-full blur-2xl opacity-50 animate-glow-pulse" />
              <img
                src={avatar}
                alt="Hugo Lambert"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-neon-blue mx-auto object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-4 border-background shadow-neon-purple">
                <Shield className="w-6 h-6 text-secondary-foreground" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-up">
            <span className="glow-blue">Hugo</span>{' '}
            <span className="glow-purple">LAMBERT</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
              Étudiant en <span className="text-primary font-semibold">Cybersécurité</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Développeur <span className="text-secondary font-semibold">Web / Mobile</span>
            </p>
          </div>

          {/* Tech Icons */}
          <div className="flex items-center justify-center gap-6 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/30 hover-float">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Pentesting</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-secondary/30 hover-float">
              <Code className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Full Stack</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-accent/30 hover-float">
              <Terminal className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Linux</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Passionné par la sécurité informatique et le développement, je me spécialise dans la{' '}
            <span className="text-primary font-semibold">détection de vulnérabilités</span>, les{' '}
            <span className="text-secondary font-semibold">tests de pénétration</span> et la création d'applications sécurisées.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-neon-blue hover:shadow-neon-blue font-semibold px-8 py-6 text-lg group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Télécharger mon CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-neon-purple font-semibold px-8 py-6 text-lg group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Me contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
