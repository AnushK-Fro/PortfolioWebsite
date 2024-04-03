<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/blog', [\App\Http\Controllers\BlogController::class, 'index'])->name('blog.home');
Route::get('/privacypolicy', [\App\Http\Controllers\LegalController::class, 'privacyPolicy'])->name('legal.privacy');
Route::get('/blog/{id}', [\App\Http\Controllers\BlogController::class, 'view'])->name('blog.view');

Route::post('/newsletter/subscribe', [\App\Http\Controllers\NewsletterController::class, 'subscribe'])->name('newsletter.subscribe');
Route::get('/newsletter/verify/{token}', [\App\Http\Controllers\NewsletterController::class, 'verify'])->name('newsletter.verify');
Route::get('/newsletter/remove/{token}', [\App\Http\Controllers\NewsletterController::class, 'remove'])->name('newsletter.remove');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [\App\Http\Controllers\AdminController::class, 'index'])->name('dashboard');

    Route::get('/blog/edit/{id}', [\App\Http\Controllers\BlogController::class, 'updateBlogView'])->name('blog.edit.view');
    Route::put('/blog/edit', [\App\Http\Controllers\BlogController::class, 'updateBlog'])->name('blog.edit');
    Route::post('/blog/create', [\App\Http\Controllers\BlogController::class, 'createBlog'])->name('blog.create');
    Route::delete('/blog/delete/{id}', [\App\Http\Controllers\BlogController::class, 'deleteBlog'])->name('blog.delete');
    Route::post('/blog/email/{id}', [\App\Http\Controllers\BlogController::class, 'emailBlog'])->name('blog.email');
});
