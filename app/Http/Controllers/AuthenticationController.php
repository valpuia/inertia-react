<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AuthenticationController extends Controller
{
    public function authenticate(LoginRequest $request)
    {
        if (! auth()->attempt($request->validated(), request('remember'))) {
            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }

        $request->session()->regenerate();

        return redirect()->intended();
    }

    public function logout(Request $request)
    {
        auth()->logout();

        $request->session()->regenerateToken();

        return to_route('home');
    }
}
