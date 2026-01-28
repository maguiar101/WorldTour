/**
 * CountryItem Component
 *
 * Displays a single country card with flag emoji and name
 * Used in the countries grid view
 */
function CountryItem({ country: country }: { country: any }) {
  return (
    <li className="flex flex-col items-center w-50 rounded-2xl bg-gray-500/55 text-white mx-2">
      {/* Country flag emoji */}
      <span className="text-5xl">{country.emoji}</span>
      {/* Country name */}
      <span className="text-2xl">{country.country}</span>
    </li>
  );
}

export default CountryItem;
