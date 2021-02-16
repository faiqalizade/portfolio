<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function sendMail(Request $request){
        // Mail::to("faiq.alizade.89@mail.ru")->send(new ContactMail);
        $this->validate($request,[
            'name' => "required",
            'email' => 'required|email',
            'message' => "required"
        ]);
        Mail::send('welcome',["data"=>[$request->name,$request->email,$request->message]],function($message){
            $message->from('faiq.lenkaranli@gmail.com');
            $message->to('faiq.alizade.00@mail.ru')->subject('Message from portfolio contacts');
        });
    }
}
