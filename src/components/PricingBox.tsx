/**
 * PricingBox Component
 *
 * Reusable pricing card component
 * Features:
 * - Customizable content via children prop
 * - Customizable styling via className prop
 * - Hover effects (scale and shadow)
 * - "Choose Plan" button at bottom
 */

function PricingBox({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 w-[25%] h-[75%] border bg-black/15 text-white shadow-[1px_1px_1rem_rgba(255,255,255,0.25)] hover:scale-105 hover:shadow-[1px_1px_1.2rem_rgba(255,255,255,0.75)] rounded-2xl p-6 max-lg:w-[35%] max-[54rem]:w-[75%] transition-all duration-300 ${className}`}
    >
      {/* Pricing plan content (passed as children) */}
      {children}

      {/* Choose Plan button */}
      <button className="mt-auto bg-blue-500 text-white/75 hover:text-white py-2 px-2 rounded-xl hover:bg-blue-600 hover:shadow-[1px_1px_6px_white]/25 transition-all duration-300">
        Choose Plan
      </button>
    </div>
  );
}

export default PricingBox;
