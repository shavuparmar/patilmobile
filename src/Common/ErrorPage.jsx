import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Error404 from "../assets/NotFound.jpg";

export default function ErrorPage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen w-full px-4 text-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Image with pop-up animation */}
      <motion.img
        src={Error404}
        alt="404 Not Found"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      {/* Button with hover & bounce on load */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Visit Home Page
        </Link>
      </motion.div>
    </motion.div>
  );
}
