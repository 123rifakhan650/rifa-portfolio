import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BarChart3, Clock, CheckSquare, LifeBuoy, ThumbsUp } from 'lucide-react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, suffix = '', duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Easing function for smooth count
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(easeOutQuad * target);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="font-mono">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Numbers: React.FC = () => {
  const statItems = [
    {
      id: 'stat-exp',
      target: 2,
      suffix: '+',
      label: 'Years Experience',
      description: 'Building software in enterprise environments',
      icon: <Clock className="w-5 h-5 text-[#2DD4BF]" />,
    },
    {
      id: 'stat-projects',
      target: 5,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Production web applications & tools',
      icon: <CheckSquare className="w-5 h-5 text-[#2DD4BF]" />,
    },
    {
      id: 'stat-tickets',
      target: 1500,
      suffix: '+',
      label: 'Tickets Resolved',
      description: 'Technical issue resolution & support excellence',
      icon: <LifeBuoy className="w-5 h-5 text-[#2DD4BF]" />,
    },
    {
      id: 'stat-satisfaction',
      target: 99,
      suffix: '%',
      label: 'High Satisfaction Rate',
      description: 'Consistent quality feedback from stakeholders',
      icon: <ThumbsUp className="w-5 h-5 text-[#2DD4BF]" />,
    },
  ];

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-[#2DD4BF]/30 text-[#2DD4BF] text-xs font-mono mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Impact & Metrics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            By The Numbers
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            Tangible benchmarks and proven output across enterprise software systems.
          </p>
        </motion.div>

        {/* Stat Cards: 4-column on desktop, 2x2 grid on mobile/tablet */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(45, 212, 191, 0.4)' }}
              className="p-5 sm:p-6 rounded-2xl bg-[#111827]/70 backdrop-blur-md border border-white/[0.08] flex flex-col justify-between shadow-lg relative group transition-all duration-300"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#2DD4BF]/30 to-transparent group-hover:via-[#2DD4BF] transition-all" />

              <div className="w-10 h-10 rounded-xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 flex items-center justify-center mb-4">
                {item.icon}
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1 tracking-tight text-[#2DD4BF]">
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
