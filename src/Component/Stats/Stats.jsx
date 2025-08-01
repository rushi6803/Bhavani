import React from 'react';
import './Stats.css';
import motorBg from '../assets/main2.jpg'; 
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: 9000, suffix: '+', label: 'Total Selling' },
  { number: 50, suffix: 'K+', label: 'Trusted Clients' },
  { number: 1, suffix: 'K+', label: 'Different Designed' },
  { number: 20, suffix: '+', label: 'Team Members' },
];

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      className="stats-section"
      style={{
        backgroundImage: `linear-gradient(rgba(35, 35, 38, 0.8), rgba(37, 37, 38, 0.8)), url(${motorBg})`,
      }}
    >
      <div className="stats-grid" ref={ref}>
        {stats.map((item, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2>
              {inView && (
                <CountUp
                  end={item.number}
                  duration={2}
                  separator=","
                  suffix={item.suffix}
                />
              )}
            </h2>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
