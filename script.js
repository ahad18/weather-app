async function ahad() {
    const myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Key", "52bc138d33msh19399c13ae897e4p1fdc2djsnbaba75c8b754");
    myHeaders.append("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const search = document.getElementById('search').value;

    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`, requestOptions);
        const result = await response.json();

        const name = document.getElementById('location');
        name.innerHTML = `${result.location.name}, ${result.location.country}`;

        const rigion = document.getElementById('condition');
        rigion.innerHTML = result.current.condition.text;

        document.getElementById('icon').src = result.current.condition.icon;

        const centi = document.getElementById('temperature');
        centi.innerHTML = `${result.current.temp_c}°C`;

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
// Function to trigger when page loads
window.addEventListener('load', ahad);

// Function to trigger when button is clicked
document.getElementById('button-addon2').addEventListener('click', ahad);