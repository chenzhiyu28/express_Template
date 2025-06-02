// Centralized config loader (if you don't use 'config' package)
export const AppConfig = {
    name: process.env.APP_NAME || "Express App",
    mail: {
        host: process.env.MAIL_HOST || "smtp.mailtrap.io",
        password: process.env.MAIL_PASSWORD || "default_password"
    }
};
