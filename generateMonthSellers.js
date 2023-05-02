const monthSellers = [
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/Paulo.jpg",
        name: "Paulo Eduardo Konopka",
        area: "Programação",
        university: "UniOpet",
        stars: "NaN",
        sellsThisMonth: "69",
        sellAllTime: "169",
        profileUrl: "",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/josé.jpg",
        name: "José Augusto",
        area: "Programação",
        university: "UniOpet",
        stars: "NaN",
        sellsThisMonth: "69",
        sellAllTime: "169",
        profileUrl: "",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/bryan.jpg",
        name: "Bryan Alexandre",
        area: "Programação",
        university: "UniOpet",
        stars: "NaN",
        sellsThisMonth: "69",
        sellAllTime: "169",
        profileUrl: "",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/bruno.jpg",
        name: "Bruno Eufrasio",
        area: "Programação",
        university: "UniOpet",
        stars: "NaN",
        sellsThisMonth: "69",
        sellAllTime: "169",
        profileUrl: "",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/Trobojão.jpg",
        name: "João Scarante",
        area: "Programação",
        university: "UniOpet",
        stars: "NaN",
        sellsThisMonth: "69",
        sellAllTime: "169",
        profileUrl: "",
    },
    {
        imgUrl: "https://pewdizinho.github.io/PI1/assets/fotosZoadas/fundadores/JoãoTrizotte.jpg",
        name: "João Trizotte",
        area: "Programação",
        university: "UniOpet",
        stars: "NaN",
        sellsThisMonth: "69",
        sellAllTime: "169",
        profileUrl: "",
    },
]





function generateCard() {

    for (let seller of monthSellers) {

        // Create card element
        const card = document.createElement("div");
        card.className = "menuBoxCard row justify";


        const img = document.createElement("img");
        img.className = "menuBoxIcon"

        img.src = seller.imgUrl;
        card.appendChild(img);

        const infoLeft = document.createElement("div");
        infoLeft.className = "menuBoxInfo column justify";

        const infoRight = document.createElement("div");
        infoRight.className = "menuBoxInfo column";

        const name = document.createElement("p");
        const area = document.createElement("p");
        const university = document.createElement("p");
        const stars = document.createElement("p");
        const sellsThisMonth = document.createElement("p");
        const sellAllTime = document.createElement("p");

        name.innerText = seller.name;
        area.innerText = `Área: ${seller.area}`;
        university.innerText = `Faculdade: ${seller.university}`;
        stars.innerText = `Nota: ${seller.stars}`;
        sellsThisMonth.innerText = `Vendas realizadas esse mês: ${seller.sellsThisMonth}`;
        sellAllTime.innerText = `Vendas realizadas no total: ${seller.sellAllTime}`;

        name.className = "menuBoxInfo";
        area.className = "menuBoxInfo";
        university.className = "menuBoxInfo";
        stars.className = "menuBoxInfo";
        sellsThisMonth.className = "menuBoxInfo end";
        sellAllTime.className = "menuBoxInfo end";


        const spacer = document.createElement("div");
        spacer.className = "spacer";

        infoLeft.appendChild(name);
        infoLeft.appendChild(area);
        infoLeft.appendChild(university);
        infoLeft.appendChild(stars);
        infoRight.appendChild(sellsThisMonth);
        infoRight.appendChild(sellAllTime);

        card.appendChild(infoLeft);
        card.appendChild(spacer);
        card.appendChild(infoRight);

        // Add card to container
        const container = document.getElementById("menuBoxInside");
        container.appendChild(card);
    }

}