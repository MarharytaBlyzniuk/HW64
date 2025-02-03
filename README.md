# Проект з інтеграцією MongoDB Atlas та Express.js

Цей проект демонструє, як інтегрувати базу даних MongoDB Atlas з сервером Express для отримання даних з колекції MongoDB.

## Налаштування проекту

1. Клонуйте репозиторій:
    ```bash
    git clone https://github.com/yourusername/my-express-app.git
    cd my-express-app
    ```

2. Встановіть залежності:
    ```bash
    npm install
    ```

3. Налаштуйте підключення до MongoDB Atlas:
    - Створіть обліковий запис на [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Створіть кластер, базу даних і колекцію.
    - Візьміть URI підключення до MongoDB і вставте його в `app.js` у місце `'YOUR_MONGODB_ATLAS_URI'`.

4. Запустіть сервер:
    ```bash
    npm start
    ```

5. Перейдіть за адресою:
    ```
    http://localhost:3000/items
    ```

   Цей маршрут поверне всі елементи з колекції `items` в MongoDB.

## Ліцензія

Цей проект ліцензується під MIT.
