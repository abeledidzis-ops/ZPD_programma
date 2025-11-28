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
    globalizacijaV.style.display = "none"
    ekonomikaV.style.display = "none"
    ieguldijumsV.style.display = "none"
    refresh.style.display = "block"
}

document.getElementById("globalizacijaV").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases vēstures tēmu Starptautiskās attiecības - ārpolitika un globalizācija, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("ekonomikaV").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases vēstures tēmu Inovatīva ekonomika, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("ieguldijumsV").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases vēstures tēmu Ilgtspējīga saimniekošana un ieguldījums cilvēkkapitālā, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("refresh").addEventListener("click", function() {

    location.reload()
});