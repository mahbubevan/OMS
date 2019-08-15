<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/data','HomeController@get_data');
Route::post('/data','HomeController@store');
Route::put('/data/{data}','HomeController@update');
Route::delete('/data/{data}','HomeController@destroy');

Route::get('/excel','HomeController@exportExcel');
Route::post('/excel','HomeController@importExcel');
