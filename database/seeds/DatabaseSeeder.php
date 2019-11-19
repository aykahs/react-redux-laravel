<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
        protected $connection = 'mongodb';

   protected $tables = [
   	'users','books','ratings'
   ];
   protected $Seeders = 
   [
   	'UsersTableSeeder',
   	'BooksTableSeeder',
   	'RatingsTableSeeder'
   ];

    public function run()
    {
       Eloquent::unguard();
       $this->cleandatabase();
       foreach ($this->Seeders as $Seederclass) {
       	$this->call($Seederclass);
       }
    }
    private function cleandatabase()
    {
    	// DB::statement('SET FOREIGN_KEY_CHECKS=0');
    	foreach ($this->tables as $table) {
    		DB::table($table)->truncate();
    	}
    	// DB::statement('SET FOREIGN_KEY_CHECKS=1');

    }
}
