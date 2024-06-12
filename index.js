const text = document.getElementById("text")
const text2 = document.getElementById("text2")

text.addEventListener("mouseout", function(){
    text.textContent = "Login Page";
    text.classList.add("first")
    text.classList.remove("change")
})
text.addEventListener("mouseover", function(){
    text.textContent = "Login page that verifies if what you signed in with is the same with what you logged in with";
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