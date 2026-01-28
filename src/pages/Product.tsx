/**
 * Product Page Component
 *
 * Information page about the World Tour product
 * Features:
 * - Navigation bar
 * - Hiking image
 * - Product description (placeholder Lorem ipsum text)
 * - Responsive layout (column on mobile, row on desktop)
 */
import NavBar from "../components/NavBar.tsx";

function Product() {
  return (
    <div className="h-[calc(100vh-2.5rem)] m-5">
      {/* Navigation bar */}
      <NavBar />

      {/* Main content area with image and text */}
      <div className="flex justify-center items-center gap-4 my-6 mx-2 h-3/4 max-md:flex-col">
        {/* Product image */}
        <img
          src="/src/assets/img/hiking.jpg"
          alt="Hiking Image"
          className="w-[50%] max-md:w-full"
        />

        {/* Product description text */}
        <div className="flex flex-col gap-4 w-[50%] text-3xl text-[#cbcbcb] max-xl:text-2xl max-lg:text-lg max-md:text-sm max-md:w-full max-md:text-center transition-all duration-300">
          {/* Placeholder text paragraph 1 */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel
            obcaecati inventore, atque sit sed, natus id molestias nihil tempora
            itaque error numquam delectus consectetur, magni sunt ut voluptates
            quas.
          </p>

          {/* Placeholder text paragraph 2 */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel
            obcaecati inventore, atque sit sed, natus id molestias nihil tempora
            itaque error numquam delectus consectetur, magni sunt ut voluptates
            quas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
