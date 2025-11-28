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
    mehanikaF.style.display = "none"
    siltumfizikaF.style.display = "none"
    elektromagnetisms2F.style.display = "none"
    optikaF.style.display = "none"
    modernaF.style.display = "none"
    refresh.style.display = "block"
}

document.getElementById("mehanikaF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases fizikas tēmu Mehānika, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("siltumfizikaF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases fizikas tēmu Siltumfizika, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("elektromagnetisms2F").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases fizikas tēmu Elektromagnētisms, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("optikaF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases fizikas tēmu Viļņu optika, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});

document.getElementById("modernaF").addEventListener("click", function() {
    vaicajums("Izveido kopsavilkumu par 12. klases fizikas tēmu Modernā fizika, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
    izdzestElementus()
});


document.getElementById("refresh").addEventListener("click", function() {

    location.reload()
});