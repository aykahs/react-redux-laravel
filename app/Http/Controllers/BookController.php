<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
 
use App\Book;
use App\Http\Resources\BookResource;
class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
    */

    public function index(Request $request)
    {
      
              // dd( $request->book);

        $books = Book::paginate(10);
         if ( $request['book'] != null) {
            $books = Book::where('title','like', '%'.$request->book.'%')->paginate(5);
        }

      return response()->json(['books'=>$books]);
    }

    public function store(Request $request)
    {
                    // dd( $request->all());
  $request->validate([

            'title' => 'required',
            'desc' => 'required',

        ]);
      $book = Book::create([
        'user_id' => 1,
        'title' => $request->title,
        'description' => $request->desc,
      ]);

       return response()->json($book);
    }
    public function update(Request $request, $id)
    {

      $book = Book::where('_id',$id)->first();
      // dd($book);
      $book->title =$request->title;
        $book->description = $request->desc;
        $book->save();
        return response()->json(['success'=>'update','book'=>$book],200);

    }

    public function show(Book $book)
    {
      dd($book);
      return new BookResource($book);
    }

   

    public function destroy(Book $book)
    {
      $book->delete();

      return response()->json(null, 204);
    }
}