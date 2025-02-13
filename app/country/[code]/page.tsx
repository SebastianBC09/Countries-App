import { Suspense } from 'react';
import { CountryDetailPage } from '@/components/pages/CountryDetailPage';

type PageProps = {
  params: { code: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function CountryPage({ params }: PageProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-gray-50 to-gray-100
                    dark:from-gray-900 dark:to-gray-800">
        <div className="w-16 h-16 border-4 border-blue-500 rounded-full
                     border-t-transparent animate-spin">
        </div>
      </div>
    }>
      <CountryDetailPage code={params.code} />
    </Suspense>
  );
}
