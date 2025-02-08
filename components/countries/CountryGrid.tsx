import Link from 'next/link';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import type { CountryListItem } from '@/lib/types/country';

interface CountryGridProps {
  countries: CountryListItem[];
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const CountryGrid = ({ countries }: CountryGridProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6"
    >
      {countries.map((country, index) => (
        <motion.div key={country.countryCode} variants={item}>
          <Link href={`/country/${country.countryCode}`}>
            <Card
              className="group cursor-pointer p-6 h-full"
              animate={false}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="space-y-4"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {country.countryCode}
                </span>
                <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {country.name}
                </h2>
              </motion.div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
