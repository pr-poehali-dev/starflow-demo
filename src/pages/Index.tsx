import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductGrid } from '@/components/ProductGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <ProductGrid title="Популярные товары" limit={4} />
        <ProductGrid title="Новинки" />
      </main>
      
      <footer className="border-t bg-muted/20 py-12">
        <div className="container px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-starflow-purple to-starflow-pink flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-2xl font-bold text-foreground">StarFlow</span>
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              Демо-версия маркетплейса с современными технологиями. 
              Все функции работают, кроме реальной оплаты.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;