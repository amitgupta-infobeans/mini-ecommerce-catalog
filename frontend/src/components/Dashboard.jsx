import { useApiHandler } from "../hooks/useApiHandler";
import ProductCard from "./ProductCard";

const Dashboard = () => {
  const { data: products } = useApiHandler("product", "get");

  return (
    <div className="p-2 flex flex-wrap ">
      {/* Card */}
      {products.length>0 &&
        products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              title={product.title}
              description={product.description}
              price={product.price}
              productImage={product.productImage}
              _id={product._id}
            />
          );
        })}
    </div>
  );
};

export default Dashboard;
