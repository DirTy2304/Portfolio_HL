import { Shield, Bug, Network, Eye, Terminal, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Analyse Réseau',
      icon: Network,
      color: 'primary',
      skills: [
        { 
          name: 'Wireshark', 
          icon: Network, 
          description: 'Analyse de paquets pour diagnostiquer les compromissions réseau et détecter les anomalies de trafic'
        },
        { 
          name: 'Nmap', 
          icon: Search, 
          description: 'Scanner réseau pour identifier les hôtes actifs, ports ouverts et services vulnérables'
        },
        { 
          name: 'tcpdump', 
          icon: Terminal, 
          description: 'Capture et analyse de trafic réseau en ligne de commande pour investigation approfondie'
        },
      ],
    },
    {
      title: 'Exploitation & Tests',
      icon: Bug,
      color: 'secondary',
      skills: [
        { 
          name: 'Metasploit', 
          icon: Bug, 
          description: 'Framework d\'exploitation de vulnérabilités pour tests de pénétration avancés'
        },
        { 
          name: 'Burp Suite', 
          icon: Shield, 
          description: 'Suite complète pour tests de sécurité web : proxy, scanner, intrus et analyse de requêtes'
        },
        { 
          name: 'OWASP Top 10', 
          icon: Shield, 
          description: 'Exploitation des vulnérabilités web courantes (SQLi, XSS, CSRF, etc.)'
        },
      ],
    },
    {
      title: 'Investigation & OSINT',
      icon: Eye,
      color: 'accent',
      skills: [
        { 
          name: 'Maltego', 
          icon: Eye, 
          description: 'Plateforme OSINT pour cartographier les relations et collecter des renseignements en ligne'
        },
        { 
          name: 'Sherlock', 
          icon: Search, 
          description: 'Outil de recherche de profils sur les réseaux sociaux pour investigation numérique'
        },
      ],
    },
    {
      title: 'Environnements & Plateformes',
      icon: Terminal,
      color: 'primary',
      skills: [
        { 
          name: 'Kali Linux', 
          icon: Terminal, 
          description: 'Distribution spécialisée pour tests de pénétration avec +600 outils de sécurité préinstallés'
        },
        { 
          name: 'TryHackMe', 
          icon: Shield, 
          description: 'Plateforme d\'entraînement avec labs pratiques pour apprendre la cybersécurité offensive'
        },
        { 
          name: 'Hack The Box', 
          icon: Bug, 
          description: 'Environnement de pentest réaliste avec machines vulnérables et challenges avancés'
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="glow-blue">Arsenal</span> <span className="glow-purple">Cybersécurité</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full shadow-neon-blue mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Outils et compétences maîtrisés pour la détection, l'analyse et l'exploitation de vulnérabilités
            </p>
          </div>

          {/* Skills Categories */}
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="mb-16 animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg shadow-neon-blue">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold glow-blue">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    key={skillIndex}
                    className="group relative p-6 bg-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-neon-blue hover:-translate-y-1 cursor-pointer overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex items-start gap-4">
                      {/* 3D Icon with Glow */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <skill.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      
                      {/* Skill Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
