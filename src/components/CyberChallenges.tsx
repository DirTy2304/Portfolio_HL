import { Trophy } from 'lucide-react';
import VulnerabilityFinder from './challenges/VulnerabilityFinder';
import HashDecoder from './challenges/HashDecoder';
import CyberQuiz from './challenges/CyberQuiz';
import MiniPentestLab from './challenges/MiniPentestLab';

const CyberChallenges = () => {
  return (
    <section id="challenges" className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-3 mb-4">
              <Trophy className="w-10 h-10 text-primary animate-float" />
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                <span className="glow-blue">Cyber</span> <span className="glow-purple">Challenges</span>
              </h2>
              <Trophy className="w-10 h-10 text-secondary animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full shadow-neon-blue mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Testez vos connaissances en cybersécurité avec ces mini-jeux interactifs !
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenge 1 */}
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <VulnerabilityFinder />
            </div>

            {/* Challenge 2 */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <HashDecoder />
            </div>

            {/* Challenge 3 */}
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <CyberQuiz />
            </div>

            {/* Challenge 4 */}
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <MiniPentestLab />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/30 backdrop-blur-sm">
              <p className="text-xl font-display font-bold mb-2 glow-blue">
                🎯 Vous avez relevé tous les défis ?
              </p>
              <p className="text-muted-foreground">
                Félicitations ! Vous êtes maintenant un <span className="text-secondary font-semibold">Hacker Éthique</span> certifié par Hugo Lambert 🔐
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberChallenges;
