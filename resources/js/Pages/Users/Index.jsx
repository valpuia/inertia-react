import { Head } from "@inertiajs/react";

export default function Index({ users }) {
    return (
        <>
            <Head title="Users" />

            <div className="container mx-auto px-2 py-8">
                <ul role="list" className="divide-y divide-gray-100">
                    {users.data.map((user) => (
                        <li
                            key={user.id}
                            className="flex justify-between gap-x-2 py-1"
                        >
                            <div className="flex min-w-0">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                        {user.name}
                                    </p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    Created at{" "}
                                    {new Date(
                                        user.created_at
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
