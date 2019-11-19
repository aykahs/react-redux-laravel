<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Book;
class BooksTableSeeder extends Seeder
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
           DB::collection('books')->insert([
                'user_id' => RAND(),
                'title' =>$faker->title,
                'description' =>$faker->paragraph(2)
            ]);
        }
    }
}
