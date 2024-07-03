import "./bootstrap";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import MainLayout from "@/Layouts/MainLayout";
import { LaravelReactI18nProvider } from "laravel-react-i18n";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <MainLayout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <LaravelReactI18nProvider files={import.meta.glob("/lang/*.json")}>
                <App {...props} />
            </LaravelReactI18nProvider>
        );
    },
});
