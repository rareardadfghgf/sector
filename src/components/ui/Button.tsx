import { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'whatsapp';
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ variant = 'primary', children, className = '', icon, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-[#2E5C46] text-white hover:bg-[#234635] shadow-lg hover:shadow-xl", // Sector Green
    outline: "border-2 border-[#2E5C46] text-[#2E5C46] hover:bg-[#2E5C46] hover:text-white",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-xl"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
}
