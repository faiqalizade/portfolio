<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WorkExperiences;
use Illuminate\Http\Request;

class WorkExperiencesController extends Controller
{
    /**
     * Class constructor.
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum')->only(['store','update','destroy']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response(WorkExperiences::orderByDesc("created_at")->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // return response($request);
        $this->validate($request,[
            'date' => "required",
            'title' => "required",
            'company' => "required",
            'description' => "required",
        ]);
        return WorkExperiences::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Api\WorkExperiences  $workExperiences
     * @return \Illuminate\Http\Response
     */
    public function show(WorkExperiences $workExperiences)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Api\WorkExperiences  $workExperiences
     * @return \Illuminate\Http\Response
     */
    public function edit(WorkExperiences $workExperiences)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Api\WorkExperiences  $workExperiences
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, WorkExperiences $workExperiences,$work)
    {
        //
        $this->validate($request,[
            'date' => "required",
            'title' => "required",
            'company' => "required",
            'description' => "required",
        ]);
        $work = $workExperiences::findOrFail($work);
        return response($work->fill($request->all())->save());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\WorkExperiences  $workExperiences
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkExperiences $workExperiences, $id)
    {
        //
        $work = $workExperiences::findOrFail($id);
        return response($work->delete());
    }
}
