const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Add event handler for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Add event handler for butInstall button
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// Add event handler for appinstalled event
window.addEventListener('appinstalled', (event) => {
  
    window.deferredPrompt = null;
  }); 
