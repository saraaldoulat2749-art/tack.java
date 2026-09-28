   
   let container = document.getElementById("menu");
   let arr=[];
   fetch("menu.json")
   .then(response => response.json())
   .then(data =>
            {
            
            for(let i=0 ; i<data.menu.length ; i++){
                arr.push(data.menu[i]);
                container.innerHTML+=`<div>
                <p>Meal Name : ${data.menu[i].mealName}</p>
                <p>Price : ${data.menu[i].Price}</p>
                <p>Availability : ${data.menu[i].Availability}</p></div>`;
              
            }

        localStorage.setItem("menu" ,JSON.stringify(arr));    
            }
        )
    