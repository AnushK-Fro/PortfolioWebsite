<?php

namespace App\Http\Controllers;

use App\Mail\NewsletterNewPost;
use App\Models\BlogPost;
use App\Models\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;
class LegalController extends Controller
{
    public function privacyPolicy() {
        return Inertia::render('PrivacyPolicy');
    }
}
