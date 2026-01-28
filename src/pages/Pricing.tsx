/**
 * Pricing Page Component
 *
 * Displays pricing plans for the World Tour app
 * Features:
 * - Navigation bar
 * - Three pricing tiers (Basic, Pro, Enterprise)
 * - Responsive layout (stacks vertically on mobile)
 * - Hover effects on pricing cards
 */
import NavBar from "../components/NavBar.tsx";
import PricingBox from "../components/PricingBox.tsx";

function Pricing() {
  return (
    <div className="h-[calc(100vh-2.5rem)] m-5 max-[54rem]:h-auto transition-all duration-600">
      {/* Navigation bar */}
      <NavBar />

      {/* Pricing plans container */}
      <div className="flex justify-center items-center gap-10 mt-20 h-[75%]  max-[54rem]:flex-col max-[54rem]:h-auto transition-all duration-600">
        {/* Basic Plan */}
        <PricingBox
          className={"h-[75%] border-blue-500/55 hover:border-blue-500"}
        >
          <div className="text-center text-2xl font-bold mb-4">Basic Plan</div>
          <div className="text-center text-4xl font-bold mb-4">$5/month</div>
          <ul className="list-['✓'] mb-4">
            <li>Access to basic features</li>
            <li>Basic email support</li>
            <li>Up to 2 users</li>
          </ul>
        </PricingBox>

        {/* Pro Plan (featured - taller) */}
        <PricingBox
          className={" h-[90%] border-[#F7C52D]/65 hover:border-[#F7C52D]"}
        >
          <div className="text-center text-[#F7C52D] text-2xl font-bold mb-4">
            Pro Plan
          </div>
          <div className="text-center text-4xl font-bold mb-4">$15/month</div>
          <ul className="list-['✓'] mb-4">
            <li>All Basic Plan features</li>
            <li>Priority email support</li>
            <li>Up to 5 users</li>
            <li>Advanced analytics</li>
          </ul>
        </PricingBox>

        {/* Enterprise Plan */}
        <PricingBox
          className={"h-[75%] border-blue-500/55 hover:border-blue-500"}
        >
          <div className="text-center text-2xl font-bold mb-4">
            Enterprise Plan
          </div>
          <div className="text-center text-4xl font-bold mb-4">$30/month</div>
          <ul className="list-['✓'] mb-4">
            <li>All Pro Plan features</li>
            <li>Dedicated support</li>
            <li>Unlimited users</li>
            <li>Custom integrations</li>
          </ul>
        </PricingBox>
      </div>
    </div>
  );
}

export default Pricing;
