const hov = document.getElementById("hov")
const text = document.getElementById("text")
const hov2 = document.getElementById("hov2")
const text2 = document.getElementById("text2")
const hov3 = document.getElementById("hov3")
const text3 = document.getElementById("text3")



hov.addEventListener("mouseout", function(){
    text.innerHTML = `<p>Login Page</p>`;
    text.classList.remove("change")
    text.classList.add("first")
    
})
hov.addEventListener("mouseover", function(){
    text.innerHTML=`
    <p>Login page that verifies if what you signed in with is the same with what you logged in with</p> 
    <button  class=" text-white text-[15px] border-4 border-[#6E07F3] px-[2rem] py-2 hover:bg-[#6E07F3] rounded-full" >Visit Website</button>`
    text.classList.add("change")
    
    

})
// second grid 
text2.addEventListener("mouseout", function(){
    text2.textContent = "Africash Clone";
    text2.classList.add("first")
    text2.classList.remove("change")
})
text2.addEventListener("mouseover", function(){
    text2.textContent = "Africash home page created with Html ,Tailwindcss and Javacscript";
    text2.classList.add("change")
})