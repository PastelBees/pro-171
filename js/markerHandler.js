AFRAME.registerComponent("markerhandler", {
    init: async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found")
            this.handleMarkerFound()
            
        })

        this.el.addEventListener("markerLost",()=>{
            console.log("marker is not found")
            this.handleMarkerLost()

        })
    },

    handleMarkerFound: function(){

        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display="flex"
        
        var orderButton = document.getElementById("order-button")
        var orderSummaryButton = document.getElementById("order-summary-button")

      
        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks For the Order !",
                text:" ",
                timer: 2000,
                buttons: false     
            })
        })

        orderSummaryButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Order Summary",
                text: "Work In Progress",
      
            })
        })

    },

    handleMarkerLost: function(){
          //changing the button div visibility
          var buttonDiv = document.getElementById("button-div")
          buttonDiv.style.display="none"
    }
})