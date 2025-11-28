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
    indukcijaM.style.display = "none"
    varbūtībaM.style.display = "none"
    virknesM.style.display = "none"
    pakapes2M.style.display = "none"
    dalveida2M.style.display = "none"
    atvasinajumsM.style.display = "none"
    integralisM.style.display = "none"
    trigonometrija2M.style.display = "none"
    geometrijaM.style.display = "none"
    planimetrijaM.style.display = "none"
    stereometrijaM.style.display = "none"
    refresh.style.display = "block"
}

document.getElementById("indukcijaM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Matemātiskā indukcija, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("varbūtībaM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Varbūtība un statistika II, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("virknesM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Virknes un eksponentfunkcija, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("pakapes2M").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Pakāpes funkcija un logaritmiskā funkcija, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("dalveida2M").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Daļveida funkcija un algebriskie pārveidojumi, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("atvasinajumsM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Atvasinājums un tā lietojums, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("integralisM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Integrālis un tā lietojums, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("trigonometrija2M").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Trigonometrija II, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("geometrijaM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Analītiskā ģeometrija II, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("planimetrijaM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Planimetrija, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("stereometrijaM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases matemātikas tēmu Stereometrija, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});



document.getElementById("refresh").addEventListener("click", function() {

    location.reload()
});