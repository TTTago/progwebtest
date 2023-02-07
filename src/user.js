export class User {
    constructor(name, age,location , data) {
        this.name = name,
        this.age = age,
        this.location = location,
        this.data = false;
    }

    generateElement() {
        
        const containerElement = document.createElement("div");
        // Lui ajoute une class "color"
        containerElement.classList.add("user");
        // Ajoute l'attribut de donnée "data-color"
        containerElement.dataset.color = this.data-present;

        containerElement.insertAdjacentHTML("afterbegin", childHTML);

        const HTML = 
        `<img src="https://randomuser.me/api/portraits/women/37.jpg">
		<div class="user--info">
				<h1>${this.name}</h1>
				<p>${this.age} years old</p>
				<p>${this.location}</p>
		</div>
		<a href="mailto:mareike.bottenberg@example.com">
				<span class="mail">✉️</span>
		</a>`;
        
        return;
      }

      render(){
        document.querySelector(main).insertAdjacentHTML(containerElement, HTML);
      }

    displayColors = (data) =>{
        data.addEventlistener("click");
        const data = document.querySelector(".user"[data-present ]);
        if (data = true){
            this.data = data-present;
            
          
        }
        
      }

}