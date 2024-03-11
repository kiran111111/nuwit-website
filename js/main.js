const canvas = document.querySelector(".off-canvas");
const ham_button = document.querySelector(".hamburger");


ham_button.addEventListener("click",function(){
  canvas.classList.toggle("show");
  console.log(canvas)
})

// image gallery

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
 });


 // $(document).ready(function(){
 //  $("#an").click(function() {
 //   console.log("kira")
    // remove classes from all
    // $("#an").removeClass("active");
    // // add class to the one we clicked
    // $(this).addClass("active");
//  });
// });

const link = document.querySelector("#an");
console.log(link);
link.addEventListener("click",function(){
 console.log("kirna is silly");
})
