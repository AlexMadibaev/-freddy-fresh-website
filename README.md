# 🍕 Freddy Fresh - Pizza Lieferservice

Современный веб-сайт для сети пиццерий Freddy Fresh, основанный на официальном сайте [freddy-fresh.de](https://www.freddy-fresh.de/).

## 🚀 Особенности

- **Современный дизайн** с градиентами и анимациями
- **Адаптивная верстка** для всех устройств
- **Интерактивные элементы** с плавными переходами
- **Немецкий интерфейс** в соответствии с оригинальным сайтом
- **Компонентная архитектура** на React
- **Современные CSS-эффекты** и анимации

## 📋 Структура проекта

```
WEB/
├── backend/                 # Backend API
│   ├── routes/             # API маршруты
│   ├── package.json        # Зависимости backend
│   └── server.js           # Основной сервер
├── public/                 # Статические файлы
│   └── index.html          # Главная HTML страница
├── src/                    # Исходный код React
│   ├── components/         # React компоненты
│   │   ├── Header.js       # Навигация
│   │   ├── Footer.js       # Подвал сайта
│   │   └── CookieConsent.js # Согласие на cookies
│   ├── pages/              # Страницы приложения
│   │   ├── Home.js         # Главная страница
│   │   ├── Menu.js         # Меню
│   │   ├── Order.js        # Заказ
│   │   ├── Login.js        # Вход
│   │   └── Register.js     # Регистрация
│   ├── data/               # Данные приложения
│   │   └── companyInfo.js  # Информация о компании
│   ├── App.js              # Главный компонент
│   └── index.js            # Точка входа
└── package.json            # Зависимости frontend
```

## 🎨 Дизайн и стили

### Цветовая схема
- **Основной красный**: `#DC0D15`
- **Темно-красный**: `#b30a11`
- **Темно-зеленый**: `#314520`
- **Светло-серый**: `#f8f9fa`

### Шрифты
- **Основной**: Inter (Google Fonts)
- **Вес**: 300-900

### Анимации
- **Плавные переходы** с `cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- **Hover-эффекты** с трансформациями
- **Анимированные градиенты** и тени
- **Интерактивные кнопки** с эффектами свечения

## 📱 Адаптивность

Проект полностью адаптивен и оптимизирован для:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🍽️ Меню и продукты

### Категории блюд
- **Pizza** - Классические и экзотические пиццы
- **Burger** - Сочные бургеры
- **Pasta** - Итальянская паста
- **Salate** - Свежие салаты
- **Snacks** - Закуски и гарниры
- **Desserts** - Десерты
- **Drinks** - Напитки
- **Sauces** - Соусы

### Популярные блюда
- **Pizza Margherita** - Классическая пицца
- **Pizza Rotterdam** - Экзотическая пицца
- **Classic Freddy Burger** - Фирменный бургер
- **Spaghetti Carbonara** - Паста карбонара

## 🏢 Информация о компании

### Freddy Fresh AG
- **Слоган**: "Schnell - heiß - freundlich - lecker"
- **Описание**: "Der beste Pizza Lieferservice in Deutschland"
- **Рейтинг**: 120,369 отзывов на ProvenExpert.com
- **Время доставки**: 30 минут

### Филиалы
Более 80 филиалов по всей Германии, включая:
- Berlin (различные районы)
- Dresden (различные районы)
- Leipzig (различные районы)
- Chemnitz, Halle, Magdeburg
- И многие другие города

### 5 причин выбрать Freddy Fresh
1. **Größte Auswahl!** - Самая большая выбор
2. **Bester Lieferservice** - Лучший сервис доставки
3. **Frische Garantie!** - Гарантия свежести
4. **Nachhaltigkeit** - Устойчивое развитие
5. **Das besondere Etwas** - Особый подход

## 🚀 Установка и запуск

### Требования
- Node.js 14+
- npm или yarn

### Установка зависимостей
```bash
# Frontend
npm install

# Backend
cd backend
npm install
```

### Запуск в режиме разработки
```bash
# Frontend (порт 3000)
npm start

# Backend (порт 5000)
cd backend
npm start
```

### Сборка для продакшена
```bash
npm run build
```

## 🛠️ Технологии

### Frontend
- **React 18** - Основной фреймворк
- **React Router** - Маршрутизация
- **CSS3** - Стили и анимации
- **Inter Font** - Типографика

### Backend
- **Node.js** - Серверная платформа
- **Express.js** - Веб-фреймворк
- **CORS** - Междоменные запросы
- **Body Parser** - Парсинг данных

### API Endpoints
- `POST /api/auth/login` - Авторизация
- `POST /api/orders` - Создание заказа
- `POST /api/payment/*` - Платежи
- `GET /api/addresses/autocomplete` - Автодополнение адресов

## 📄 Лицензия

Этот проект создан в образовательных целях и основан на дизайне официального сайта Freddy Fresh.

## 🔗 Ссылки

- [Официальный сайт Freddy Fresh](https://www.freddy-fresh.de/)
- [ProvenExpert Bewertungen](https://www.provenexpert.com/)

---

**Примечание**: Данный проект является демонстрационным и не связан с официальной компанией Freddy Fresh AG.
