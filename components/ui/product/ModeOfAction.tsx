import { Activity } from "lucide-react";

export function ModeOfAction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <Activity className="w-12 h-12 text-green-600 mx-auto" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Mode of Action
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="border rounded-2xl p-8 bg-gray-50">
            <h3 className="font-semibold text-green-700">
              Bacillus subtilis
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Aerobic strain active in upper & mid GIT, producing digestive enzymes
              and supporting beneficial microflora.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-2xl p-8 bg-gray-50">
            <h3 className="font-semibold text-green-700">
              Bacillus licheniformis
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Facultative anaerobe acting in mid & lower GIT, producing vitamins
              and inhibiting pathogenic bacteria.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-2xl p-8 bg-green-50">
            <h3 className="font-semibold text-green-800">
              Synergistic Effect
            </h3>
            <p className="mt-4 text-sm text-gray-700">
              Combined strains ensure complete GIT coverage, toxin reduction,
              and improved mucosal health.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
