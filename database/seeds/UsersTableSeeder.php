<?php

use Illuminate\Database\Seeder;
use App\User;
class UsersTableSeeder extends Seeder
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
        DB::collection('users')->insert([
        		'name' =>'prajwol',
        		'email' =>'example@gmail.com',
        		'password' => Hash::make('password')
        	]);
        foreach (range(0, 20) as $index) {
        	DB::collection('users')->insert([
        		'name' =>$faker->name,
        		'email' =>$faker->email,
        		'password' => Hash::make('password')
        	]);
        }
    }
}
