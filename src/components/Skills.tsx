import { Shield, Code, Wrench, Terminal, Network, Bug, Search, Target } from 'lucide-react';

const Skills = () => {
  const skillsData = {
    cybersecurity: [
      { name: 'Nmap', level: 85, icon: Search },
      { name: 'Metasploit', level: 75, icon: Bug },
      { name: 'Burp Suite', level: 80, icon: Shield },
      { name: 'Wireshark', level: 85, icon: Network },
      { name: 'Aircrack-ng', level: 70, icon: Terminal },
      { name: 'Hydra', level: 75, icon: Target },
    ],
    development: [
      { name: 'HTML / CSS', level: 90, icon: Code },
      { name: 'JavaScript', level: 80, icon: Code },
      { name: 'PHP', level: 85, icon: Code },
      { name: 'SQL', level: 80, icon: Code },
      { name: 'Kotlin / Java', level: 70, icon: Code },
    ],
    tools: [
      { name: 'Linux (Kali)', level: 85, icon: Terminal },
      { name: 'Docker', level: 70, icon: Wrench },
      { name: 'GitHub', level: 85, icon: Wrench },
      { name: 'VirtualBox', level: 80, icon: Wrench },
    ],
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="cyber-grid absolute inset-0 opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 glow-blue">
              Compétences Techniques
            </h2>
            <div className="w-32 h-1 bg-gradient-cyber mx-auto rounded-full shadow-neon-blue" />
          </div>

          {/* Cybersecurity Skills */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-primary flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Cybersécurité
            </h3>
            <div className="space-y-6">
              {skillsData.cybersecurity.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 hover:shadow-neon-blue animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 shadow-neon-blue"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Skills */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-secondary flex items-center gap-3">
              <Code className="w-8 h-8" />
              Développement Web / Mobile
            </h3>
            <div className="space-y-6">
              {skillsData.development.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-card/30 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:border-secondary/50 hover:bg-card/50 transition-all duration-300 hover:shadow-neon-purple animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-secondary" />
                      <span className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-secondary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-secondary to-purple-400 transition-all duration-1000 shadow-neon-purple"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-accent flex items-center gap-3">
              <Wrench className="w-8 h-8" />
              Outils & DevOps
            </h3>
            <div className="space-y-6">
              {skillsData.tools.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-card/30 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 hover:shadow-card animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <tool.icon className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {tool.name}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-accent">{tool.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-1000"
                      style={{ width: `${tool.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
