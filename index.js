// console.log('hello');
             // like import
const express = require('express')
const app = express() // top level func. 
const PORT = 5000
const studentArray = require('./data')
const students = require('./data')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// //get method: data get , //post method , //delete , put() and patch()
app.get("/", (req, res)=>{  //frontend: REQ , back  
    res.send(students)

 }) //parameter : path

app.get('/allStudents', (req, res)=>{   
    res.send(studentArray)

})

// // app.get('/femaleStudents', (req, res)=>{ 
// //     let femaleStudents = studentArray.filter((x)=>{
// //         return x.gender == 'CSE'
// //     })  
// //     res.send("femaleStudents")

// // })

// // app.get('/fetchStudents', (req, res)=>{
// //     let filterArray = studentArray.filter((x)=>{
// //         return x.gender == req.query.gender
// //     })
// //     res.send(filterArray)
// // })
// // app.get('/fetchStudents', (req, res)=>{
// //     let filterArray = studentArray.filter((x)=>{
// //         return x.students  == req.query.students
// //     })
// //     res.send(filterArray)
// // })
// app.get('/fetchStudentsByParams/:gender/:name', (req, res)=>{
//     // console.log(req.params);
    
//     let filterArray = studentArray.filter((x)=>{
//         return x.gender == req.params.gender && x.name == req.params.name    
//     })
//     res.send(filterArray)
// })
// // app.get("/name", (req, res)=>{  //frontend: REQ , back  
// //     res.send('Aishwarya , Btech Cse, IKG PTU')

// // }) 


//server create
app.listen(PORT, (error)=>{
    if(error){
        console.log('error occured in server', error ); 
    }
    else{
        console.log('server is running');
    }
})
app.post('/fetchStudentsByParams/:gender/:name', (req, res)=>{
    // console.log(req.params);
    
    let filterArray = studentArray.filter((x)=>{
        return x.gender == req.params.gender && x.name == req.params.name    
    })
    res.send(filterArray)
})

app.post("/addStudents", (req, res)=>{
    // console.log("req.body", req.body);   
    
    let obj = {
        id:studentArray.length+1,
        name:req.body.name,
        department:req.body.department,
    }
    studentArray.push(obj)
    res.send(obj);
 })