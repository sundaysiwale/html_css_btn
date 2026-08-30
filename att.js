// Created by user on 7/12/2026, 3:23:37 PM
// Last modified by user on 7/12/2026, 7:56:39 PM
const over = document.querySelector(".over");
const name = document.querySelector(".name");

//alert("hello");
// name.classList.remove("name");

const mouseOver =  function(){
    
    name.textContent = "Enrollments are ongoing, register with us\nTo kick start your coding journey with ease, clarity, precision, funny and great excitement🤸with our mini classes and bootcamps";
    name.classList.add("name");
    name.style.width = "250px";
    name.style.height = "0px";
    
};
const mouseLeave = function(){
    
    // name.textContent = "name.display: none;";
    name.classList.remove("name");
    name.style.display = 'none';
    
};
over.addEventListener('mouseover', mouseOver);
over.addEventListener('mouseleave', mouseLeave);
