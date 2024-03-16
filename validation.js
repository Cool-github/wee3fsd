const form=document.getElementById("form")
const username=document.getElementById("uname")
const email=document.getElementById("email")
const password=document.getElementById("pass")
const conpass=document.getElementById("cpass")
const tandc=document.getElementById("tc")

// add an event listener
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    Validate()
})

// to remove the empty spaces
function Validate(){
let nameValue=uname.value.trim()
let emailValue=email.value.trim()
let passValue=pass.value.trim()
let cpassValue=cpass.value.trim()
// }


// write conditions for above 

// us namecheck
if(nameValue===''){
    setError(uname,'username cannot be empty')
}else if(nameValue.length<3)
{
    setError(uname,'min 3 char req')
}
else{
    setSuccess(uname)

}

// emailcheck

if(emailValue===''){
    setError(email,'email cannot be empty')
}else if(!emailCheck(emailValue))
{
    setError(email,'enter valid email id')
}
else{
    setSuccess(email)

}


// passcheck
if(passValue===''){
    setError(pass,'password cannot be empty')
}else if(passValue.length<8)
{
    setError(pass,'min 8 char req')
}
else{
    setSuccess(pass)

}

// cpasscheck

if(cpassValue===''){
    setError(cpass,'cpass cannot be empty')
}else if(cpassValue!==passValue)
{
    setError(cpass,'pass not matched')
}
else{
    setSuccess(cpass)

}

// terms and conditions

if(!tandc.checked){
    setError(tc,'click on terms ans conditions')
}
else{
    setSuccess(cpass)

}


function setError(input,message){
let parent=input.parentElement;
let small=parent.querySelector('small')
small.innerText=message
parent.classList.add('error')
parent.classList.remove('success')


}

function setSuccess(input)
{
let parent=input.parentElement;
parent.classList.add('success')
parent.classList.remove('error')
}


function emailCheck(input){
    let emailreg=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid=emailreg.test(input)
    return valid
}


}