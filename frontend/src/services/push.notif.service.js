const publicVapidKey = 'BOf0qAhBz4a-lxagLIqN5ns4y6F4s2Ptailr_RP0abwLiozIceJ0EmZR8a7sHsR0wxSdhdtdbdpaZN4vfBRUS3o';

async function register() {
    if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('/worker.js', { scope: '/' });
        const subscription = await registration.pushManager.
            subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
            });
        await fetch('api/push-notif/subscribe', {
            method: "POST",
            body: JSON.stringify(subscription),
            headers: {
                'content-type': 'application/json'
            }
        });
        console.log('service worker Registeration sent to server...');
    } else console.log('push not supported');
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export default {
    register
}