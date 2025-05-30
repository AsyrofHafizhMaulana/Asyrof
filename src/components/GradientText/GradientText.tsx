import React from 'react';
import './GradientText.css'; // Pastikan CSS-nya ada

interface GradientTextProps {
  children: React.ReactNode;
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  colors,
  animationSpeed = 40,
  showBorder = false,
  className = ''
}) => {
  const gradient = `linear-gradient(270deg, ${colors.join(', ')})`;
  const style = {
    backgroundImage: gradient,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: `gradientMove ${animationSpeed}s ease infinite`,
    border: showBorder ? '2px solid #fff' : 'none',
    display: 'inline-block',
    fontWeight: 700
  };

  return (
    <span className={`gradient-text ${className}`} style={style}>
      {children}
    </span>
  );
};

export default GradientText;
