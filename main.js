const buyButtons = document.querySelectorAll('.buy');
const payment = document.getElementById('payment');
    const close = document.querySelector('.close');




    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            payment.style.display = "flex";
        }
        );
    
    close.addEventListener("click", () => {
        payment.style.display = "none";

    });
    }
    );