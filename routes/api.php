<?php

use App\Http\Controllers\Api\PortfolioContoller;
use App\Http\Controllers\Api\SkillsController;
use App\Http\Controllers\Api\WorkExperiencesController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SiteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get("check",function (){return response(['success' => true],200);});

Route::middleware('auth:sanctum')->resource("blog",BlogController::class);
Route::resource("portfolio",PortfolioContoller::class);
Route::resource("site",SiteController::class);
Route::resource("work",WorkExperiencesController::class);
Route::resource("resume",SkillsController::class);
Route::post("login",[LoginController::class,'store']);
// Route::middleware('auth:sanctum')->post("login",[LoginController::class,'store']);
Route::middleware('auth:sanctum')->get("login/check/",[LoginController::class,'check']);
Route::post("sendMail",[HomeController::class,'sendMail']);