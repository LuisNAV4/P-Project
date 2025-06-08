
import { Scissors, ArrowLeft, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getHairStyles } from "@/scripts/script1.js";
import { useNavigate } from "react-router-dom";

const Estilos = () => {
  const navigate = useNavigate();
  const apiHairStyles = null;
  const hairStyles = getHairStyles(apiHairStyles);

  const handleVolver = () => {
    navigate('/');
  };

  const categories = [...new Set(hairStyles.map(style => style.category))];

  return (
    <div className="min-h-screen bg-gradient-brand">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={handleVolver}
              className="p-2 hover:bg-rose-50"
            >
              <ArrowLeft className="h-6 w-6 text-brand-primary" />
            </Button>
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-brand-primary" />
              <h1 className="text-2xl font-bold text-brand-gradient">
                Bella Estilo
              </h1>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/')}
            className="bg-brand-gradient hover:opacity-90 text-white"
          >
            Reservar Cita
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-gradient">
            Todos Nuestros Estilos
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explora nuestra colección completa de cortes, peinados y tratamientos. 
            Cada estilo ha sido cuidadosamente diseñado por nuestros estilistas profesionales.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="outline"
              className="border-brand-primary text-brand-primary bg-white hover:bg-rose-50"
            >
              Todos
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-gray-300 text-gray-600 bg-white hover:border-brand-primary hover:text-brand-primary hover:bg-rose-50"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="py-8 px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {hairStyles.map((style) => (
              <Card key={style.id} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="relative h-64 flex items-center justify-center bg-gradient-to-br from-rose-100 to-purple-100">
                  <img 
                    src={style.image} 
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-brand-primary">{style.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="h-4 w-4 text-brand-primary" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{style.name}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{style.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                    <Button 
                      size="sm"
                      className="bg-brand-gradient text-white transform hover:scale-105 transition-all duration-200"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-brand-gradient text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Te Gustó Algún Estilo?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nuestros estilistas profesionales están listos para crear el look perfecto para ti.
            ¡Reserva tu cita ahora!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-rose-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              Reservar Cita Ahora
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
              onClick={handleVolver}
            >
              Volver al Inicio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estilos;
