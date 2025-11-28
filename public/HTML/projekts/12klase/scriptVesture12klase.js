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
    ticibaV.style.display = "none"
    kariV.style.display = "none"
    revolucijasV.style.display = "none"
    valstsV.style.display = "none"
    identitate2V.style.display = "none"
    refresh.style.display = "block"
}

document.getElementById("ticibaV").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases vēstures tēmu Ticība (reliģijas un iedeoloģija), izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("kariV").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases vēstures tēmu Kari un konflikti, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("revolucijasV").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases vēstures tēmu Revolūcijas, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("valstsV").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases vēstures tēmu Valsts, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("identitate2V").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases vēstures tēmu Sociālās grupas un identitāte, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("refresh").addEventListener("click", function() {

    location.reload()
});