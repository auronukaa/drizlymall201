import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

const ProductList = ({ data }) => {
  return (
    <div className="space-y-5 sm:space-y-12">
      {data?.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-7 sm:mx-0">
        {data.data.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
