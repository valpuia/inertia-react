import { Link, usePage } from "@inertiajs/react";
import DropdownMenu from "./DropdownMenu";
import { useLaravelReactI18n } from "laravel-react-i18n";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Nav() {
    const { t } = useLaravelReactI18n();
    const page = usePage();

    return (
        <>
            <nav className="flex gap-x-4 items-center">
                <Link
                    href={route("home")}
                    className={page.url === "/" ? "underline" : ""}
                >
                    {t("Home")}
                </Link>

                {page.props.auth.user ? (
                    <>
                        <Link
                            href={route("users.index")}
                            className={page.url === "/users" ? "underline" : ""}
                        >
                            {t("User")}
                        </Link>

                        <DropdownMenu />
                    </>
                ) : (
                    <Link
                        href={route("login")}
                        className={page.url === "/login" ? "underline" : ""}
                    >
                        {t("Login")}
                    </Link>
                )}

                <LocaleSwitcher />
            </nav>
        </>
    );
}
