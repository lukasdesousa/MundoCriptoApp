import { motion } from "framer-motion";

interface SlideUpProps {
  children: React.ReactNode;
  isVisible: boolean;
  duration?: number;
  delay?: number;
}

const FadeIn = ({ children, isVisible, duration = 0.3, delay = 0 }: SlideUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ display: isVisible ? "block" : "none", width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
