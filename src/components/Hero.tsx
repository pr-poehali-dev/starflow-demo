import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { banners } from '@/data/mockData';

export const Hero = () => {
  return (
    <section className="py-8">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {banners.map((banner, index) => (
            <Card
              key={banner.id}
              className={`relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} opacity-90`} />
              <div className="relative p-8 md:p-12 text-white min-h-[300px] flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-lg opacity-90 max-w-md">
                    {banner.subtitle}
                  </p>
                </div>
                
                <div className="pt-6">
                  <Button
                    size="lg"
                    className="bg-white text-starflow-purple hover:bg-white/90 font-semibold px-8"
                  >
                    {banner.buttonText}
                  </Button>
                </div>

                <div className="absolute -right-20 -bottom-20 w-64 h-64 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src={banner.image}
                    alt=""
                    className="w-full h-full object-cover rounded-full transform rotate-12 group-hover:rotate-6 transition-transform duration-500"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};