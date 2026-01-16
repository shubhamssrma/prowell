import { useAppSelector } from "@/store/hooks";


type ApplicationSection = {
  title: string;
  items: string[];
};


export function DosageSection() {
  const { productDetails } = useAppSelector(state => state.productReducer)

  const parseApplicationUsage = (
    text?: string
  ): ApplicationSection[] => {
    if (!text) return [];

    const lines: string[] = text
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);

    const sections: ApplicationSection[] = [];
    let currentSection: ApplicationSection | null = null;

    for (const line of lines) {
      // Section heading
      if (line.endsWith(':')) {
        currentSection = {
          title: line.replace(/:$/, ''),
          items: [],
        };
        sections.push(currentSection);
        continue;
      }

      // Bullet points
      if (line.startsWith('•') || line.startsWith('o')) {
        currentSection?.items.push(
          line.replace(/^•|^o/, '').trim()
        );
        continue;
      }

      // Normal text
      currentSection?.items.push(line);
    }

    return sections;
  };


  const sections = parseApplicationUsage(
    productDetails?.applicationUsage
  );


  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Dosage & Application
        </h2>
        <div className="space-y-8 mb-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 bg-green-50"
            >
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                {section.title}
              </h3>

              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="overflow-x-auto rounded-xl border">
          <table className="min-w-full text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Species</th>
                <th className="px-6 py-4 text-left">Dosage (g / MT Feed)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {productDetails?.dosage.map((obj, i) => {
                return (
                  <tr key={i}>
                    <td className="px-6 py-4">{obj.species.name}</td>
                    <td className="px-6 py-4">{obj.dosage}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>


      </div>
    </section>
  );
}
