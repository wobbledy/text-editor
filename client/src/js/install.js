const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Check if the PWA is installed
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Install the PWA
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// Hide the install button once the PWA is installed
window.addEventListener('appinstalled', (event) => { 
    window.deferredPrompt = null;
});
