@component('mail::message')
# Verify your email address

Please click the button below to verify your email address and receive notifications for new blog posts. If you were not expecting this email, it is perfectly safe to ignore it.

@component('mail::button', ['url' => route('newsletter.verify', $email->token)])
Verify Email
@endcomponent

Thanks,

{{ config('app.name') }}
@endcomponent


