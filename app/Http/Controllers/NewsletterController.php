<?php

namespace App\Http\Controllers;

use App\Mail\NewsletterConfirmation;
use App\Mail\NewsletterVerification;
use App\Models\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Carbon\Carbon;
use romanzipp\Turnstile\Rules\TurnstileCaptcha;

class NewsletterController extends Controller
{
    public function subscribe(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'token' => ['required', 'string', new TurnstileCaptcha()],
        ]);

        $email = Email::where('email', $request->email)->where('email_verified_at', '!=', null)->first();
        if ($email) {
            Mail::to($email->email)->send(new NewsletterConfirmation($email));
        }

        $newsletter = new Email();
        $newsletter->email = $request->email;
        $newsletter->token = Str::random(60);
        $newsletter->save();

        Mail::to($newsletter->email)->cc(env('MAIL_FROM_ADDRESS'))->send(new NewsletterVerification($newsletter));

        return redirect()->back()->with('success', 'A verification email has been successfully sent to ' . $newsletter->email . '! Please click it to confirm your subscription.');
    }

    public function verify($token) {
        $newsletter = Email::where('token', $token)->firstOrFail();
        $newsletter->email_verified_at = Carbon::now()->timestamp;
        $newsletter->save();

        Mail::to($newsletter->email)->cc(env('MAIL_FROM_ADDRESS'))->send(new NewsletterConfirmation($newsletter));

        return redirect()->route('blog.home')->with('success', 'Your subscription has been verified.');
    }

    public function remove($token) {
        $newsletter = Email::where('token', $token)->firstOrFail();
        $newsletter->delete();

        return redirect()->route('blog.home')->with('success', 'Your subscription has been removed.');
    }
}
