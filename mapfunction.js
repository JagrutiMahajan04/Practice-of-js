const students = ["Minion","Shinchan","Kiteresthu","Hagemaru"]

 const val = students.map((student,index)=> {

    console.log("sending email to"  +student)
    if(index%2==0)
    {
      return "Email sent to" +student
    }
    else
    {
      return "Email not sent to" +student
    }
 }) 
 console.log(val)