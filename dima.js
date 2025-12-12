'use strict'


// pages id: main-card main-form

//странички
var pagesObject = {
    mainStudent: document.getElementById('main-card'),
    mainForm: document.getElementById('main-form'),
    verificator: document.getElementById('verificator-main'),
    checkCard: document.getElementById('verificator-check-card'),
    main: document.getElementById('entrance'),
    header: document.getElementById('main-header')
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
    studyButton: document.getElementById('educational-button'),

    studentButton: document.getElementById('entrance-student-link'),
    verificatorButton: document.getElementById('entrance-verificator-link')
}

// модалка
var modalWindow = document.getElementById('modal-overlay');

// список кнопок категорий
var listCategories = document.getElementById('my-achievements-list')

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

modalWindow.addEventListener('click', function(event) {
    const modalBox = document.getElementById('modal-box')
    if (event.target !== modalBox) {
        modalWindow.classList.remove('display-block');
    }
});

document.addEventListener('click', function(event) {
    if (event.target !== listCategories && event.target !== listBtn) {
        listCategories.classList.add('display-none');
    }
});

listBtn.addEventListener('click', function(event) {
    var list = listCategories.classList
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
    pagesObject.header.classList.remove('display-none');
    if (view === 'current') {
        switchToCurrentView();
    } else {
        switchToArchiveView();
    }
}

// роуты
// const routes = {
//     '/achievement/all': () => showCurrentView('all'),
//     '/achievement/sport': () => showCurrentView('sport'),
//     '/achievement/science': () => showCurrentView('science'),
//     '/achievement/art': () => showCurrentView('art'),
//     '/achievement/com': () => showCurrentView('com'),
//     '/achievement/study': () => showCurrentView('study'),

//     '/achievement/all/old': () => showArchiveView('all'),
//     '/achievement/sport/old': () => showArchiveView('sport'),
//     '/achievement/science/old': () => showArchiveView('science'),
//     '/achievement/art/old': () => showArchiveView('art'),
//     '/achievement/com/old': () => showArchiveView('com'),
//     '/achievement/study/old': () => showArchiveView('study'),

//     '/achievement/sport/form': () => showFormView('sport'),
//     '/achievement/science/form': () => showFormView('science'),
//     '/achievement/art/form': () => showFormView('art'),
//     '/achievement/com/form': () => showFormView('com'),
//     '/achievement/study/form': () => showFormView('study')
// };

const routes = [
    { path: '/', action: () => showEntrancePage() },

    { path: '/achievement/all', action: () => showCurrentView('all') },
    { path: '/achievement/sport', action: () => showCurrentView('sport') },
    { path: '/achievement/science', action: () => showCurrentView('science') },
    { path: '/achievement/art', action: () => showCurrentView('art') },
    { path: '/achievement/com', action: () => showCurrentView('com') },
    { path: '/achievement/study', action: () => showCurrentView('study') },

    { path: '/achievement/all/old', action: () => showArchiveView('all') },
    { path: '/achievement/sport/old', action: () => showArchiveView('sport') },
    { path: '/achievement/science/old', action: () => showArchiveView('science') },
    { path: '/achievement/art/old', action: () => showArchiveView('art') },
    { path: '/achievement/com/old', action: () => showArchiveView('com') },
    { path: '/achievement/study/old', action: () => showArchiveView('study') },

    { path: '/achievement/sport/form', action: () => showFormView('sport') },
    { path: '/achievement/science/form', action: () => showFormView('science') },
    { path: '/achievement/art/form', action: () => showFormView('art') },
    { path: '/achievement/com/form', action: () => showFormView('com') },
    { path: '/achievement/study/form', action: () => showFormView('study') },

    { path: '/verificator', action: () => showVerificatorPage() },

    // ⭐ динамический роут: /details/ID
    { path: /^\/verificator\/details\/(\d+)$/, action: showDetailsPage }
];

// Обработчик маршрута
function handleRoute() {
    // let path = window.location.pathname;
    
    // console.log('Router: current path', path);

    // if (routes[path]) {
    //     routes[path]();
    // } 
    const BASE_PATH = "/project-university-main/index.html";
    let current = window.location.pathname;
    if (current.startsWith(BASE_PATH)) {
        current = current.replace(BASE_PATH, "/");
        history.replaceState({}, "", `/`);
    }

        for (const route of routes) {
            if (route.path instanceof RegExp) {
                const match = current.match(route.path);
                if (match) {
                    route.action(match[2]); // id передаем в функцию
                    return;
                }
            }

            if (route.path === current) {
                route.action();
                return;
            }
        }

        console.warn("No route match:", current);


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
    handleRoute();
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initRouter();
    renderTable();
    links.studentButton.addEventListener("click", function(event){
    navigateTo('/achievement/all')
});
links.verificatorButton.addEventListener("click", function(event){
    navigateTo('/verificator')
});
});

function switchToCurrentView() {
    currentView = 'current';
    
    mainPageBtns.current.classList.add('active');
    mainPageBtns.archive.classList.remove('active');
    
    pageBars.current.classList.remove('display-none');
    pageBars.archive.classList.add('display-none');

    pagesObject.mainForm.classList.add('display-none');
    pagesObject.main.classList.add('display-none');
    pagesObject.verificator.classList.add('display-none');
    pagesObject.checkCard.classList.add('display-none');
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
    pagesObject.main.classList.add('display-none');
    pagesObject.verificator.classList.add('display-none');
    pagesObject.checkCard.classList.add('display-none');
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


// заполнение таблицы верификатора

const records = [
    { id: 27554,
        name: "Всеросийский конкурс молодых препринимателей \"Амур 25\"", 
        fio: 'ФИО', 
        school: 'Политехнический институт (Школа)', 
        studyDirection: 'длинной длинное направление обучения', 
        status: 'Отправлено на проверку', 
        icon: "иконка" },
    { id: 27555, 
        name: "Hakaton",
        fio: 'ФИО', 
        school: 'Политехнический институт (Школа)', 
        studyDirection: 'длинной длинное направление обучения', 
        status: 'Отправлено на проверку', 
        icon: "иконка" },
];

function renderTable() {
    const table = document.getElementById("data-table-verificator");

    const header = `<tr>
                            <th>ID</th>
                            <th>Название</th>
                            <th>ФИО</th>
                            <th>Школа</th>
                            <th>Направление обучения</th>
                            <th>Статус</th>
                            <th></th>
                        </tr>`;

    const rows = records.map(rec => `
        <tr>
            <td>${rec.id}</td>
            <td>${rec.name}</td>
            <td>${rec.fio}</td>
            <td>${rec.school}</td>
            <td>${rec.studyDirection}</td>
            <td>${rec.status}</td>
            <td>
                <button class="details-btn" data-id="${rec.id}">🔗</button>
            </td>
        </tr>
    `).join('');

    table.innerHTML = header + rows;
}

document.getElementById("data-table-verificator").addEventListener("click", function(event){
    if(event.target.classList.contains("details-btn")){
        const id = event.target.dataset.id;
        openDetails(id);
    }
});

function openDetails(id) {
    navigateTo(`/verificator/details/${id}`)
}

function showDetailsPage(id) {
    pagesObject.verificator.classList.add('display-none')
    pagesObject.checkCard.classList.remove('display-none')
}

function showVerificatorPage() {
    pagesObject.verificator.classList.remove('display-none')
    pagesObject.checkCard.classList.add('display-none')
    pagesObject.mainForm.classList.add('display-none')
    pagesObject.mainStudent.classList.add('display-none')
    pagesObject.main.classList.add('display-none')
}

function showEntrancePage() {
    pagesObject.verificator.classList.add('display-none')
    pagesObject.checkCard.classList.add('display-none')
    pagesObject.mainForm.classList.add('display-none')
    pagesObject.mainStudent.classList.add('display-none')
    pagesObject.main.classList.remove('display-none')
    pagesObject.header.classList.add('display-none')
}

