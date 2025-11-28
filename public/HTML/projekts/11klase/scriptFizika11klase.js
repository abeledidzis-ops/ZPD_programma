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
    siltumsF.style.display = "none"
    elektriskaisF.style.display = "none"
    lidzstravaF.style.display = "none"
    elektromagnetismsF.style.display = "none"
    vilniF.style.display = "none"
    apgaismojumsF.style.display = "none"
    visumsF.style.display = "none"
    refresh.style.display = "block"
}

document.getElementById("siltumsF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases fizikas tēmu Siltums un siltuma procesi, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("elektriskaisF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases fizikas tēmu Elektriskais lauks, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("lidzstravaF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases fizikas tēmu Līdzstrāva, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("elektromagnetismsF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases fizikas tēmu Elektromagnētisms, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("vilniF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases fizikas tēmu Elektromagnētiskie viļņi, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("apgaismojumsF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases fizikas tēmu Apgaismojums un attēli, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("visumsF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 11. klases fizikas tēmu Atoms un visums, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("refresh").addEventListener("click", function() {

    location.reload()
});