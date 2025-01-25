import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      id="home"
      className="bg-gradient-to-b from-[#FFD7AE] to-[#FFECAE] h-screen"
    >
      <header className="flex justify-between items-center px-5 md:px-10 py-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[40px] w-auto md:h-[60px]"
          />
        </motion.div>

        <nav className="flex mt-5 space-x-2 md:space-x-9">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer text-black font-bold text-sm md:text-lg font-OsnovaPro"
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="produtos"
              smooth={true}
              duration={500}
              className="cursor-pointer text-black font-bold text-sm md:text-lg font-OsnovaPro"
            >
              Produtos
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="contato"
              smooth={true}
              duration={500}
              className="cursor-pointer text-black font-bold text-sm md:text-lg font-OsnovaPro"
            >
              Contato
            </Link>
          </motion.div>
        </nav>
      </header>

      <main className="flex flex-col md:flex-row items-center justify-between md:px-10 h-[calc(100%-80px)]">
        <motion.img
          src="/linha1.png"
          alt="Background"
          className="absolute top-2/4 left-100 right-0 bottom-0 object-cover hidden lg:block lg:h-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2 relative">
          <motion.img
            src="/perfume.png"
            alt="Perfume"
            className="max-w-full h-auto z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </div>

        <div className="md:ml-16 md:w-1/2 order-2 md:order-1 text-center md:text-left relative z-20">
          <motion.h1
            className="text-black font-Mylierka text-7xl md:text-8xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Beleza
          </motion.h1>
          <motion.h2
            className="text-[#E69D20] font-OsnovaPro text-3xl md:text-4xl mt-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            e Bem-Estar
          </motion.h2>
          <motion.p
            className="text-black font-OsnovaPro text-sm md:text-lg mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Somos uma loja dedicada à venda de <br />
            cosméticos e produtos de beleza que <br />
            atendem a todos os públicos. Nosso <br />
            objetivo é oferecer qualidade, <br />
            variedade e praticidade para <br />
            realçar a sua beleza <br />
            no dia a dia.
          </motion.p>
        </div>
      </main>
    </div>
  );
}

export default Home;
