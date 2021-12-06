/***
 * # Exercise 4:
 *
 * **Part 1:**
 * Generate a random number between 0 and 20.
 * Fetch a colour, with that number as the id:
 * `https://reqres.in/api/color/:id` -> `https://reqres.in/api/color/15`
 *
 * If the request succeeds, put a box into the HTML with a background of that color.
 * If it fails, add a grey box to the HTML.
 *
 * **Part 2:**
 * Make a button that will run this again, adding each box to the html.
 *
 * Tips:
 * - 'response.status'
 */

const colorBtn = document.querySelector("#color-btn");

const renderColor = () => {
    const colorBox =document.querySelector("#color-box");

    const randNum = Math.floor(Math.random() * 21);

    fetch(`https://reqres.in/api/color/${randNum}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Status 404");
            }

            return res.json();
        })
        .then(clrObj => colorBox.style.background = clrObj.data.color)
        .catch(err => {
            colorBox.style.background = "#6c757d";

            console.error(err);
        });
}

renderColor();

colorBtn.addEventListener("click", () => {
    renderColor();
});