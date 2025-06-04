
import { Scissors, Clock, MapPin, Phone, Star, Users, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getServices, getHairStyles } from "@/scripts/script1.js";

const Index = () => {
  // ...dentro del componente Index...
  const apiServices = null; // o datos de API
  const apiHairStyles = null; // o datos de API

  const services = getServices(apiServices);
  const hairStyles = getHairStyles(apiHairStyles);

  // Funciones de navegación
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReservarCita = () => {
    // Aquí puedes agregar lógica para abrir un modal, redirigir a una página de reservas, etc.
    alert("Redirigiendo a sistema de reservas...");
    // window.open('tel:+1234567890'); // Para llamar directamente
    // window.location.href = '/reservas'; // Para redirigir a página de reservas
  };

  const handleLlamarAhora = () => {
    window.open('tel:+15551234567');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-brand">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={scrollToTop}>
            <Scissors className="h-8 w-8 text-brand-primary" />
            <h1 className="text-2xl font-bold text-brand-gradient">
              Bella Estilo
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('servicios')} 
              className="text-gray-700 hover-brand-primary transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('catalogo')} 
              className="text-gray-700 hover-brand-primary transition-colors"
            >
              Catálogo
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-gray-700 hover-brand-primary transition-colors"
            >
              Contacto
            </button>
          </nav>
          <Button 
            onClick={handleReservarCita}
            className="bg-brand-gradient hover:opacity-90 text-white"
          >
            Reservar Cita
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-brand-gradient">
              Tu Belleza,
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 text-brand-gradient">
              Nuestra Pasión
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Descubre la experiencia única en cuidado capilar. Nuestro equipo de estilistas profesionales 
              está aquí para realzar tu belleza natural con las últimas tendencias y técnicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleLlamarAhora}
                className="bg-brand-gradient transform hover:scale-105 transition-all duration-200 text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('servicios')}
                className="border-brand-primary text-brand-primary hover:bg-rose-50 transform hover:scale-105 transition-all duration-200"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-brand-gradient">
              Nuestros Servicios
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios profesionales para cuidar y embellecer tu cabello
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-block p-3 rounded-full group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-rose-100 to-purple-100">
                      <IconComponent className="h-8 w-8 text-brand-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-2xl font-bold text-brand-gradient">
                      {service.price}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-100/50 to-purple-100/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="mb-4 inline-block p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Clock className="h-10 w-10 text-rose-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">Horarios Flexibles</h4>
              <p className="text-gray-600">Abierto de lunes a sábado con horarios convenientes para ti</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-4 inline-block p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Star className="h-10 w-10 text-rose-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">Calidad Premium</h4>
              <p className="text-gray-600">Productos de alta gama y técnicas profesionales certificadas</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-4 inline-block p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Heart className="h-10 w-10 text-rose-500" />
              </div>
              <h4 className="text-xl font-bold mb-2">Atención Personalizada</h4>
              <p className="text-gray-600">Cada cliente es único, por eso adaptamos nuestros servicios a ti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Styles Catalog */}
      <section id="catalogo" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-brand-gradient">
              Catálogo de Estilos
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra variedad de cortes, peinados y tratamientos. Cada estilo está diseñado para realzar tu belleza única.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{style.name}</h4>
                  <p className="text-gray-600 mb-4">{style.description}</p>
                  <Button 
                    className="w-full transform hover:scale-105 transition-all duration-200 bg-brand-gradient text-white"
                  >
                    Ver Más Detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-brand-primary text-brand-primary hover:bg-rose-50 transform hover:scale-105 transition-all duration-200"
            >
              Ver Todos los Estilos
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4 text-white bg-brand-gradient">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">¡Reserva Tu Cita Hoy!</h3>
              <p className="text-xl mb-8 opacity-90">
                Estamos aquí para hacer realidad el look que siempre has soñado. 
                Contáctanos y descubre la diferencia de un servicio profesional.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6" />
                  <span>Calle Principal 123, Centro, Ciudad</span>
                </div>
                <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLlamarAhora}>
                  <Phone className="h-6 w-6" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6" />
                  <span>Lun-Sáb: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6">Solicitar Información</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 text-white"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 text-white"
                />
                <input
                  type="tel"
                  placeholder="Tu teléfono"
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 text-white"
                />
                <textarea
                  placeholder="¿Qué servicio te interesa?"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 text-white resize-none"
                ></textarea>
                <Button 
                  className="w-full bg-white text-rose-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4 cursor-pointer" onClick={scrollToTop}>
            <Scissors className="h-6 w-6 text-brand-accent" />
            <span className="text-xl font-bold">Bella Estilo</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 Bella Estilo. Todos los derechos reservados.
          </p>
          <p className="text-gray-400">
            Transformando tu belleza, un corte a la vez ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
