import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { router, usePage } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";

export default function LocaleSwitcher() {
    const page = usePage();

    const { setLocale } = useLaravelReactI18n();

    const changeLocale = (locale) => {
        router.post(
            route("locale", locale),
            {},
            {
                onSuccess: () => setLocale(locale),
            }
        );
    };

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center rounded-md bg-indigo-500 p-1 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none uppercase">
                        {page.props.locale}
                    </MenuButton>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute right-0 mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="p-1">
                            {Object.entries(page.props.languages).map(
                                ([key, val]) => (
                                    <MenuItem key={key}>
                                        <button
                                            onClick={() => changeLocale(key)}
                                            className="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-cyan-100"
                                        >
                                            {val}
                                        </button>
                                    </MenuItem>
                                )
                            )}
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </>
    );
}
