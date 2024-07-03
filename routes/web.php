<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home')->name('home');
Route::post('/locale/{locale}', function ($locale) {
    // info(session('locale'));
    app()->setLocale($locale);
    session()->put('locale', $locale);
})->name('locale');

Route::middleware('guest')->group(function () {
    Route::inertia('/login', 'Auth/Login')->name('login');
    Route::post('/authenticate', [AuthenticationController::class, 'authenticate'])->name('post-login');
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthenticationController::class, 'logout'])->name('logout');

    Route::resource('users', UserController::class);
});
