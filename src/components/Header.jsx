import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Header() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="bg-[#F1F1F1] py-5 px-8 md:px-28 flex justify-between items-center"
    >
      <motion.img
        src="/natura.png"
        alt="Amostra 1"
        className="h-[60px] md:h-[90px] w-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src="/hinode.png"
        alt="Amostra 2"
        className="h-[60px] md:h-[90px] w-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src="/eudora.png"
        alt="Amostra 3"
        className="h-[60px] md:h-[90px] w-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src="/avon.png"
        alt="Amostra 4"
        className="h-[60px] md:h-[90px] w-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}

export default Header;
