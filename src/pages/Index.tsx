import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Step {
  id: number;
  title: string;
  description: string;
  details: string[];
  timeEstimate: string;
  difficulty: 'easy' | 'medium' | 'hard';
  icon: string;
  completed: boolean;
}

const Index = () => {
  const [steps, setSteps] = useState<Step[]>([
    {
      id: 1,
      title: 'Проверка текущей скорости',
      description: 'Измерьте базовые показатели производительности',
      details: [
        'Откройте PageSpeed Insights (pagespeed.web.dev)',
        'Вставьте URL: densamed.ru',
        'Запишите показатели для мобильных и десктопа',
        'Скриншот результатов для сравнения'
      ],
      timeEstimate: '5 мин',
      difficulty: 'easy',
      icon: 'Gauge',
      completed: false
    },
    {
      id: 2,
      title: 'Установка плагина оптимизации',
      description: 'Автоматизируйте базовую оптимизацию WordPress',
      details: [
        'Войдите в админку WordPress (/wp-admin)',
        'Перейдите: Плагины → Добавить новый',
        'Найдите "WP Rocket" или "W3 Total Cache"',
        'Установите и активируйте плагин',
        'Включите минификацию CSS/JS и кеширование'
      ],
      timeEstimate: '10 мин',
      difficulty: 'easy',
      icon: 'Zap',
      completed: false
    },
    {
      id: 3,
      title: 'Сжатие изображений',
      description: 'Уменьшите размер всех картинок на сайте',
      details: [
        'Установите плагин "ShortPixel" или "Imagify"',
        'Перейдите в настройки плагина',
        'Выберите режим "Lossy" (оптимальное сжатие)',
        'Нажмите "Оптимизировать все изображения"',
        'Включите автоматическую оптимизацию новых фото'
      ],
      timeEstimate: '15 мин',
      difficulty: 'medium',
      icon: 'Image',
      completed: false
    },
    {
      id: 4,
      title: 'Подключение Cloudflare CDN',
      description: 'Ускорьте доставку контента по всему миру',
      details: [
        'Зарегистрируйтесь на cloudflare.com (бесплатно)',
        'Добавьте сайт densamed.ru',
        'Скопируйте NS-серверы Cloudflare',
        'Измените NS в настройках домена у регистратора',
        'Дождитесь активации (до 24 часов)',
        'Включите "Auto Minify" для CSS/JS/HTML'
      ],
      timeEstimate: '20 мин',
      difficulty: 'medium',
      icon: 'Cloud',
      completed: false
    },
    {
      id: 5,
      title: 'Отключение лишних плагинов',
      description: 'Удалите неиспользуемые расширения',
      details: [
        'Перейдите: Плагины → Установленные',
        'Деактивируйте плагины, которые не используете',
        'Удалите деактивированные плагины',
        'Проверьте работоспособность сайта',
        'Используйте Query Monitor для поиска медленных плагинов'
      ],
      timeEstimate: '10 мин',
      difficulty: 'easy',
      icon: 'Puzzle',
      completed: false
    },
    {
      id: 6,
      title: 'Оптимизация шрифтов',
      description: 'Ускорьте загрузку Google Fonts',
      details: [
        'Найдите подключение шрифтов в теме (header.php)',
        'Оставьте только используемые начертания',
        'Добавьте &display=swap к URL шрифта',
        'Или используйте плагин "OMGF" для локального хостинга',
        'Предзагрузите шрифты через <link rel="preload">'
      ],
      timeEstimate: '15 мин',
      difficulty: 'hard',
      icon: 'Type',
      completed: false
    },
    {
      id: 7,
      title: 'Включение Gzip-сжатия',
      description: 'Сжимайте файлы перед отправкой браузеру',
      details: [
        'Откройте файл .htaccess (в корне сайта)',
        'Добавьте код сжатия (см. документацию)',
        'Проверьте через giftofspeed.com/gzip-test',
        'Альтернатива: включите в настройках хостинга',
        'Проверьте заголовок Content-Encoding: gzip'
      ],
      timeEstimate: '10 мин',
      difficulty: 'medium',
      icon: 'Archive',
      completed: false
    }
  ]);

  const toggleStep = (id: number) => {
    setSteps(prevSteps =>
      prevSteps.map(step =>
        step.id === id ? { ...step, completed: !step.completed } : step
      )
    );
  };

  const completedCount = steps.filter(s => s.completed).length;
  const progress = (completedCount / steps.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return '';
    }
  };

  const resetProgress = () => {
    setSteps(prevSteps => prevSteps.map(step => ({ ...step, completed: false })));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block mb-4">
            <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none">
              Оптимизация densamed.ru
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Ускорение сайта за 7 шагов
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Пошаговая инструкция для увеличения скорости загрузки на 40-60%
          </p>
        </div>

        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border-2 border-purple-200 shadow-xl animate-bounce-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <Icon name="TrendingUp" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Прогресс оптимизации</h3>
                <p className="text-gray-600">{completedCount} из {steps.length} шагов выполнено</p>
              </div>
            </div>
            {completedCount > 0 && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={resetProgress}
                className="hover:bg-purple-50"
              >
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Сбросить
              </Button>
            )}
          </div>
          
          <Progress value={progress} className="h-4 mb-2" />
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 font-medium">{Math.round(progress)}% завершено</span>
            <span className="text-purple-600 font-semibold">
              {completedCount === steps.length ? '🎉 Готово!' : `Осталось ${steps.length - completedCount} ${steps.length - completedCount === 1 ? 'шаг' : 'шагов'}`}
            </span>
          </div>
        </Card>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card
              key={step.id}
              className={`p-6 transition-all duration-300 hover:shadow-2xl cursor-pointer border-2 ${
                step.completed
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-300'
                  : 'bg-white/80 backdrop-blur-sm border-purple-200 hover:border-purple-400'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => toggleStep(step.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl transition-all duration-300 ${
                  step.completed
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600 animate-bounce-in'
                    : 'bg-gradient-to-br from-purple-600 to-pink-600'
                }`}>
                  {step.completed ? (
                    <Icon name="CheckCheck" size={32} />
                  ) : (
                    <Icon name={step.icon} size={32} />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-2xl font-bold ${step.completed ? 'text-green-700 line-through' : 'text-gray-900'}`}>
                          {step.id}. {step.title}
                        </h3>
                        <Badge variant="outline" className={`${getDifficultyColor(step.difficulty)} text-white border-none`}>
                          {getDifficultyText(step.difficulty)}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-lg mb-3">{step.description}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Icon name="Clock" size={18} className="text-purple-600" />
                      <span className="text-purple-600 font-semibold">{step.timeEstimate}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4">
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <Icon name="ChevronRight" size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full transition-all duration-300 ${
                      step.completed
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStep(step.id);
                    }}
                  >
                    {step.completed ? (
                      <>
                        <Icon name="Check" size={20} className="mr-2" />
                        Выполнено
                      </>
                    ) : (
                      <>
                        <Icon name="Circle" size={20} className="mr-2" />
                        Отметить как выполненное
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {completedCount === steps.length && (
          <Card className="mt-8 p-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center animate-bounce-in shadow-2xl">
            <Icon name="PartyPopper" size={64} className="mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-3">Поздравляем! 🎉</h2>
            <p className="text-xl mb-6">
              Вы выполнили все шаги оптимизации. Теперь проверьте скорость сайта снова через PageSpeed Insights!
            </p>
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold text-lg px-8 py-6"
              onClick={() => window.open('https://pagespeed.web.dev/', '_blank')}
            >
              <Icon name="Rocket" size={24} className="mr-2" />
              Проверить результат
            </Button>
          </Card>
        )}

        <Card className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
          <div className="flex items-start gap-4">
            <Icon name="Info" size={32} className="text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Полезные ссылки</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Icon name="ExternalLink" size={16} className="text-blue-600" />
                  <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 underline">
                    PageSpeed Insights
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="ExternalLink" size={16} className="text-blue-600" />
                  <a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 underline">
                    Cloudflare CDN
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="ExternalLink" size={16} className="text-blue-600" />
                  <a href="https://www.giftofspeed.com/gzip-test/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 underline">
                    Тест Gzip-сжатия
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
