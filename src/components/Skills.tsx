import { Shield, Terminal, Globe, Database, Lock, Smartphone, Wrench, Bug, Network, Eye, FileCode, Code, Cloud, Package, GitBranch, HardDrive, Monitor } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cybersécurité',
      icon: Shield,
      color: 'primary',
      skills: [
        { name: 'Nmap', icon: Network, description: 'Scan réseau et détection de ports' },
        { name: 'Metasploit', icon: Bug, description: 'Framework d\'exploitation de vulnérabilités' },
        { name: 'Burp Suite', icon: Lock, description: 'Tests de sécurité web et proxy d\'interception' },
        { name: 'Wireshark', icon: Network, description: 'Analyse réseau et capture de paquets' },
        { name: 'tcpdump', icon: Terminal, description: 'Capture et analyse de trafic réseau en CLI' },
        { name: 'Maltego', icon: Eye, description: 'OSINT et investigation numérique' },
        { name: 'Sherlock', icon: Eye, description: 'Recherche de comptes sur les réseaux sociaux' },
        { name: 'OWASP Top 10', icon: Shield, description: 'Exploitation de vulnérabilités web courantes' },
        { name: 'Aircrack-ng', icon: Lock, description: 'Audit de sécurité WiFi et cracking WEP/WPA' },
        { name: 'Hydra', icon: Terminal, description: 'Attaques par force brute sur services réseau' },
        { name: 'Kali Linux', icon: Terminal, description: 'Distribution pour tests de pénétration' },
        { name: 'Ubuntu', icon: Terminal, description: 'Système Linux pour développement et prod' },
      ],
    },
    {
      title: 'Développement Web',
      icon: Globe,
      color: 'secondary',
      skills: [
        { name: 'HTML5', icon: FileCode, description: 'Structure sémantique des pages web' },
        { name: 'CSS3', icon: FileCode, description: 'Stylisation et design responsive' },
        { name: 'JavaScript', icon: Code, description: 'Interactivité et logique front-end' },
        { name: 'PHP', icon: Code, description: 'Développement back-end et API' },
        { name: 'CodeIgniter', icon: Code, description: 'Framework PHP pour applications web' },
        { name: 'SQL', icon: Database, description: 'Gestion de bases de données relationnelles' },
        { name: 'WordPress', icon: Globe, description: 'CMS pour sites web et blogs' },
        { name: 'REST API', icon: Cloud, description: 'Architecture d\'API pour services web' },
      ],
    },
    {
      title: 'Développement Mobile',
      icon: Smartphone,
      color: 'accent',
      skills: [
        { name: 'Kotlin', icon: Code, description: 'Langage moderne pour Android natif' },
        { name: 'Java', icon: Code, description: 'Développement d\'applications Android' },
        { name: 'Android Studio', icon: Monitor, description: 'IDE officiel pour le développement Android' },
      ],
    },
    {
      title: 'Outils & DevOps',
      icon: Wrench,
      color: 'primary',
      skills: [
        { name: 'Docker', icon: Package, description: 'Conteneurisation et déploiement d\'applications' },
        { name: 'GitHub', icon: GitBranch, description: 'Versioning et collaboration de code' },
        { name: 'VirtualBox', icon: HardDrive, description: 'Virtualisation de systèmes d\'exploitation' },
        { name: 'VMware', icon: HardDrive, description: 'Solutions de virtualisation professionnelle' },
        { name: 'VSCode', icon: Monitor, description: 'Éditeur de code polyvalent et extensible' },
        { name: 'PhpStorm', icon: Monitor, description: 'IDE professionnel pour PHP et web' },
      ],
    },
  ];

  const platforms = [
    { name: 'TryHackMe', icon: Terminal, description: 'Entraînement cybersécurité' },
    { name: 'Hack The Box', icon: Lock, description: 'Tests de pénétration' },
    { name: 'ANSSI & CNIL', icon: Shield, description: 'Certifications officielles' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="glow-blue">Compétences</span> <span className="glow-purple">Techniques</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full shadow-neon-blue" />
          </div>

          {/* Skills Categories */}
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="mb-16 animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg shadow-neon-blue">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-3xl font-display font-bold glow-blue">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    key={skillIndex}
                    className="group p-6 bg-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-neon-blue hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      {/* Skill Icon */}
                      <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Skill Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-bold text-lg mb-1 text-foreground group-hover:glow-blue transition-all duration-300">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* Training Platforms */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-8 text-center animate-fade-up">
              <span className="glow-purple">Environnements d'entraînement</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-secondary/50 transition-all duration-300 hover-float text-center group animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-block p-4 bg-secondary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <platform.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-display font-bold mb-2">{platform.name}</h4>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
