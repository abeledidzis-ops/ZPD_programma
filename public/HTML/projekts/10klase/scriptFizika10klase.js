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
    vektoriF.style.display = "none"
    vienmerigaKF.style.display = "none"
    atomsF.style.display = "none"
    vienmerigiPKF.style.display = "none"
    mijiedarbibaF.style.display = "none"
    gravitacijaF.style.display = "none"
    energijaF.style.display = "none"
    mehanikaF.style.display = "none"
    refresh.style.display = "block"
}

document.getElementById("vektoriF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases fizikas tēmu Vektori un kustība, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
     
});

document.getElementById("vienmerigaKF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases fizikas tēmu Vienmērīga kustība, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("atomsF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases fizikas tēmu Atoma un vielas uzbūve, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("vienmerigiPKF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases fizikas tēmu Vienmērīgi paātrināta kustība, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("mijiedarbibaF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases fizikas tēmu Mijiedarbība un spēks, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("gravitacijaF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases fizikas tēmu Gravitācijas lauks un kustība, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("energijaF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases fizikas tēmu Enerģija un darbs, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("mehanikaF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 10. klases fizikas tēmu Mehāniskās svārstības un viļņi, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("refresh").addEventListener("click", function() {

    location.reload()
});