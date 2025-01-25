import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

function Contato() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="contato"
      className="bg-[#FFE7AD] py-10 flex flex-col items-center text-center relative"
    >
      <motion.h1
        ref={ref1}
        className="text-black font-SansitaOne text-4xl mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView1 ? 1 : 0, scale: inView1 ? 1 : 0.8 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        Entre em contato
      </motion.h1>
      <motion.div
        ref={ref2}
        className="flex flex-col gap-6 text-black text-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: inView2 ? 1 : 0, scale: inView2 ? 1 : 0.9 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
        >
          <img src="/localizacao.png" alt="Localização" className="w-6 h-6" />
          <span className="font-OsnovaPro">
            Av. Pres. Vargas, 417 - Alto Maron
          </span>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
        >
          <img src="/sacola.png" alt="Link de Compra" className="w-6 h-6" />
          <a
            href="https://www.natura.com.br/consultoria/dorileneneres"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-OsnovaPro no-underline hover:opacity-80"
          >
            Compre com nosso link
          </a>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
          <a
            href="https://wa.me/5577988299026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-OsnovaPro no-underline hover:opacity-80"
          >
            +55 77 98829-9026
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full flex items-center justify-between mt-10 px-6 lg:px-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <span className="text-black text-sm font-OsnovaPro">© RVariedades</span>
        <div className="absolute left-1/2 transform md:-translate-x-1/2 flex gap-3 md:gap-6 text-black text-xs md:text-sm font-medium">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:opacity-80 font-OsnovaPro"
          >
            Home
          </Link>
          <Link
            to="produtos"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:opacity-80 font-OsnovaPro"
          >
            Produtos
          </Link>
          <Link
            to="contato"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:opacity-80 font-OsnovaPro"
          >
            Contato
          </Link>
        </div>
      </motion.div>
      <motion.img
        src="/circuloInferior.png"
        alt="Ícone Inferior"
        className="hidden lg:block w-auto h-[30px] absolute bottom-0 right-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <motion.img
        src="/vectorSuperior.png"
        alt="Ícone Superior"
        className="hidden lg:block w-auto h-[100px] absolute top-0 left-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Contato;
