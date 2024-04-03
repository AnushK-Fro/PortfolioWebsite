@component('mail::message')
# Your subscription has been confirmed

Please click the button below if you would like to opt out from the newsletter subscription.

@component('mail::button', ['url' => route('newsletter.verify', $email->token)])
Opt Out
@endcomponent

Thanks,

{{ config('app.name') }}
@endcomponent
