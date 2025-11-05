import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Hash } from 'lucide-react';
import { toast } from 'sonner';

const HashDecoder = () => {
  const [answer, setAnswer] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  // Base64: "cybersecurity" = Y3liZXJzZWN1cml0eQ==
  const encodedHash = 'Y3liZXJzZWN1cml0eQ==';
  const correctAnswer = 'cybersecurity';

  const handleCheck = () => {
    if (answer.toLowerCase().trim() === correctAnswer.toLowerCase()) {
      setIsCompleted(true);
      toast.success('🎉 Hash décodé avec succès !', {
        description: 'Vous avez identifié l\'encodage Base64 et retrouvé le message original !',
        duration: 5000,
      });
    } else {
      toast.error('❌ Incorrect. Indice: Ce n\'est pas du MD5...', {
        description: 'Pensez à un encodage plus simple, souvent utilisé pour transmettre des données.',
        duration: 4000,
      });
    }
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/30">
      <div className="flex items-center gap-3 mb-4">
        <Hash className="w-6 h-6 text-secondary" />
        <h4 className="text-xl font-display font-bold">Challenge 2: Decode the Hash</h4>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Décodez ce hash mystérieux et découvrez le message caché :
      </p>

      {/* Hash Display */}
      <div className="bg-background/80 rounded-lg p-4 mb-6 border border-secondary/20">
        <p className="font-mono text-secondary text-center text-lg break-all">
          {encodedHash}
        </p>
      </div>

      {/* Hints */}
      <div className="mb-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
        <p className="text-xs text-muted-foreground">
          💡 <span className="font-semibold">Indice:</span> Ce n'est pas un hash de type MD5 ou SHA. 
          C'est un encodage très utilisé pour transmettre des données binaires sous forme de texte.
          Les caractères '=' à la fin sont un bon indice...
        </p>
      </div>

      {/* Input */}
      <div className="mb-4">
        <Input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Entrez le message décodé..."
          disabled={isCompleted}
          className="bg-background/50 border-secondary/30 focus:border-secondary"
        />
      </div>

      <Button
        onClick={handleCheck}
        disabled={isCompleted}
        className="w-full bg-secondary hover:bg-secondary-glow text-secondary-foreground shadow-neon-purple"
      >
        {isCompleted ? '✓ Défi réussi !' : 'Décoder'}
      </Button>

      {isCompleted && (
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
          <p className="text-sm text-green-400 font-semibold">
            🔓 Bravo, vous avez piraté le code secret ! 🎯
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            L'encodage Base64 est fréquemment utilisé pour encoder des données dans les APIs et protocoles web.
          </p>
        </div>
      )}
    </Card>
  );
};

export default HashDecoder;
