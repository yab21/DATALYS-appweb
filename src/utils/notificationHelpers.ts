import { getMessaging, getToken, isSupported } from 'firebase/messaging';
import { app } from '@/firebase/firebaseConfig';

export const initializeNotifications = async () => {
  try {
    if (typeof window === 'undefined') return null;
    
    const isMessagingSupported = await isSupported();
    if (!isMessagingSupported) {
      console.log('Firebase messaging is not supported in this environment');
      return null;
    }

    if (!('serviceWorker' in navigator)) {
      console.log('Service workers are not supported');
      return null;
    }

    const messaging = getMessaging(app);
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      try {
        const token = await getToken(messaging, {
          vapidKey: "BFaXd4OytA6IpbDILdtWk_GjmBUk4Iwd9t5-L1tc4A1K6N8x9owSfSv1ylB-oeRWuksMnQj9sXIx6D_9XNfE5w8"
        });
        return token;
      } catch (error) {
        console.error('Error getting token:', error);
        return null;
      }
    }
    return null;
  } catch (error) {
    console.error('Notification initialization failed:', error);
    return null;
  }
}; 