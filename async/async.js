// Ключи для работы с локальным хранилищем (localStorage)
const STORAGE_USERS_KEY = 'async_users_data';
const STORAGE_TOTAL_COUNT_KEY = 'async_users_total_count';

// Ссылки на DOM-элементы страницы
const statusBox = document.getElementById('statusBox');
const loadingSpinner = document.getElementById('loadingSpinner');
const statusText = document.getElementById('statusText');
const statusSubText = document.getElementById('statusSubText');
const cardsContainer = document.getElementById('cardsContainer');
const infoBanner = document.getElementById('infoBanner');
const infoBannerText = document.getElementById('infoBannerText');
const btnFetchAll = document.getElementById('btnFetchAll');
const btnDeleteAll = document.getElementById('btnDeleteAll');
const simulateErrorCheckbox = document.getElementById('simulateErrorCheckbox');
const storageDot = document.getElementById('storageDot');
const storageStatusText = document.getElementById('storageStatusText');

// Вспомогательная функция задержки через Promise и setTimeout (симуляция долгого ответа сервера)
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// Безопасное чтение массива пользователей из localStorage через JSON.parse
function getUsersFromStorage() {
  try {
    const rawData = localStorage.getItem(STORAGE_USERS_KEY);
    if (rawData === null) {
      return null;
    }
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Ошибка чтения из localStorage:', error);
    return null;
  }
}

// Сохранение массива пользователей в localStorage через JSON.stringify
function saveUsersToStorage(usersArray, totalInitialCount) {
  try {
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(usersArray));
    if (typeof totalInitialCount === 'number') {
      localStorage.setItem(STORAGE_TOTAL_COUNT_KEY, String(totalInitialCount));
    }
    updateStorageIndicator();
  } catch (error) {
    console.error('Ошибка записи в localStorage:', error);
  }
}

// Обновление индикатора состояния localStorage в шапке
function updateStorageIndicator() {
  const storedUsers = getUsersFromStorage();
  if (storedUsers === null) {
    storageDot.classList.remove('synced');
    storageStatusText.textContent = 'LocalStorage: пусто';
  } else {
    storageDot.classList.add('synced');
    storageStatusText.textContent = `LocalStorage: синхронизировано (${storedUsers.length} карт.)`;
  }
}

// Показ информационного уведомления для пользователя
let infoTimeoutId = null;
function showInfoMessage(message) {
  if (infoTimeoutId) {
    clearTimeout(infoTimeoutId);
  }
  infoBannerText.textContent = message;
  infoBanner.classList.add('visible');
  infoTimeoutId = setTimeout(() => {
    infoBanner.classList.remove('visible');
  }, 4500);
}

// Скрытие информационного уведомления
function hideInfoMessage() {
  if (infoTimeoutId) {
    clearTimeout(infoTimeoutId);
  }
  infoBanner.classList.remove('visible');
}

// Переключение центрального блока статуса ("Данные загружаются" / "Ошибка при загрузке данных" / пустой список)
function showStatusState({ text, subText = '', isLoading = false, isError = false }) {
  cardsContainer.innerHTML = '';
  statusBox.classList.add('visible');
  statusBox.classList.toggle('error-state', isError);
  loadingSpinner.style.display = isLoading ? 'block' : 'none';
  statusText.textContent = text;
  statusSubText.textContent = subText;
}

function hideStatusState() {
  statusBox.classList.remove('visible');
  statusBox.classList.remove('error-state');
}

// Отрисовка карточек пользователей по центру страницы
function renderUsers(users) {
  updateStorageIndicator();

  if (!Array.isArray(users) || users.length === 0) {
    showStatusState({
      text: 'Список карточек пуст',
      subText: 'Все карточки были удалены. Нажмите «Получить все карточки», чтобы загрузить их снова.',
      isLoading: false,
      isError: false
    });
    return;
  }

  hideStatusState();
  cardsContainer.innerHTML = '';

  users.forEach((user) => {
    const card = document.createElement('article');
    card.className = 'user-card';
    card.dataset.userId = String(user.id);

    card.innerHTML = `
      <div>
        <div class="card-top">
          <div>
            <h2 class="user-name">${user.name} ${user.surname}</h2>
            <p class="user-role">${user.role || 'Участник команды'}</p>
          </div>
          <span class="user-id-badge">ID #${user.id}</span>
        </div>
        <div class="card-details">
          <div class="detail-row">
            <span class="detail-label">Email</span>
            <span class="detail-value">${user.email}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Возраст</span>
            <span class="detail-value">${user.age} лет</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Город</span>
            <span class="detail-value">${user.city || 'Не указан'}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Отдел</span>
            <span class="detail-value">${user.department || 'Общий'}</span>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button type="button" class="btn-danger btn-delete-card" data-delete-id="${user.id}">
          Удалить карточку
        </button>
      </div>
    `;

    cardsContainer.appendChild(card);
  });
}

// Асинхронный запрос к JSON-файлу через fetch с использованием setTimeout для симуляции длительной загрузки
async function fetchUsersFromDatabase() {
  hideInfoMessage();

  // Отображаем по центру страницы строку: "Данные загружаются"
  showStatusState({
    text: 'Данные загружаются',
    subText: 'Подождите, выполняется асинхронный запрос fetch("./users.json")...',
    isLoading: true,
    isError: false
  });

  btnFetchAll.disabled = true;
  btnDeleteAll.disabled = true;

  try {
    // Симуляция длительной загрузки через setTimeout (1500 мс)
    await delay(1500);

    // Если включён тумблер симуляции сбоя, выбрасываем ошибку через new Error
    if (simulateErrorCheckbox && simulateErrorCheckbox.checked) {
      throw new Error('Искусственная ошибка сети: сервер не отвечает');
    }

    const response = await fetch('./users.json');

    if (!response.ok) {
      throw new Error(`HTTP ошибка! Статус ответа: ${response.status}`);
    }

    const data = await response.json();
    const users = Array.isArray(data) ? data : data.users;

    if (!Array.isArray(users)) {
      throw new Error('Некорректный формат JSON: массив users не найден');
    }

    // Сохраняем полученные данные в локальное хранилище
    saveUsersToStorage(users, users.length);

    // Отображаем карточки и убираем надпись "Данные загружаются"
    renderUsers(users);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);

    // Отображаем текст на странице "Ошибка при загрузке данных"
    showStatusState({
      text: 'Ошибка при загрузке данных',
      subText: error.message || 'Не удалось получить данные из файла users.json',
      isLoading: false,
      isError: true
    });
  } finally {
    btnFetchAll.disabled = false;
    btnDeleteAll.disabled = false;
  }
}

// Удаление определенной карточки через метод массива .filter()
function deleteUserById(userId) {
  const currentUsers = getUsersFromStorage();
  if (!Array.isArray(currentUsers)) {
    return;
  }

  const targetUser = currentUsers.find((user) => Number(user.id) === Number(userId));

  // Фильтруем массив: оставляем всех пользователей, кроме удаляемого
  const updatedUsers = currentUsers.filter((user) => Number(user.id) !== Number(userId));

  // Синхронизируем с локальным хранилищем
  saveUsersToStorage(updatedUsers);

  // Перерисовываем карточки
  renderUsers(updatedUsers);

  if (targetUser) {
    showInfoMessage(`Карточка «${targetUser.name} ${targetUser.surname}» (ID #${targetUser.id}) удалена и синхронизирована с LocalStorage.`);
  }
}

// Удаление всех карточек
function deleteAllUsers() {
  const currentUsers = getUsersFromStorage();

  if (!Array.isArray(currentUsers) || currentUsers.length === 0) {
    showInfoMessage('Все карточки уже удалены — список пуст.');
    return;
  }

  // Сохраняем пустой массив в localStorage, чтобы после перезагрузки страницы оставалось 0 карточек
  saveUsersToStorage([]);
  renderUsers([]);
  showInfoMessage('Все карточки пользователей были удалены.');
}

// Обработчик кнопки «Получить все карточки»
async function handleGetAllUsersClick() {
  const currentUsers = getUsersFromStorage();
  const totalCount = Number(localStorage.getItem(STORAGE_TOTAL_COUNT_KEY) || 6);

  // Если у пользователя уже отображены все карточки, показываем информационное сообщение и не делаем лишний запрос
  if (
    Array.isArray(currentUsers) &&
    currentUsers.length > 0 &&
    currentUsers.length === totalCount &&
    !statusBox.classList.contains('error-state')
  ) {
    showInfoMessage('Информационное сообщение: у вас уже отображены все пользователи! Повторный запрос к серверу не требуется.');
    return;
  }

  await fetchUsersFromDatabase();
}

// Делегирование событий для кнопок удаления отдельной карточки
cardsContainer.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('[data-delete-id]');
  if (!deleteBtn) {
    return;
  }
  const userId = Number(deleteBtn.dataset.deleteId);
  deleteUserById(userId);
});

btnFetchAll.addEventListener('click', handleGetAllUsersClick);
btnDeleteAll.addEventListener('click', deleteAllUsers);

// Инициализация при переходе на страницу async.html
async function initApp() {
  const storedUsers = getUsersFromStorage();

  // Если данные изначально были в локальном хранилище, делать запрос нет смысла — сразу отображаем их
  if (storedUsers !== null) {
    renderUsers(storedUsers);
    return;
  }

  // Если локальное хранилище не заполнено данными — показываем "Данные загружаются" и делаем запрос через fetch
  await fetchUsersFromDatabase();
}

initApp();