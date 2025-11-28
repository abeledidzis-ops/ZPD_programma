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
    const buttons = document.querySelectorAll("button"); // get all buttons
    buttons.forEach(btn => {
    if (btn.id !== "refresh") {
      btn.style.display = "none";
    }
    });
    document.getElementById("refresh").style.display = "block";
    document.getElementById("temaT").style.display = "none";
}

// document.getElementById("identitateV").addEventListener("click", function() {
//     vaicajums("Izveido kopsavilkumu par 10. klases vēstures tēmu Sociālās attiecības un identitāte, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
//     izdzestElementus()
// });

// document.getElementById("sabiedribaV").addEventListener("click", function() {
//     vaicajums("Izveido kopsavilkumu par 10. klases vēstures tēmu Mūsdienu sabiedrības attiecības ar vēsturi, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
//     izdzestElementus()
// });

// document.getElementById("demokratijaV").addEventListener("click", function() {
//     vaicajums("Izveido kopsavilkumu par 10. klases vēstures tēmu Demokrātiskas valsts pārvaldīšana, izskaidro visu, kas ir jāzina pirms pārbaudes darba rakstīšanas.")
//     izdzestElementus()
// });

async function ask(prompt2) {
        const prompt = prompt2 + " Respond only in minimal HTML (no <html> or <body>), replacing all Markdown formatting with proper HTML tags. Do not include any CSS. Also use <br> tags to make the text easier to read.";
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });
        const data = await res.json();
        //document.getElementById("izvade").textContent = data.reply;
        document.getElementById("testDiv").innerHTML = data.reply;
        console.log("test")

        izdzestElementus()
      }


document.getElementById("refresh").addEventListener("click", function() {

    location.reload()
});