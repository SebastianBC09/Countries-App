import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CountryDetail } from '@/lib/types/country';

interface BordersWidgetProps {
  borders: CountryDetail['borders'];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

export const BordersWidget = ({ borders }: BordersWidgetProps) => {
  if (!borders?.length) return null;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Bordering Countries
      </h2>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {borders.map((border) => border && (
          <motion.div
            key={border.countryCode}
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={`/country/${border.countryCode}`}>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors">
                <p className="font-medium text-gray-900 dark:text-white">
                  {border.commonName}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {border.countryCode}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
