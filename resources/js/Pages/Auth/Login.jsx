import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputField from "@/Components/InputField";
import InputLabel from "@/Components/InputLabel";
import { Head, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("post-login"));
    };

    return (
        <>
            <Head title="Login" />

            <div className="container mx-auto px-2">
                <div className="p-6 w-[30%] mx-auto my-12 bg-white rounded border border-cyan-100">
                    <div className="text-2xl font-semibold text-center py-2">
                        Login
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <InputField
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <InputField
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button
                                type="submit"
                                className="ms-4"
                                disabled={processing}
                            >
                                Log in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
