import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { categories } from '@/data/mockData';

export const CategoryGrid = () => {
  return (
    <section className="py-12">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-foreground mb-8">Категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-starflow-purple to-starflow-pink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={category.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-sm">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {category.productCount} товаров
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};