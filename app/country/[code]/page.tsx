import { CountryDetailPage } from "@/components/pages/CountryDetailPage";

interface CountryPageProps {
  params: {
    code: string;
  };
}

export default function CountryPage({ params: { code } }: CountryPageProps) {
  return <CountryDetailPage code={code} />;
}
