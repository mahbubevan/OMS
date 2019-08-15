<?php

namespace App\Http\Controllers;

use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

use DB;
use App\User;
use Validator;
use Exporter;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function get_data()
    {
        $data = User::orderBy('id','asc')->paginate(5);
        $auth_user = auth()->user();
        
        return [
            $data,
            $auth_user
        ];
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'username' => ['required','max:255'],
            'email' => ['required','email','unique:users'],
            'role' => ['required'],
            'password' => ['required','min:8']
        ]);

        $user = new User();
        $user->name = $data['username'];
        $user->email = $data['email'];
        $user->role = $data['role'];
        $user->password = bcrypt($data['password']);

        if($user->save()){
            $user->push();
            return [
                'status' => 'Successfully Added',
                'data'   => $user
            ];
        }else{
            return ['status' => 'Error'];
        }
    }

    public function update($id)
    {
        $data = request()->validate([
            'name' => ['required','max:255'],
            'email' => ['required','email'],
            'role' => ['required'],
        ]);

        $user = User::FindOrFail($id);
        if($user->update($data)){
            return[
                'status' => 'Successfully Updated',
                'data'      => $user
            ];
        }else{
            return ['status' => 'Error' ];
        }

    }

    public function destroy($id)
    {
        $user = User::FindOrFail($id);
        if($user->delete()){
            return[
                'msg' => 'Successfully Deleted'
            ];
        }else{
            return[
                'msg' => 'Error Occured'
            ];
        }
    }


    public function importExcel(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'file' => ['required','max:5000','mimes:xlsx,xls,csv']
        ]);

        if($validator->passes()){
            $dateTime = date('Ymd_His');
            $file = $request->file('file');
            $filename = $dateTime.'-'.$file->getClientOriginalName();
            $savePath = public_path('/upload/');
            $file->move($savePath,$filename);
            return [
                'msg' => 'File uploaded successfully'
            ];
        }else{
            return[
                'msg' => $validator->errors()->all()
            ];
        }
    }

    public function exportExcel()
    {
        return Excel::download(new UsersExport, 'users credential.xlsx');
    }

    
}
