const routes = [
    {
        path: '/',
        redirect: '/achievement/all'
    },
    // "текущие достижения"
    {
        path: '/achievement/:category',
        name: 'achievement-category',
        templateId: 'achievement-category-page',
        parseParams: (path) => {
            // /achievement/all → { category: 'all' }
            const match = path.match(/^\/achievement\/([^\/]+)$/);
            return match ? { category: match[1] } : null;
        },
        validateParams: (params) => {
            // валидация
            const validCategories = ['all', 'sport', 'science', 'art', 'com', 'study'];
            return validCategories.includes(params.category);
        }
    },
    // "архивные достижения"
    {
        path: '/achievement/:category/old',
        name: 'achievement-category-old',
        templateId: 'achievement-old-page',
        parseParams: (path) => {
            // /achievement/all/old → { category: 'all', view: 'old' }
            const match = path.match(/^\/achievement\/([^\/]+)\/old$/);
            return match ? { 
                category: match[1], 
                view: 'old' 
            } : null;
        },
        validateParams: (params) => {
            const validCategories = ['all', 'sport', 'science', 'art', 'com', 'study'];
            return validCategories.includes(params.category);
        }
    }
];