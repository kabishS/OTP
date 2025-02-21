const box = document.getElementById("box"); 
const see = document.getElementById("see"); 
const btn = document.getElementById('btn');



 btn.addEventListener('click', () => {
      for (let csee of see) {
        if (csee.checked) {
          see.innerText = csee.value;
        }
      }
    });
