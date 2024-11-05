<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){
        try {
            $credentials = $request->only(['email', 'password']);


            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }

            return response()->json([
                'data' => [
                    'access_token' => $token,
                    'token_type' => 'bearer',
                    'expires_in' => auth()->factory()->getTTL() * 60
                ]
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'data' => [
                    "message" => "An error ocurred",
                    "error" => $th->getMessage()
                ]
            ], 500);
        }
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return response()->json([
            'data' => [
                'access_token' => auth()->refresh(),
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60
            ]
        ]);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function register(RegisterRequest $request) {
        try {
            $user = new User();

            $user->fill([
                "password" => Hash::make($request->password),
                "name" => $request->name,
                "email" => $request->email,
            ])->save();

            return response()->json([
                'data' => [
                    'user' => $user,
                    'message' => "User created with success"
                ]
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'data' => [
                    "message" => "An error ocurred"
                ]
            ], 500);
        }
    }
}
