import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.preachitsms.app', // Your package ID
  appName: 'PreachItBSMS',      // Your app name
  webDir: 'out',                // ✅ Points Capacitor to Next.js static export folder
  server: {
    androidScheme: 'https',     // Allows HTTPS scheme for Android WebView
  },
};

export default config;
