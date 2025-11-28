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
    sinusM.style.display = "none"
    trigonometrijaM.style.display = "none"
    pakapeM.style.display = "none"
    eksponentfunkcijaM.style.display = "none"
    taisnesM.style.display = "none"
    kermeniM.style.display = "none"
    refresh.style.display = "block"
}

document.getElementById("sinusM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases matemātikas tēmu Sinusa un kosinusa funkcijas, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("trigonometrijaM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases matemātikas tēmu Trigonometriskās izteiksmes un vienādojumi, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("pakapeM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases matemātikas tēmu Pakāpe ar racionālu kāpinātāju, ģeometriskā progresija, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("eksponentfunkcijaM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases matemātikas tēmu Eksponentfunkcija, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("taisnesM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases matemātikas tēmu Taisnes un plaknes telpā, daudzskaldņi, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("kermeniM").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases matemātikas tēmu Rotācijas ķermeņi, telpisku ķermeņu kombinācijas, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("refresh").addEventListener("click", function() {

    location.reload()
});