import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleCallRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock call request
    alert(`Спасибо, ${name}! Мы перезвоним вам на номер ${phone}`);
    setName('');
    setPhone('');
  };

  const services = [
    {
      name: 'Замена дисплейного модуля',
      description: 'Полная замена экрана с тачскрином',
      price: 'от 2500₽',
      icon: 'Smartphone'
    },
    {
      name: 'Замена аккумулятора',
      description: 'Оригинальные батареи с гарантией',
      price: 'от 1200₽',
      icon: 'Battery'
    },
    {
      name: 'Обновление ПО',
      description: 'Прошивка и настройка системы',
      price: 'от 800₽',
      icon: 'Download'
    },
    {
      name: 'Чистка от коррозии',
      description: 'После попадания жидкости',
      price: 'от 1500₽',
      icon: 'Droplets'
    }
  ];

  const advantages = [
    {
      title: 'Быстрый ремонт',
      description: 'Большинство работ за 30 минут',
      icon: 'Zap'
    },
    {
      title: 'Гарантия качества',
      description: 'До 12 месяцев на все услуги',
      icon: 'Shield'
    },
    {
      title: 'Оригинальные детали',
      description: 'Только сертифицированные запчасти',
      icon: 'CheckCircle'
    },
    {
      title: 'Диагностика бесплатно',
      description: 'Точное определение неисправности',
      icon: 'Search'
    }
  ];

  const priceList = [
    { category: 'iPhone', basic: '1500₽', medium: '3500₽', complex: '8500₽' },
    { category: 'Samsung', basic: '1200₽', medium: '2800₽', complex: '6500₽' },
    { category: 'Xiaomi', basic: '1000₽', medium: '2200₽', complex: '4500₽' },
    { category: 'Huawei', basic: '1100₽', medium: '2500₽', complex: '5200₽' }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      text: 'Заменили экран на iPhone за 20 минут. Отличное качество!',
      rating: 5
    },
    {
      name: 'Мария К.',
      text: 'Восстановили телефон после воды. Профессионалы своего дела!',
      rating: 5
    },
    {
      name: 'Дмитрий П.',
      text: 'Быстро, качественно, недорого. Рекомендую!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-tech-light to-white font-rubik">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-tech-blue to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Smartphone" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-tech-dark">Дройд</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-tech-gray hover:text-tech-blue transition-colors">О нас</a>
              <a href="#prices" className="text-tech-gray hover:text-tech-blue transition-colors">Цены</a>
              <a href="#contacts" className="text-tech-gray hover:text-tech-blue transition-colors">Контакты</a>
              <a href="#jobs" className="text-tech-gray hover:text-tech-blue transition-colors">Вакансии</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Icon name="Phone" size={16} className="text-tech-blue" />
                  <span className="text-tech-dark font-semibold">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Mail" size={16} className="text-tech-blue" />
                  <span className="text-tech-gray">info@droid.ru</span>
                </div>
              </div>
              <Button 
                onClick={() => document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-tech-blue hover:bg-blue-600"
              >
                <Icon name="Phone" size={16} className="mr-1" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-white/20 text-white border-white/30">
                Ремонт телефонов с 2020 года
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Профессиональный
                <span className="block text-yellow-300">ремонт телефонов</span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Восстанавливаем смартфоны всех популярных марок. 
                Быстро, качественно, с гарантией до 12 месяцев.
              </p>

              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white">Apple</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Samsung</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Xiaomi</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">Huawei</Badge>
              </div>
            </div>

            <Card id="callback-form" className="bg-white/95 backdrop-blur-sm animate-slide-in">
              <CardHeader>
                <CardTitle className="text-tech-dark">Обратный звонок</CardTitle>
                <CardDescription>Оставьте заявку и мы перезвоним в течение 5 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCallRequest} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="border-gray-300"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-tech-blue hover:bg-blue-600">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить мне
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tech-dark mb-4">Наши преимущества</h2>
            <p className="text-tech-gray text-lg">Почему клиенты выбирают именно нас</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-tech-blue to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-tech-dark mb-2">{advantage.title}</h3>
                  <p className="text-tech-gray">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tech-dark mb-4">Популярные услуги</h2>
            <p className="text-tech-gray text-lg">Основные виды ремонта с указанием стоимости</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-tech-blue/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={service.icon as any} size={24} className="text-tech-blue" />
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-tech-blue">{service.price}</span>
                    <Button variant="outline" size="sm" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price List */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tech-dark mb-4">Прайс-лист</h2>
            <p className="text-tech-gray text-lg">Цены на ремонт по брендам и сложности</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceList.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-tech-dark">{item.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-tech-gray">Базовый</span>
                    <span className="font-bold text-green-600">{item.basic}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-tech-gray">Средний</span>
                    <span className="font-bold text-yellow-600">{item.medium}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-tech-gray">Сложный</span>
                    <span className="font-bold text-red-600">{item.complex}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tech-dark mb-4">Отзывы клиентов</h2>
            <p className="text-tech-gray text-lg">Что говорят о нашей работе</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-tech-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{review.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-tech-dark">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-tech-gray italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Examples */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tech-dark mb-4">Примеры работ</h2>
            <p className="text-tech-gray text-lg">До и после ремонта</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-tech-dark">Качественное восстановление</h3>
              <p className="text-tech-gray text-lg">
                Мы используем только оригинальные запчасти и современное оборудование. 
                Каждый ремонт проходит тщательную диагностику и тестирование.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span>Оригинальные комплектующие</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span>Полное тестирование после ремонта</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span>Гарантия на все виды работ</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/45da707c-a6e0-48c7-a54b-bb5f44fe39f8.jpg" 
                alt="До и после ремонта телефона"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-tech-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-tech-blue" />
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-tech-blue" />
                  <span className="text-lg">info@droid.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-tech-blue" />
                  <span className="text-lg">г. Москва, ул. Тверская, 1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-tech-blue" />
                  <span className="text-lg">Пн-Вс: 9:00 - 21:00</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-tech-dark">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-tech-dark">
                    <Icon name="Send" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-tech-dark">
                    <Icon name="Instagram" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Быстрая заявка</CardTitle>
                  <CardDescription className="text-gray-300">Опишите проблему, мы поможем</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
                    <Input placeholder="Телефон" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
                    <Input placeholder="Модель телефона" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
                    <Button className="w-full bg-tech-blue hover:bg-blue-600">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-tech-blue to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Smartphone" size={20} className="text-white" />
                </div>
                <span className="text-2xl font-bold">Дройд</span>
              </div>
              <p className="text-gray-400">
                Профессиональный сервис по ремонту мобильных устройств с 2020 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Меню</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#about" className="block hover:text-white transition-colors">О нас</a>
                <a href="#prices" className="block hover:text-white transition-colors">Цены</a>
                <a href="#contacts" className="block hover:text-white transition-colors">Контакты</a>
                <a href="#jobs" className="block hover:text-white transition-colors">Вакансии</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <div className="space-y-2 text-gray-400">
                <span className="block">Ремонт экранов</span>
                <span className="block">Замена батарей</span>
                <span className="block">Восстановление после воды</span>
                <span className="block">Обновление ПО</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <span className="block">+7 (495) 123-45-67</span>
                <span className="block">info@droid.ru</span>
                <span className="block">г. Москва, ул. Тверская, 1</span>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <span>© 2024 Дройд. Все права защищены.</span>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg"
          className="rounded-full w-16 h-16 bg-tech-blue hover:bg-blue-600 shadow-2xl animate-pulse"
          onClick={() => document.getElementById('callback-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Icon name="Phone" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Index;