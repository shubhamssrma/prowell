import { ShieldCheck } from "lucide-react";

export function ProductBenefits() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <ShieldCheck className="w-12 h-12 text-green-600 mx-auto" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Key Benefits
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Restores intestinal microflora balance",
            "Reduces diarrhea & indigestion",
            "Suppresses harmful pathogens",
            "Enhances immunity & antioxidant activity",
            "Produces SCFAs to improve gut pH",
            "Thermo-stable & pellet compatible",
          ].map((benefit, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 flex gap-4"
            >
              <span className="text-green-600 text-xl">✔</span>
              <p className="text-sm text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
