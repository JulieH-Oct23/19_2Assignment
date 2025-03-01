// // async practice assignment 12.5

// function goToGym() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pumpedIron = true;
//             if (pumpedIron) {
//                 resolve("You're Packing On Mass!");
//             }
//             else{
//                 reject("You're getting flabby. Stop skipping the gym.");
//             }
//         }, 2100);
//     });
// }

// function teachYoga () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const namaste = true;
//             if (namaste) {
//                 resolve("Continue bringing peace through breathwork.");
//             }
//             else {
//                 reject("Your commitment to peace is not negotiable.");
//             }
//         }, 1200);
//     });
// }

// function cleanHouse() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const declutter = true;
//             if (declutter) {
//                 resolve("Keep your house and mind tidy.");
//             }
//             else {
//                 reject("A messy house equals a messy mind.");
//             }
//         }, 1500);
//     });
// }

// async function dailyActivites() {

//     try{
//     const gotToGymResult = await goToGym();
//     console.log(gotToGymResult);

//     const teachYogaResult = await teachYoga();
//     console.log(teachYogaResult);

//     const cleanHouseResult = await cleanHouse();
//     console.log(cleanHouseResult);

//     console.log("All daily activity functions ran properly.");
//     }
// catch (error) {
//     console.error(error);
//     }
// }

// dailyActivites()

let favoriteNumber = 22;
let baseURL = "http://numbersapi.com";

async function adam() {
    try {
        let response = await axios.get(`${baseURL}/${favoriteNumber}?json`);
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data from numbers api:", error); 
    }
}
adam();

// second part
const randomNumbers = [21, 19, 17];

async function kidsAges() {
    try {
        let response = await axios.get(`${baseURL}/${randomNumbers}`)
        console.log(response.data);
    } catch {
        console.error("Error fetching kids ages for random:", error);
    }
}
kidsAges();

// third part
async function finalUnit() {
    const button = document.querySelector("button");
    button.addEventListener("click", makeShitWork);

    async function makeShitWork() {
        try {
            let facts = await Promise.all(
                Array.from({length:4}, () => axios.get(`${baseURL}/${favoriteNumber}?json`))
            );
            facts.forEach(response => {
                document.body.insertAdjacentHTML('beforeend', `<p>${response.data.text}</p>`);
            });
        } catch (error) {
            console.error("Error fetching data for final unit", error);
        }
    }
}
finalUnit();


