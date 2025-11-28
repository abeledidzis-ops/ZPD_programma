function vaicajums(inputs){
   
    const inputValue = inputs
     document.getElementById("izvade").innerHTML = "Lādējas..."
    fetch("/api/data", {
        method: "POST",  // Change to POST request
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: inputValue })  // Send input value to backend
    })
    .then(response => response.json())
    .then(data => {
        rez = data.message.split("\n")
       let izvade = "Izvade veiksmīga<br><br>"
        
        console.log(rez)
        for(let i = 0; i < rez.length; i ++){
            izvade += rez[i] + "<br>"
        }
        function formats(teksts){
            teksts = teksts.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            teksts = teksts.replace(/```(.*?)```/g, '<pre>$1</pre>')

            return teksts
        }
        let galaIzvade = formats(izvade)
        document.getElementById("izvade").innerHTML =  galaIzvade ;
    })
    .catch(error => console.error("Error fetching data:", error));
}

refresh.style.display = "none"

function izdzestElementus(){
    temaT.style.display = "none"
    vektoriM.style.display = "none"
    linijasM.style.display = "none"
    kombinatorikaM.style.display = "none"
    statistikaM.style.display = "none"
    dalveidaM.style.display = "none"
    vienadibasM.style.display = "none"
    refresh.style.display = "block"
}

document.getElementById("vektoriM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases matemātikas tēmu Vektori un kustība, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("linijasM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases matemātikas tēmu Līnijas vienādojums, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("kombinatorikaM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases matemātikas tēmu Kombinatorika un varbūtība, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("statistikaM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases matemātikas tēmu Statistika")
    izdzestElementus()
});

document.getElementById("dalveidaM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases matemātikas tēmu Daļveida funkcija, algebriskās daļas, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("vienadibasM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases matemātikas tēmu Daļveida vienādojumi un nevienādības, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("refresh").addEventListener("click", function() {

    location.reload()
});