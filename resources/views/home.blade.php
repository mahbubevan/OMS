@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <div class="row">
                        <div class="col">
                            <div class="">
                                @if(auth()->user()->role=='super_admin')
                                    You Can Manage <span class="btn btn-sm bg-success btn-disabled text-white"> Admin & User's</span>
                                @endif
                                @if(auth()->user()->role=='admin')
                                   
                                        You Can Manage Only <span class="btn btn-sm bg-success btn-disabled text-white"> user's</span>
                                   
                                @endif
                            </div>
                        </div>
                        <div class="col">
                            You are logged in as <span class="btn btn-sm bg-success btn-disabled text-white"> {{auth()->user()->role}} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="react-app">

</div>
@endsection
