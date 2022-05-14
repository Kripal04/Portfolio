const router = require('express').Router()

const nodemailer=require('nodemailer')


router.post('/contact',(req,res)=>{
    let data=req.body
    if(data.name.length===0 ||data.email.length===0||data.message.length===0){
        return res.json({msg:"please fill all the fields"})

    }
        let smtpTransporter = nodemailer.createTransport({
            service:'Gmail',
            port:465,
            auth:{
                user:'makvanakripalsinh13@gmail.com',
                pass:'Mk1371999137'
            }
        })
        let mailOption ={
            from:data.email,
            to:'makvanakripalsinh13@gmail.com',
            subject:'massage from ${data.name}',
            html:"<h3>Informations</h3><ul><li>Name: ${data.name}</li><li>Email: ${data.email}</ul><h3>Message</h3><p> ${data.massage}</p>"
        }
        smtpTransporter.sendMail(mailOption,(error)=>{
            try {
                    if(error) return res.status(400).json({msg:"please fill all the fields"})
                    res.status(200).json({msg:"Thank you for contacting kripalsinh"})                
            } catch (error) {
                if(error)return res.status(500).json({msg:"There is server error"})
            }
        })
    
})

module.exports=router