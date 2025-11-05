import { Shield, Code, Wrench, Terminal, Globe, Database, Lock, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cybersécurité',
      icon: Shield,
      color: 'primary',
      skills: [
        { name: 'Pentesting', level: 85, tools: 'Nmap, Metasploit, Burp Suite' },
        { name: 'Analyse Réseau', level: 80, tools: 'Wireshark, tcpdump' },
        { name: 'OSINT', level: 75, tools: 'Maltego, Sherlock' },
        { name: 'Vulnérabilités Web', level: 85, tools: 'OWASP Top 10' },
        { name: 'Cracking', level: 70, tools: 'Aircrack-ng, Hydra' },
        { name: 'Systèmes', level: 90, tools: 'Linux (Kali, Ubuntu), Windows' },
      ],
    },
    {
      title: 'Développement Web',
      icon: Globe,
      color: 'secondary',
      skills: [
        { name: 'Front-end', level: 85, tools: 'HTML, CSS, JavaScript' },
        { name: 'Back-end', level: 80, tools: 'PHP, CodeIgniter' },
        { name: 'Base de données', level: 75, tools: 'SQL' },
        { name: 'CMS', level: 70, tools: 'WordPress' },
        { name: 'API', level: 75, tools: 'REST API' },
      ],
    },
    {
      title: 'Développement Mobile',
      icon: Smartphone,
      color: 'accent',
      skills: [
        { name: 'Android', level: 75, tools: 'Kotlin, Java' },
        { name: 'IDE', level: 80, tools: 'Android Studio' },
      ],
    },
    {
      title: 'Outils & DevOps',
      icon: Wrench,
      color: 'primary',
      skills: [
        { name: 'Conteneurisation', level: 70, tools: 'Docker' },
        { name: 'Versioning', level: 85, tools: 'GitHub' },
        { name: 'Virtualisation', level: 80, tools: 'VirtualBox, VMware' },
        { name: 'IDE', level: 85, tools: 'VSCode, PhpStorm' },
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

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 hover-float animate-fade-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-${category.color}/10 rounded-lg`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-display font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 bg-gradient-cyber rounded-full transition-all duration-1000 ease-out shadow-neon-blue`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-xs text-muted-foreground mt-1">{skill.tools}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

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
