import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/mockData';

interface ProductGridProps {
  title?: string;
  limit?: number;
}

export const ProductGrid = ({ title = 'Популярные товары', limit }: ProductGridProps) => {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {limit && (
            <button className="text-primary hover:text-primary/80 font-medium">
              Показать все
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};