AFRAME.RegisterComponent("create-buttons",{
    init: function(){
        //button 1
        var button1=document.createElement("button")
        button1.innerHTML="ORDER NOW"
        button1.setAttribute("id","order-button")
        button1.setAttribute("class","btn btn-warning")

         //button 2
         var button2=document.createElement("button")
         button2.innerHTML="ORDER SUMMARY"
         button2.setAttribute("id","order-summary-button")
         button2.setAttribute("class","btn btn-warning")

         //append buttons
         var buttonDiv=document.getElementById("button-div")
         buttonDiv.aappendChild(button1)
         buttonDiv.aappendChild(button2)
    },
})