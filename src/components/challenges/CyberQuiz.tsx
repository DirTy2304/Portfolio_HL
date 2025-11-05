import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import { toast } from 'sonner';

const CyberQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      question: 'Que signifie l\'acronyme OWASP ?',
      answers: [
        'Open Web Application Security Project',
        'Online Web Application System Protocol',
        'Organized Web Attack Security Platform',
        'Official Website Authentication Security Process'
      ],
      correctAnswer: 0
    },
    {
      question: 'Quel port est généralement utilisé pour SSH ?',
      answers: ['21', '22', '23', '25'],
      correctAnswer: 1
    },
    {
      question: 'Quelle commande Nmap permet de détecter le système d\'exploitation ?',
      answers: ['nmap -sV', 'nmap -O', 'nmap -sS', 'nmap -A'],
      correctAnswer: 1
    },
    {
      question: 'Qu\'est-ce qu\'une attaque DDoS ?',
      answers: [
        'Distributed Denial of Service',
        'Direct Data Override System',
        'Digital Database Operation Service',
        'Decryption and Data Overload Security'
      ],
      correctAnswer: 0
    },
    {
      question: 'Quel algorithme de hashage est recommandé pour les mots de passe ?',
      answers: ['MD5', 'SHA-1', 'bcrypt', 'Base64'],
      correctAnswer: 2
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast.success('✅ Bonne réponse !');
    } else {
      toast.error('❌ Mauvaise réponse');
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setIsCompleted(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsCompleted(false);
    setSelectedAnswer(null);
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/30">
      <div className="flex items-center gap-3 mb-4">
        <Brain className="w-6 h-6 text-accent" />
        <h4 className="text-xl font-display font-bold">Challenge 3: Cyber Quiz</h4>
      </div>

      {!isCompleted ? (
        <>
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} / {questions.length}</span>
              <span>Score: {score} / {currentQuestion}</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-cyber transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h5 className="text-lg font-semibold mb-4">
              {questions[currentQuestion].question}
            </h5>

            <div className="space-y-3">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`
                    w-full text-left p-4 rounded-lg border transition-all duration-300
                    ${selectedAnswer === index
                      ? index === questions[currentQuestion].correctAnswer
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-red-500 bg-red-500/10'
                      : 'border-muted hover:border-accent/50 hover:bg-card'
                    }
                    ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}
                  `}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">
            {score === questions.length ? '🏆' : score >= questions.length * 0.7 ? '🎉' : '📚'}
          </div>
          <h5 className="text-2xl font-display font-bold mb-2">
            Quiz terminé !
          </h5>
          <p className="text-3xl font-bold text-primary mb-4">
            {score} / {questions.length}
          </p>
          <p className="text-muted-foreground mb-6">
            {score === questions.length 
              ? '🔐 Parfait ! Expert cybersécurité confirmé !'
              : score >= questions.length * 0.7
              ? '💪 Très bien ! Quelques révisions et ce sera parfait !'
              : '📖 Continuez à apprendre, vous êtes sur la bonne voie !'}
          </p>
          <Button
            onClick={resetQuiz}
            className="bg-accent hover:bg-accent/80 text-accent-foreground"
          >
            Recommencer
          </Button>
        </div>
      )}
    </Card>
  );
};

export default CyberQuiz;
