document.addEventListener("DOMContentLoaded", () => {
  const baseURL = 'https://deckofcardsapi.com/api/deck';

  async function drawOneCard() {
    try {
      const response = await axios.get(`${baseURL}/new/draw/`);
      const { suit, value } = response.data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    } catch (error) {
      console.error("Error fetching card data:", error);
    }
  }
   drawOneCard();
  
  
 // Part Two
  async function drawTwoSequentiallly() {
    try {
      const firstCardResponse = await axios.get(`${baseURL}/new/draw/`);
      const deckId = firstCardResponse.data.deck_id;
      const secondCardResponse = await axios.get(`${baseURL}/${deckId}/draw/`);
        [firstCardResponse.data, secondCardResponse.data].forEach(cardData => {
          const { suit, value } = cardData.cards[0];
          console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
        });
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    }
    drawTwoSequentiallly();
  
  
  
  
// Part Three
    async function setup() {
      try {
        const btn = document.querySelector("button");
        const cardArea = document.querySelector("#card-area");
  
        const deckResponse = await axios.get(`${baseURL}/new/shuffle/`);
        const deckId = deckResponse.data.deck_id;
  
        btn.style.display = "block";
        btn.addEventListener("click", async () => {
          try {
            const cardResponse = await axios.get(`${baseURL}/${deckId}/draw/`);
            const card = cardResponse.data.cards[0];
            const cardImg = document.createElement("img");
            const angle = Math.random() * 90 - 45;
            const randomX = Math.random() * 40 - 20;
            const randomY = Math.random() * 40 - 20;
  
            cardImg.src = card.image;
            cardImg.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`;
            cardArea.appendChild(cardImg);
  
            if (cardResponse.data.remaining === 0) {
              btn.remove();
            }
          } catch (error) {
            console.error("Error drawing card:", error);
          }
        });
      } catch (error) {
        console.error("Error setting up deck:", error);
      }
    }
  
    setup();

  });