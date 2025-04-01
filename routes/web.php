<?php
use Illuminate\Support\Facades\Route;

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

Route::group(
    ['prefix' => 'portfolio'],
    function () {
        require base_path('routes/portfolio/web.php');
    }
);

Route::group(
    ['prefix' => 'portfolio/bhorius'],
    function () {
        require base_path('routes/bhorius/web.php');
    }
);

Route::group(
    ['prefix' => 'portfolio/libProject'],
    function () {
        require base_path('routes/libProject/web.php');
    }
);

Route::group(
    ['prefix' => 'portfolio/alone'],
    function () {
        require base_path('routes/alone/web.php');
    }
);



