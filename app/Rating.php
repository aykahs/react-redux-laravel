<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Rating extends Eloquent
{
	protected $connection = 'mongodb';
    protected $collection = 'ratings';
	protected $fillable = ['book_id', 'user_id', 'rating'];
    
    public function book()
    {
      return $this->belongsTo(Book::class);
    }
}
