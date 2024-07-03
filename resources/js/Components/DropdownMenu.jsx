import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export default function DropdownMenu() {
    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center rounded-md bg-indigo-500 p-1 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none">
                        <UserCircleIcon className="size-5" />
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
                    <MenuItems className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="p-1">
                            {/* <MenuItem>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-cyan-100">
                                    Edit
                                </button>
                            </MenuItem> */}
                            <MenuItem>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    type="button"
                                    className="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-cyan-100"
                                >
                                    Logout
                                </Link>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </>
    );
}
