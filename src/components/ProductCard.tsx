import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Product } from '@/data/mockData';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.originalPrice && (
            <Badge className="absolute top-3 left-3 bg-starflow-pink text-white">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 rounded-full transition-colors ${
              isFavorite(product.id)
                ? 'text-starflow-pink bg-white/90 hover:bg-white'
                : 'text-white bg-black/50 hover:bg-black/70'
            }`}
            onClick={handleToggleFavorite}
          >
            <Icon 
              name="Heart" 
              size={18} 
              className={isFavorite(product.id) ? 'fill-current' : ''} 
            />
          </Button>
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="secondary" className="text-white bg-black/70">
                Нет в наличии
              </Badge>
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={12}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          <h3 className="font-medium text-foreground line-clamp-2 leading-tight">
            {product.title}
          </h3>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-starflow-purple hover:bg-starflow-purple/90 text-white"
            >
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              {product.inStock ? 'В корзину' : 'Недоступно'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};