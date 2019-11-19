<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Book extends Eloquent
{
  protected $connection = 'mongodb';
    protected $collection = 'books';
	 protected $fillable = ['user_id', 'title', 'description'];
	 
     public function user()
    {
      return $this->belongsTo(User::class);
    }
    public function ratings()
    {
      return $this->hasMany(Rating::class);
    }
}
