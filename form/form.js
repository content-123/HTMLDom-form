function addToTable(){
    var mytable=document.getElementById("mytable")
    var firstname=document.getElementById("first-name").value
    var lastname=document.getElementById("last-name").value
    var email=document.getElementById("Email").value
    var address=document.getElementById("address").value
    var pin=document.getElementById("pincode").value
    var gen= document.querySelector('.gendercheck:checked').value
   var foo= document.querySelector('.foodcheckbox:checked').value


   var state=document.getElementById("State").value
   var country=document.getElementById("Country").value

   var newRow=mytable.insertRow(-1)
   var cell1=newRow.insertCell(0)
   var cell2=newRow.insertCell(1)
   var cell3=newRow.insertCell(2)
   var cell4=newRow.insertCell(3)
   var cell5=newRow.insertCell(4)
   var cell6=newRow.insertCell(5)
   var cell7=newRow.insertCell(6)
   var cell8=newRow.insertCell(7)
   var cell9=newRow.insertCell(8)

   cell1.textContent=firstname
   cell2.textContent=lastname
   cell3.textContent=email
   cell4.textContent=address
   cell5.textContent=pin
   cell6.textContent=gen
   cell7.innerHTML=foo
   cell8.innerText=state
   cell9.innerText=country

   return false
}


  document.getElementById("remove").onclick=function myDeleteFunction() {
  document.getElementById("mytable").deleteRow(-1);
} 