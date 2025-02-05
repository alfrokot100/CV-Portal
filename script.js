console.log("Konsolen fungerar!!!?")
document.addEventListener('DOMContentLoaded', () =>{

const oddElement = document.querySelector('.logo');
oddElement.addEventListener('click', () =>{
    if(oddElement)
        {
            document.body.style.backgroundImage = "url('./Images/image.png')";
            document.body.style.backgroundSize = 'cover';
            document.body.style.transition = 'background-image 0.8s ease-in-out'; // Lägg till transition

            document.querySelector('.home').style.backgroundColor = 'transparent';


        }
        else{console.error("Elementet hittas tyvärr inte!");}
    });
});

/*---------------------------------------------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    const secretCode = [49, 51, 51, 55]; // Kod för "1337"
    let userInput = [];

    // Lyssna på tangenttryckningar
    document.addEventListener("keydown", (event) => {
        userInput.push(event.keyCode);

        // Håll endast senaste fyra tangenttryckningar
        if (userInput.length > secretCode.length) {
            userInput.shift();
        }

        // Jämför med den hemliga koden
        if (JSON.stringify(userInput) === JSON.stringify(secretCode)) {
            showModal(); // Visa modal när koden är korrekt
        }
    });

    // Skapa och visa modal-popup
    function showModal() {
        const modal = document.createElement("div");
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                color: black;
                font-size: 15px;
                padding: 30px;
                border: 2px solid black;
                z-index: 1000;">
                <p>Grattis! Du hittade påskägget! </p>
                <button id="closeModal">Stäng</button>
            </div>
        `;
        document.body.appendChild(modal);

        // Stäng modal när man klickar på knappen
        document.getElementById("closeModal").addEventListener("click", () => {
            modal.remove();
        });
    }
});

document.addEventListener('DOMContentLoaded', () =>{
    
    const oddEle = document.querySelector('.logo');
    oddEle.addEventListener('click', () =>{
        if(oddEle)
            {
                document.body.style.backgroundImage = "url('./Images/image.png')";
                document.body.style.backgroundSize = 'cover';
            }
        else
        {
            console.error("Kompis elementet hittas inte, gör om och gör rätt.");
            console.error("Detta går inte kompis kolla på vad som hände")
        }
    })
})