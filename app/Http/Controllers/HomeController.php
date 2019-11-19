<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
   

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
          $books = Book::paginate(5);
        

        return view('books',compact('books'));
    }
     public function home()
    {
       
        

        return view('home');
    }
    public function open($id)
    {
       return view('model');
    }
}
