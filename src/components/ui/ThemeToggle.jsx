import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext.jsx';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative flex items-center w-14 h-8 rounded-full px-1 bg-slate-200 dark:bg-navy-700 border border-slate-300 dark:border-white/10 transition-colors duration-300"
    >
      <motion.div
        className="w-6 h-6 rounded-full bg-white dark:bg-navy-900 shadow-md flex items-center justify-center"
        animate={{ x: isDark ? 22 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon size={14} className="text-brand-emerald" />
        ) : (
          <Sun size={14} className="text-brand-blue" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;