import { motion } from 'framer-motion';
import type { CountryDetail } from '@/lib/types/country';

interface CountryHeaderProps {
  country: CountryDetail;
}

export const CountryHeader = ({ country }: CountryHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative p-6 md:p-8"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            src={country.flag}
            alt={`Flag of ${country.commonName}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            {country.commonName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            {country.officialName}
          </motion.p>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100 text-sm font-medium"
          >
            {country.region}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};
