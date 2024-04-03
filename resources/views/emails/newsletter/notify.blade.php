@component('mail::message')
# New Blog Post

I have posted a new post in my blog! Check it out!

## {{ $blogPost->name }}

{{ $blogPost->description }}

@component('mail::button', ['url' => route('blog.view', $blogPost->id)])
Check Post
@endcomponent

## Opt Out

You are receiving these emails because you have signed up to the blog at {{ config('app.url') }}. If you would like to opt out of receiving these emails, click this link: [Opt Out]({{route('newsletter.remove', $email->token)}}) ({{route('newsletter.remove', $email->token)}}). You will no longer receive emails from me.


Thanks,

{{ config('app.name') }}
@endcomponent


