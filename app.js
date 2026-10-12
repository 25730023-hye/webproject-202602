// EcoSort Wireframe Application Logic

function switchPage(pageId) {
    // Hide all page views
    document.querySelectorAll('.page-view').forEach(el => {
        el.classList.add('hidden');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.remove('hidden');
    }

    // Sync Bottom Navigation Active States
    const keyMap = {
        'page-home': 'home',
        'page-list': 'list',
        'page-detail': 'list',
        'page-my': 'my'
    };
    const activeKey = keyMap[pageId] || 'home';

    ['home', 'list', 'my'].forEach(key => {
        document.querySelectorAll('.nav-btn-' + key).forEach(btn => {
            if (key === activeKey) {
                btn.className = 'nav-btn-' + key + ' text-gray-900 font-bold';
            } else {
                btn.className = 'nav-btn-' + key + ' text-gray-600';
            }
        });
    });
}

function toggleEmptyState() {
    const filledState = document.getElementById('saved-state-filled');
    const emptyState = document.getElementById('saved-state-empty');

    if (filledState && emptyState) {
        if (filledState.classList.contains('hidden')) {
            filledState.classList.remove('hidden');
            emptyState.classList.add('hidden');
        } else {
            filledState.classList.add('hidden');
            emptyState.classList.remove('hidden');
        }
    }
}
