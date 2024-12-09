const Student=require('../model/StudentProfile');


exports.InsertStudent=async(req,res)=>{
    const sp=new Student(req.body);
    try{

        const newstudent=await sp.save()
        res.status(200).json(newstudent);

    }catch(err){
        res.status(400).json({message:err.message})

    }
}


exports.GetStudents=async(req,res)=>{
    try{
        const students=await Student.find();
        res.json(students);

    }catch(err){
        res.status(400).json({message:err.message})
    }
}



exports.GetByID=async(req,res)=>{
    try{
        const profile=await Student.findById(req.parms.id);
        if(!profile){
            return res.status(404).json({message:"student profile not found"})
        }
        res.status(200).json(profile);

    }catch(err){
        res.status(400).json({message:err.message})
    }
}