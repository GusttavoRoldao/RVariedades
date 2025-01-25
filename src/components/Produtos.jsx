import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Produtos() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="produtos" className="bg-[#FCFCF8] py-10 relative">
      <img
        src="/circulo.png"
        alt="Decorativo Superior Esquerdo"
        className="hidden lg:block absolute top-0 left-0 w-auto h-[50px]"
      />
      <img
        src="/circuloInferior.png"
        alt="Decorativo Inferior Direito"
        className="hidden lg:block absolute bottom-0 right-0 w-auto h-[50px]"
      />
      <motion.h1
        className="text-black text-center font-SansitaOne text-4xl mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: inView1 || inView2 || inView3 ? 1 : 0,
          y: inView1 || inView2 || inView3 ? 0 : 50,
        }}
        transition={{ duration: 0.8 }}
      >
        Produtos
      </motion.h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:py-12 md:px-16">
        <motion.div
          ref={ref1}
          className="bg-[#FFF4DB] rounded-xl p-5 flex flex-col justify-between relative w-[280px] md:w-[320px] lg:w-[400px] h-[300px] md:h-[320px] lg:h-[350px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView1 ? 1 : 0, scale: inView1 ? 1 : 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-black font-SansitaOne text-lg md:text-base lg:text-xl absolute top-5 left-5">
            Maquiagem e Cuidados <br /> com a Pele
          </p>
          <img
            src="/circle.png"
            className="absolute top-0 md:top-0 right-0 md:right-0 h-[80px] md:h-[90px] lg:h-[100px]"
          />
          <img
            src="/maquiagem.png"
            className="absolute bottom-0 right-0 h-[170px] md:h-[160px] lg:h-64"
          />
        </motion.div>
        <motion.div
          ref={ref2}
          className="bg-[#FFD9B6] rounded-xl p-5 flex flex-col justify-between relative w-[280px] md:w-[320px] lg:w-[400px] h-[300px] md:h-[320px] lg:h-[350px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView2 ? 1 : 0, scale: inView2 ? 1 : 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-black font-SansitaOne text-lg md:text-base lg:text-xl absolute top-5 left-5">
            Perfumes e <br /> Fragrâncias
          </p>
          <img
            src="/circle.png"
            className="absolute top-0 md:top-0 right-0 md:right-0 h-[80px] md:h-[90px] lg:h-[100px]"
          />
          <img
            src="/fragancias.png"
            className="absolute bottom-0 right-0 h-[170px] md:h-[160px] lg:h-56"
          />
        </motion.div>
        <motion.div
          ref={ref3}
          className="bg-[#FFE4DB] rounded-xl p-5 flex flex-col justify-between relative w-[280px] md:w-[320px] lg:w-[400px] h-[300px] md:h-[320px] lg:h-[350px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView3 ? 1 : 0, scale: inView3 ? 1 : 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-black font-SansitaOne text-lg md:text-base lg:text-xl absolute top-5 left-5">
            Moda <br /> Íntima
          </p>
          <img
            src="/circle.png"
            className="absolute top-0 md:top-0 right-0 md:right-0 h-[80px] md:h-[90px] lg:h-[100px]"
          />
          <img
            src="/lingerie.png"
            className="absolute bottom-0 right-0 h-[170px] md:h-[160px] lg:h-56"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Produtos;
