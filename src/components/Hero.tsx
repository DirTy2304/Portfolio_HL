import { useEffect, useState } from 'react';
import { Shield, Terminal, Activity, AlertTriangle, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import avatar from '@/assets/avatar.jpg';

const Hero = () => {
  const [missionStarted, setMissionStarted] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  
  const scanLogs = [
    '> Initializing network scan...',
    '> Detecting active hosts: 192.168.1.0/24',
    '> Port scan in progress: 80, 443, 22, 3306',
    '> Analyzing traffic patterns...',
    '> Vulnerability assessment: RUNNING',
    '> Checking OWASP Top 10 vulnerabilities...',
    '> SQL Injection test: NEGATIVE',
    '> XSS detection: NEGATIVE', 
    '> Authentication bypass attempt: FAILED',
    '> Network intrusion detected: FALSE ALARM',
    '> Firewall status: ACTIVE',
    '> IDS/IPS systems: OPERATIONAL',
    '> Analyzing security headers...',
    '> SSL/TLS certificate: VALID',
    '> Backdoor detection: NONE FOUND',
    '> Malware signature scan: CLEAN',
    '> System integrity: VERIFIED',
    '> Threat level assessment: LOW',
    '> Mission objective located...',
    '> Accessing candidate profile...',
    '> PROFILE FOUND: Hugo LAMBERT',
    '> Status: CYBERSECURITY SPECIALIST',
    '> Clearance level: AUTHORIZED',
    '> Loading mission report...',
  ];

  useEffect(() => {
    if (missionStarted && !scanComplete) {
      const logInterval = setInterval(() => {
        setLogs(prev => {
          const nextIndex = prev.length;
          if (nextIndex < scanLogs.length) {
            return [...prev, scanLogs[nextIndex]];
          } else {
            clearInterval(logInterval);
            setTimeout(() => setScanComplete(true), 1000);
            return prev;
          }
        });
      }, 200);

      const progressInterval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => {
        clearInterval(logInterval);
        clearInterval(progressInterval);
      };
    }
  }, [missionStarted, scanComplete]);

  const startMission = () => {
    setMissionStarted(true);
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!missionStarted) {
    // Initial mission briefing screen
    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
          <div className="cyber-grid absolute inset-0 opacity-20" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
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

        {/* Mission Briefing */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto">
            {/* Alert Badge */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full">
                <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
                <span className="text-sm font-mono text-red-500 font-semibold">MISSION CLASSIFIED</span>
              </div>
            </div>

            {/* Mission Title */}
            <div className="text-center mb-12 animate-fade-up">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                <span className="glow-blue">Bienvenue</span>{' '}
                <span className="glow-purple">Agent Recruteur</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-cyber mx-auto rounded-full shadow-neon-blue mb-8" />
            </div>

            {/* Mission Card */}
            <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 md:p-12 shadow-card animate-fade-up mb-8" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 glow-blue">
                    Mission Objective
                  </h2>
                  <p className="text-sm text-muted-foreground font-mono">
                    PRIORITY: HIGH | CLEARANCE: LEVEL 3
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-lg md:text-xl leading-relaxed">
                  Votre mission : <span className="text-primary font-semibold">identifier la faille sur le réseau</span>.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Un scan complet du système va être lancé. Vous devrez analyser les données collectées 
                  pour localiser le profil du candidat cible et accéder à son rapport de compétences.
                </p>
                <div className="flex items-center gap-2 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <Terminal className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm font-mono text-primary">
                    TARGET: Hugo LAMBERT | STATUS: CYBERSECURITY SPECIALIST
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                onClick={startMission}
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-neon-blue font-semibold text-lg py-6 group"
              >
                <Activity className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Lancer la mission
              </Button>
            </div>

            {/* Warning Notice */}
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-sm text-muted-foreground font-mono">
                <span className="text-red-500">⚠</span> Avertissement : Cette opération est surveillée par l'équipe de sécurité
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!scanComplete) {
    // SOC Dashboard scanning screen
    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="cyber-grid absolute inset-0 opacity-30 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        </div>

        {/* Scanning Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-scan" />
        </div>

        {/* SOC Dashboard */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-4">
                <Activity className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-mono text-primary font-semibold">SCAN IN PROGRESS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold glow-blue mb-2">
                Security Operations Center
              </h2>
              <p className="text-muted-foreground font-mono text-sm">Network Analysis Protocol v3.2</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-mono text-primary">Scan Progress</span>
                <span className="text-sm font-mono text-primary font-bold">{scanProgress}%</span>
              </div>
              <div className="w-full h-3 bg-background/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 shadow-neon-blue"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            </div>

            {/* Terminal Logs */}
            <div className="bg-black/80 backdrop-blur-sm border border-primary/30 rounded-lg p-6 font-mono text-sm h-[400px] overflow-hidden relative shadow-neon-blue">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/20">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-primary">root@soc-terminal:~$</span>
              </div>
              <div className="space-y-1 overflow-y-auto h-[320px] scrollbar-thin scrollbar-thumb-primary/30">
                {logs.map((log, index) => (
                  <div 
                    key={index}
                    className="text-green-400 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {log}
                  </div>
                ))}
                <div className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1" />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'Hosts Scanned', value: '256', icon: Activity },
                { label: 'Open Ports', value: '12', icon: Shield },
                { label: 'Threats Found', value: '0', icon: AlertTriangle },
                { label: 'Profiles Found', value: '1', icon: FileText },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Mission complete - Profile revealed
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

      {/* Success Banner */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 animate-fade-in">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-mono text-green-500 font-semibold">MISSION COMPLETE - PROFILE ACCESSED</span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 animate-fade-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-cyber rounded-full blur-2xl opacity-50 animate-glow-pulse" />
              <img
                src={avatar}
                alt="Hugo Lambert"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-neon-blue mx-auto object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-up">
            <span className="glow-blue">Hugo</span>{' '}
            <span className="glow-purple">LAMBERT</span>
          </h1>

          {/* Status */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-mono text-primary">STATUS: AUTHORIZED</span>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
              Étudiant en <span className="text-primary font-semibold">Cybersécurité</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Développeur <span className="text-secondary font-semibold">Web / Mobile</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Passionné par la sécurité informatique et le développement, je me spécialise dans la{' '}
            <span className="text-primary font-semibold">détection de vulnérabilités</span>, les{' '}
            <span className="text-secondary font-semibold">tests de pénétration</span> et la création d'applications sécurisées.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-neon-blue font-semibold px-8 py-6 text-lg group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              📄 Télécharger le rapport
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="border-secondary hover:bg-secondary/10 hover:border-secondary shadow-neon-purple font-semibold px-8 py-6 text-lg group"
            >
              <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Consulter le profil complet
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
