import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { PopulationData } from '@/lib/types/country';

interface PopulationChartProps {
  data: PopulationData;
}

export const PopulationChart = ({ data }: PopulationChartProps) => {
  const formatPopulation = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Population Growth
      </h2>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis
              dataKey="year"
              tick={{ fill: '#6B7280' }}
              tickMargin={10}
            />
            <YAxis
              tickFormatter={formatPopulation}
              tick={{ fill: '#6B7280' }}
              tickMargin={10}
            />
            <Tooltip
              formatter={(value: number) => [formatPopulation(value), 'Population']}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(4px)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: '#3B82F6' }}
              animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
