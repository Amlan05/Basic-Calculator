let String = "";
let btns = document.querySelectorAll('.btn');
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {

        if (e.target.innerHTML == "=") {
            String = eval(String);
            document.querySelector('input').value = String;
        }

        else if (e.target.innerHTML == "AC") {
            String = "";
            document.querySelector('input').value = String;
        } 

        else if (e.target.innerHTML == "C") {
            String = String.substring(0,String.length-1);
            document.querySelector('input').value = String;
        } 

        // else if (e.target.innerHTML == ("*" || "/" || "-" || "+" )) {
        //     console.log(e.target);
        //     String = e.target.innerHTML + String;
        //     document.querySelector('input').value = String;
        // } 
        


        else {
            console.log(e.target);
            String = String + e.target.innerHTML ;
            document.querySelector('input').value = String;
        }
    })
})