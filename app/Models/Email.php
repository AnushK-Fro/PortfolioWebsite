<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Email extends Model
{
    use HasFactory;
    use Notifiable;

    protected $fillable = [
        'email',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime'
        ];
    }
}
