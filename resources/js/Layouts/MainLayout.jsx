import Nav from "@/Components/Nav";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export default function MainLayout({ children }) {
    return (
        <>
            <header className="bg-cyan-100 p-4">
                <div className="container mx-auto px-2">
                    <div className="flex justify-between">
                        <Link href={route("home")}>
                            <AcademicCapIcon className="size-10 text-indigo-600" />
                        </Link>

                        <Nav />
                    </div>
                </div>
            </header>

            <main>{children}</main>
        </>
    );
}
