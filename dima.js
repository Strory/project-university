'use strict'


// pages id: main-card main-form

//странички
var pagesObject = {
    mainStudent: document.getElementById('main-card'),
    mainForm: document.getElementById('main-form')
}

// хедер раздела (меняется при смене раздела достижений)
var categoryHeader = document.getElementById('achievements-category')

// кнопка мои достижения 
var listBtn = document.getElementById('my-achievements-btn')

// кнопки текущие/архивные
var mainPageBtns = {
    current: document.getElementById('current-achievements-btn'),
    archive: document.getElementById('archived-achievements-btn')
}
// бары текущие/архивные
var pageBars = {
    current: document.getElementById('current-achievements-bar'),
    archive: document.getElementById('archived-achievements-bar')
}

// кнопки выпадающего списка

var listBtns = {
    sport: document.getElementById('main-sport-link'),
    science: document.getElementById('main-science-link'),
    art: document.getElementById('main-creation-link'),
    com: document.getElementById('main-society-link'),
    study: document.getElementById('main-educational-link')
}

// кнопки
var links = {
    mainButton: document.getElementById('main-button'),
    addAchieveButton: document.getElementById('add-achieve-button'),
    sportButton: document.getElementById('sport-button'),
    scienceButton: document.getElementById('science-button'),
    artButton: document.getElementById('creation-button'),
    comButton: document.getElementById('society-button'),
    studyButton: document.getElementById('educational-button')
}

// модалка
var modalWindow = document.getElementById('modal-overlay');

// контейнеры формы
var formContainers = {
    toggleForm: document.getElementById('toggle-form'),
    formContainer:  document.getElementById('form-container')
}

function navigation(pageName) {
    if (pageName === 'main-card') {
        pagesObject.mainForm.classList.add('display-none');
        pagesObject.mainStudent.classList.remove('display-none');
    } else if (pageName === 'main-form') {
        pagesObject.mainStudent.classList.add('display-none');
        pagesObject.mainForm.classList.remove('display-none');
    }
}


// Добавляем обработку событий для перехода по страницам

// Вернуться на главную
links.mainButton.addEventListener('click', function(event) {
    navigation('main-card');
});
// Перейти к заполнения формы на спортивное достижение
links.sportButton.addEventListener('click', function(event) {
    // Здесь скрипт рендера формы в зависимости от типа достижения. Сначала очистить форму: id: toggle-form form-container 
    // Очищаем примерно так:
    formContainers.toggleForm.innerHTML = '';
    formContainers.formContainer.innerHTML = '';

    navigation('main-form');
    modalWindow.classList.remove('display-block');
})

// Кнопка "Добавить достижение"
links.addAchieveButton.addEventListener('click', function(event) {
    modalWindow.classList.add('display-block');
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalWindow.classList.contains('display-block')) {
        modalWindow.classList.remove('display-block');
    }
});

listBtn.addEventListener('click', function(event) {
    var list = document.getElementById('my-achievements-list').classList
    if (list.contains('display-none')) {
        list.remove('display-none')
    }
    else {
        list.add('display-none')
    }
})


function updateCategoryHeader(category) {
    // меняем хедер раздела достижений
    const headerMap = {
        'all': 'Все достижения',
        'sport': 'Спортивные достижения', 
        'science': 'Научные достижения',
        'art': 'Творческие достижения',
        'com': 'Общественные достижения',
        'study': 'Учебные достижения'
    };
    
    categoryHeader.textContent = headerMap[category] || 'Все достижения';
}


let currentCategory = 'all';
let currentView = 'current';

/*
Кнопка my-achievements-btn.                                        DONE!!!!
При клике my-achievements-list remove dispaly none                  DONE!!!!

Кнопки для перехода на главную в зависимости от типа main-sport-link main-science-link main-creation-link main-society-link main-educational-link
не забыть event.preventDefault();                                   DONE!!!!

Кнопки для перехода на заполнение формы
sport-button science-button creation-button society-button educational-button

И ещё текущие архивные - переключение.                              DONE!!!

*/

// категории и разделы для построения пути и ui
const routerConfig = {
    categories: ['all', 'sport', 'science', 'art', 'com', 'study'],
    views: ['current', 'old', 'form']
};

// стоковое состояние
const appState = {
    currentCategory: 'all',
    currentView: 'current',
    currentForm: null
};

// показать текущие достижения
function showCurrentView(category) {
    console.log('Showing current view for category:', category);
    
    appState.currentCategory = category;
    appState.currentView = 'current';

    updateCategoryHeader(category);
    
    // Обновляем UI
    updateActiveCategory(category);
    updateActiveView('current');
    
    // Показываем нужные данные
    showCategoryData(category, 'current');
}

// показать архивные достижения
function showArchiveView(category) {
    console.log('Showing archive view for category:', category);
    appState.currentCategory = category;
    appState.currentView = 'archive';
    
    updateActiveCategory(category);
    updateActiveView('archive');

    showCategoryData(category, 'archive');
}

// Обновление активной категории в UI
// здесь логика подгруза данных должна быть?
function updateActiveCategory(activeCategory) {

}

// Обновление активного вида (current/archive) в UI
// здесь логика подгруза данных должна быть?
function updateActiveView(activeView) {

}

function showCategoryData(category, view) {
    // отображение того или иного раздела 
    console.log(`Loading ${view} data for ${category} category`);
    
    if (view === 'current') {
        switchToCurrentView();
    } else {
        switchToArchiveView();
    }
}

// роуты
const routes = {
    '/achievement/all': () => showCurrentView('all'),
    '/achievement/sport': () => showCurrentView('sport'),
    '/achievement/science': () => showCurrentView('science'),
    '/achievement/art': () => showCurrentView('art'),
    '/achievement/com': () => showCurrentView('com'),
    '/achievement/study': () => showCurrentView('study'),

    '/achievement/all/old': () => showArchiveView('all'),
    '/achievement/sport/old': () => showArchiveView('sport'),
    '/achievement/science/old': () => showArchiveView('science'),
    '/achievement/art/old': () => showArchiveView('art'),
    '/achievement/com/old': () => showArchiveView('com'),
    '/achievement/study/old': () => showArchiveView('study'),

    '/achievement/sport/form': () => showFormView('sport'),
    '/achievement/science/form': () => showFormView('science'),
    '/achievement/art/form': () => showFormView('art'),
    '/achievement/com/form': () => showFormView('com'),
    '/achievement/study/form': () => showFormView('study')
};


// Обработчик маршрута
function handleRoute() {
    let path = window.location.pathname;
    
    console.log('Router: current path', path);

    if (routes[path]) {
        routes[path]();
    } 
    // else {                                                                               // вообще это валидация, но в целом в нашем случае необходимости в ней нет?
    //     // Пробуем найти подходящий маршрут
    //     const parts = path.split('/').filter(p => p);
        
    //     if (parts.length >= 2) {
    //         const category = parts[1];
    //         const isArchive = parts[2] === 'old';
            
    //         // Проверяем валидность категории
    //         if (routerConfig.categories.includes(category)) {
    //             const newPath = isArchive 
    //                 ? `/achievement/${category}/old`
    //                 : `/achievement/${category}`;
                
    //             console.log('Router: redirecting to', newPath);
    //             navigateTo(newPath, true); 
    //         } else {
    //             // Невалидная категория - редирект на дефолт
    //             navigateTo('/achievement/all', true);
    //         }
    //     } else {
    //         // Неполный путь - редирект на дефолт
    //         navigateTo('/achievement/all', true);
    //     }
    // }
}

function navigateTo(path, replace = false) {
    console.log('Router: navigating to', path);
    
    if (replace) {
        window.history.replaceState(null, '', path);
    } else {
        window.history.pushState(null, '', path);
    }
    
    handleRoute();
}

function initRouter() {
    console.log('Router: initializing');
    
    // Обработчик кнопок назад/вперед
    window.addEventListener('popstate', handleRoute);
    
    // Делегирование событий клика
    document.addEventListener('click', (e) => {
        // Обработка кликов по ссылкам
        const link = e.target.closest('a[href^="/"]');
        if (link && !link.hasAttribute('target')) {
            e.preventDefault();
            const href = link.getAttribute('href');
            navigateTo(href);
        }
        
        // Обработка кликов по кнопкам категорий
        const categoryBtn = e.target.closest('[data-category]');
        if (categoryBtn) {
            e.preventDefault();
            const category = categoryBtn.dataset.category;
            const path = appState.currentView === 'old'
                ? `/achievement/${category}/old`
                : `/achievement/${category}`;
            navigateTo(path);
        }
        
        // Обработка кликов по кнопкам видов
        const viewBtn = e.target.closest('[data-view]');
        if (viewBtn) {
            e.preventDefault();
            const view = viewBtn.dataset.view;
            const path = view === 'old'
                ? `/achievement/${appState.currentCategory}/old`
                : `/achievement/${appState.currentCategory}`;
            navigateTo(path);
        }

        const formBtn = e.target.closest('[data-form]');
        if (formBtn) {
            e.preventDefault();
            const form = formBtn.dataset.form;
            const path = `/achievement/${form}/form`;
            navigateTo(path);
        }
    });
    
    // Обрабатываем начальный маршрут
    setTimeout(handleRoute, 0);
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initRouter();
});

function switchToCurrentView() {
    currentView = 'current';
    
    mainPageBtns.current.classList.add('active');
    mainPageBtns.archive.classList.remove('active');
    
    pageBars.current.classList.remove('display-none');
    pageBars.archive.classList.add('display-none');

    pagesObject.mainForm.classList.add('display-none');
    pagesObject.mainStudent.classList.remove('display-none');

    loadCategoryData(appState.currentCategory, false);
}

function switchToArchiveView() {
    currentView = 'old';
    
    mainPageBtns.current.classList.remove('active');
    mainPageBtns.archive.classList.add('active');
    
    pageBars.current.classList.add('display-none');
    pageBars.archive.classList.remove('display-none');

    pagesObject.mainForm.classList.add('display-none');
    pagesObject.mainStudent.classList.remove('display-none');
    
    loadCategoryData(appState.currentCategory, true);
}

// здесь логика загрузки
function loadCategoryData(category, isArchive) {
    console.log(`Loading ${isArchive ? 'old' : 'current'} data for ${category}`);

}

function showFormView(category) {
    console.log('Showing form for category:', category);
    
    appState.currentCategory = category;
    appState.currentView = 'form';
    
    hideMainContent();
    showFormContent();
    
    setupFormForCategory(category);
    
}

function hideMainContent() {
    modalWindow.classList.add('display-none');
    modalWindow.classList.remove('display-block');
    pagesObject.mainStudent.classList.add('display-none')
}

function showFormContent() {
    pagesObject.mainForm.classList.remove('display-none')
}

function setupFormForCategory(category) {
    
}