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
class BlogController extends Controller
{
    public function index() {
        $posts = BlogPost::where('published', true)->get();
        return Inertia::render('Blog/BlogHome', [
            "posts" => $posts,
            "turnstile_sitekey" => env('TURNSTILE_SITE_KEY')
        ]);
    }

    public function updateBlogView($id) {
        $post = BlogPost::findOrFail($id);
        return Inertia::render('Blog/BlogEdit', [
            'id' => $id,
            'title' => $post->name,
            'description' => $post->description,
            'markdownText' => $post->markdown,
            'published' => $post->published,
            'author' => $post->author
        ]);
    }

    public function updateBlog(Request $request) {
        $markdown = $request->get('markdownText');
        $word_count = str_word_count($markdown);
        $read_time = floor($word_count/3.96);
        BlogPost::where('id', $request->get('id'))->update([
            'name' => $request->get('title'),
            'description' => $request->get('description'),
            'markdown' => $markdown,
            'word_count' => $word_count,
            'published' => $request->get('published'),
            'author' => $request->get('author')
        ]);
    }

    public function deleteBlog($id) {
        BlogPost::findOrFail($id)->delete();
        return Redirect::route('dashboard');
    }

    public function view($id) {
        $post = BlogPost::findOrFail($id);
        return Inertia::render('Blog/BlogView', [
            'post' => $post,
            'markdownText' => Str::markdown($post->markdown),
        ]);
    }

    public function createBlog(Request $request) {
        BlogPost::create([
            'name' => 'New Blog',
            'description' => 'This is a new blog',
            'markdown' => '# Example Markdown',
            'word_count' => 0,
            'published' => false,
            'author' => 'Anush'
        ]);
    }

    public function emailBlog($id) {
        $post = BlogPost::findOrFail($id);
        $users = Email::where('email_verified_at', '!=', null)->get();
        foreach ($users as $user) {
            Mail::to($user->email)->cc(env('MAIL_FROM_ADDRESS'))->send(new NewsletterNewPost($post, $user));
        }
    }
}
