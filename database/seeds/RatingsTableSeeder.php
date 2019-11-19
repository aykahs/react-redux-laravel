<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Book;
use App\Rating;
class RatingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
            protected $connection = 'mongodb';

    public function run()
    {
        $faker = Faker\Factory::create();
    	
        foreach (range(0, 20) as $index) {
           DB::collection('ratings')->insert([
                'user_id' => RAND(),
                'book_id' => RAND(),
                'rating' =>$faker->randomDigitNotNull
        ]);
        }
    }
}
