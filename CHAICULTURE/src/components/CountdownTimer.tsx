import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center opacity-0 animate-fade-in"
          style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-card rounded-xl p-3 md:p-6 min-w-[60px] md:min-w-[90px] border-2 border-primary/50 hover:border-primary transition-all duration-300 shadow-lg">
              <span className="block text-2xl md:text-5xl font-serif font-bold text-gradient-gold tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
          </div>
          <span className="mt-2 text-[10px] md:text-sm font-sans font-semibold tracking-widest uppercase text-white">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;