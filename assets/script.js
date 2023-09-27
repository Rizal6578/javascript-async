const product = [
{
    imageSrc: "/assest/image/minuman 1.jpg",
    name: "Alpukat Squash",
    description: "Nikmati sensasi segar dan lezat dengan Minuman Alpukat Squash kami! ..."
},
{
    imageSrc: "/assest/image/minuman 2.jpg",
    name: "Strawberry Aquash",
    description: "Stroberi Squash adalah minuman segar yang memukau dengan sentuhan manis stroberi segar. Kami mencampur stroberi matang dengan gula secukupnya untuk menciptakan rasa yang sempurna. Minuman ini adalah pilihan yang luar biasa di hari panas atau saat Anda ingin memanjakan diri dengan sesuatu yang manis dan menyegarkan."
},
{
    imageSrc: "/assest/image/minuman 3.jpg",
    name: "Korean Strawbery Milk",
    description: "Korean Stroberi Milk adalah minuman yang menghadirkan rasa stroberi yang khas dengan kelembutan susu. Kami menggunakan stroberi segar yang dicampur dengan susu kental manis untuk memberikan sentuhan lembut pada rasa stroberi yang segar. Ini adalah minuman yang cocok untuk menghadirkan cita rasa Korea yang unik dalam setiap tegukan."
},
{
    imageSrc: "/assest/image/minuman 4.jpg",
    name: "Cappucino Ice",
    description: "Cappuccino Ice adalah minuman kopi yang menyegarkan dan membangunkan. Kami meracik espresso berkualitas tinggi yang disajikan di atas es batu yang lembut. Kemudian, kami menambahkan susu untuk memberikan rasa yang lembut dan creamy pada kopi. Cappuccino Ice adalah pilihan yang tepat untuk pecinta kopi yang ingin merasakan kopi dengan nuansa dingin yang menyegarkan."
},
{
    imageSrc: "/assest/image/snack 1.jpg",
    name: "Nasi Goreng",
    description: "Nikmati kelezatan Nasi Goreng kami yang lezat. Kami meracik nasi yang gurih dan renyah dengan bumbu-bumbu khas yang memberikan rasa yang lezat dan memanjakan lidah Anda. Ditambah dengan pilihan tambahan seperti telur, ayam, atau udang, Nasi Goreng kami pasti akan memuaskan selera Anda."
},
{
    imageSrc: "/assest/image/snack 2.jpg",
    name: "Kentang Goreng",
    description: "Kentang Goreng kami adalah camilan yang sempurna untuk menemani waktu bersantai Anda. Kami memotong kentang segar menjadi potongan-potongan kecil, kemudian menggorengnya hingga keemasan dan mengenyangkan. Dapatkan sensasi renyah dan gurih yang tak tertandingi dengan setiap gigitan."
},
{
    imageSrc: "/assest/image/snack 3.jpg",
    name: "Piscok (Pisang Coklat)",
    description: "Piscok, atau Pisang Coklat Keju, adalah hidangan manis yang sangat disukai oleh banyak orang. Kami menggoreng pisang matang hingga keemasan dan kemudian memberikan sentuhan coklat dan keju yang lezat. Rasakan paduan manis pisang, coklat, dan keju dalam setiap suapan Piscok kami."
},
{
    imageSrc: "/assest/image/snack 4.jpg",
    name: "Keripik Pisang",
    description: "Keripik Pisang kami adalah camilan ringan yang enak dan lezat. Kami memotong pisang menjadi irisan tipis, kemudian menggorengnya dengan sempurna untuk menghasilkan keripik yang renyah dan manis. Ini adalah pilihan camilan yang cocok untuk dinikmati sambil bersantai di kafe kami."
}
];

// ...
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const productImage = document.createElement("img");
            productImage.src = product.imageSrc;

            const productName = document.createElement("h2");
            productName.textContent = product.name;

            const productDescription = document.createElement("p");
            productDescription.textContent = product.description;

            productDiv.appendChild(productImage);
            productDiv.appendChild(productName);
            productDiv.appendChild(productDescription);

            productList.appendChild(productDiv);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
// ...


document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    // Ganti URL API dengan URL yang sesuai
    const apiUrl = "https://crudcrud.com/api/YOUR_API_ENDPOINT";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                const productImage = document.createElement("img");
                productImage.src = product.imageSrc;

                const productName = document.createElement("h2");
                productName.textContent = product.name;

                const productDescription = document.createElement("p");
                productDescription.textContent = product.description;

                productDiv.appendChild(productImage);
                productDiv.appendChild(productName);
                productDiv.appendChild(productDescription);

                productList.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        // Di sini, 'data' adalah respons JSON dari API
        // Anda dapat melakukan apa yang Anda inginkan dengan data ini
        console.log(data); // Ini hanya contoh, Anda bisa melakukan hal lain dengan data ini
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
