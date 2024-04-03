<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index() {
        $posts = BlogPost::all();
        return Inertia::render('Dashboard', [
            "posts" => $posts
        ]);
    }
}
