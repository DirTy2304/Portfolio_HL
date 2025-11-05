import { GraduationCap, Briefcase, Award, MapPin, Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const timeline = [
    {
      year: '2025 - 2026',
      type: 'education',
      title: 'Bachelor 3 Cyber Sécurité',
      institution: 'Ynov Campus Bordeaux',
      description: 'Formation en alternance - Administrateur systèmes, réseaux et cybersécurité',
    },
    {
      year: '2023 - 2025',
      type: 'education',
      title: 'BTS SIO SLAM',
      institution: 'Cipecma',
      description: 'Solutions Logicielles et Applications Métiers en alternance',
    },
    {
      year: '2023 - 2026',
      type: 'work',
      title: 'Apprenti Informatique',
      institution: 'Étoile Secours Ambulances',
      description: 'Maintenance du parc informatique, support technique, développement d\'applications internes',
    },
    {
      year: '2023 - 2025',
      type: 'certification',
      title: 'Certifications CNIL & ANSSI',
      institution: 'Organismes officiels',
      description: 'Certifications en protection des données et sécurité des systèmes d\'information',
    },
  ];

  const contact = [
    { icon: MapPin, label: '22, rue des Merles, 17220 Saint-Rogatien' },
    { icon: Phone, label: '06 17 51 72 02' },
    { icon: Mail, label: 'hugo.lambert23@sfr.fr' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="glow-blue">À propos</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full shadow-neon-blue" />
          </div>

          {/* Profile Description */}
          <Card className="p-8 md:p-10 mb-16 bg-card/50 backdrop-blur-sm border-primary/30 shadow-card hover:border-primary/50 transition-all duration-300 animate-fade-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Extrêmement motivé à développer constamment mes compétences et à évoluer professionnellement, je suis{' '}
              <span className="text-primary font-semibold">sérieux, apprends rapidement</span> et m'adapte aisément aux nouveaux défis.
              Passionné par l'informatique et les nouvelles technologies, je m'intéresse particulièrement à leurs avancées, notamment dans le domaine de la{' '}
              <span className="text-secondary font-semibold">cybersécurité</span>, un secteur en pleine évolution qui représente pour moi un véritable{' '}
              <span className="text-accent font-semibold">enjeu technique et stratégique</span>.
            </p>
          </Card>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {contact.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-8 text-center animate-fade-up">
              <span className="glow-purple">Parcours</span>
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-background border-2 border-primary shadow-neon-blue z-10">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-20 md:pl-0`}>
                      <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 hover-float inline-block w-full">
                        <div className="flex items-center gap-3 mb-3">
                          {item.type === 'education' && <GraduationCap className="w-5 h-5 text-primary" />}
                          {item.type === 'work' && <Briefcase className="w-5 h-5 text-secondary" />}
                          {item.type === 'certification' && <Award className="w-5 h-5 text-accent" />}
                          <span className="text-sm font-semibold text-primary">{item.year}</span>
                        </div>
                        <h4 className="text-xl font-display font-bold mb-2">{item.title}</h4>
                        <p className="text-secondary font-medium mb-2">{item.institution}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </Card>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
