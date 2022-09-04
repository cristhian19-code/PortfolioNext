import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Inicio", to: "/" },
  { name: "Proyectos", to: "/proyectos" },
];

const itemVariants = {
  closed: {
      opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
      transition: {
          staggerChildren: 0.8,
          staggerDirection: -1
      }
  },
  open: {
      transition: {
          delayChildren: 1,
          staggerChildren: 0.8,
          staggerDirection: 1
      }
  }
};

const Sidebar = ({open}) => {

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ width: 0 }}
          style={{
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 100,
            backgroundColor: 'white'
          }}
          animate={{
            width: '100%'
          }}
          exit={{
            width: 0,
            transition: { delay: 0.8, duration: 0.8 }
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%'
            }}
            className="container"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {links.map(({ name, to },i) => (
              <motion.a
                className="sidebar-link"
                style={{
                  color: 'black',
                  fontSize: 30,
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}
                variants={itemVariants}
                key={i}
                href={to}
                whileHover={{ scale: 1.1 }}
              >
                {name}
              </motion.a>
            ))}
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Sidebar

