export function DosageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Dosage & Application
        </h2>

        <div className="overflow-x-auto rounded-xl border">
          <table className="min-w-full text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Species</th>
                <th className="px-6 py-4 text-left">Dosage (g / MT Feed)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                ["Poultry", "100 – 200"],
                ["Ruminants", "200 – 300"],
                ["Swine", "200 – 300"],
                ["Shrimp / Fish", "60 – 100"],
              ].map(([s, d], i) => (
                <tr key={i}>
                  <td className="px-6 py-4">{s}</td>
                  <td className="px-6 py-4">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Compatible with anticoccidials and standard coccidiosis control programs.
        </p>

      </div>
    </section>
  );
}
