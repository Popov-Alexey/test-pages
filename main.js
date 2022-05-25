document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("whoareyou").addEventListener("click", getLifeRule);

    function getLifeRule()
    {
        let items = [
            "Хуибола",
            "Говноед",
            "Хлебопашец",
            "Сиськонюх",
            "Жопоплюх"
        ], block_text = document.querySelector(".life-rule__text");
        let random_item = items[Math.floor(Math.random()*items.length)];
        block_text.textContent = random_item;
    }
});