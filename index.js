const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "./naruto.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "./gyukotsu.jpg", rating: 6, comment: "So creamy!" },
    { id: 4, name: "Kojiiro Ramen", restaurant: "Kajiro", image: "./kojiro.jpg", rating: 7, comment: "Best ramen in town!" },
    { id: 5, name: "Nirvana Ramen", restaurant: "Nivana", image: "./nirvana.jpg", rating: 6, comment: "So good!" },
 ];
 document.addEventListener("DOMContentLoaded", main);

function displayRamens() {
    const ramenMenu = document.querySelector("#ramen-menu");
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });

    // Display the first ramen's details automatically
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

function handleClick(ramen) {
    const ramenDetail = document.querySelector("#ramen-detail");
    ramenDetail.querySelector(".name").textContent = ramen.name;
    ramenDetail.querySelector(".restaurant").textContent = ramen.restaurant;
    ramenDetail.querySelector(".rating").textContent = ramen.rating || "N/A";
    ramenDetail.querySelector(".comment").textContent = ramen.comment || "No comments available.";
}

function addSubmitListener() {
    const form = document.querySelector("#new-ramen");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const newRamen = {
            id: ramens.length + 1,
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: form.rating.value,
            comment: form.comment.value,
        };

        ramens.push(newRamen);

        const ramenMenu = document.querySelector("#ramen-menu");
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));
        ramenMenu.appendChild(img);

        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}
 