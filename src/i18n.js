import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Configuración de i18n
i18n
    .use(HttpBackend) // Carga traducciones desde archivos JSON
    .use(LanguageDetector) // Detecta el idioma del navegador
    .use(initReactI18next) // Integración con React
    .init({
        fallbackLng: 'en', // Idioma por defecto
        debug: true, // Activa el modo debug en desarrollo
        interpolation: {
            escapeValue: false, // No es necesario para React (protegido por defecto)
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta para cargar archivos de traducción
        },
    });

export default i18n;