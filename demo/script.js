const messages = [ 
    

    "1. Press the Start button to initiate the reaction.",
    "2. Select 0.1M Potassium Iodide from the dropdown menu.",
    "3. Click on Potassium Iodide to measure it in the beaker.",
    "4. Transfer the measured Potassium Iodide solution to the conical flask.",
    "5. Choose the amount of 3% Hydrogen Peroxide from the dropdown menu.",
    "6. Measure the 3% Hydrogen Peroxide in a beaker.",
    "7. Pour the measured Hydrogen Peroxide solution into the conical flask.",
    "8. Measure 10 mL of 0.05M Sodium Thiosulphate Solution.",
    "9. Pour the measured Sodium Thiosulphate solution into the conical flask.",
    "10. Measure 10 mL of 2.5M Sulphuric Acid Solution.",
    "11. Pour the measured Sulphuric Acid into the conical flask.",
    "12. Measure 5 mL of 2% Starch Solution.",
    "13. Pour the measured Starch Solution into the conical flask.",
    "14. Measure the required amount of water to make the total solution volume 100 mL.",
    "15. Pour the water into the conical flask.",
    "16. Press the Next button.",
    "17. Stir the mixture thoroughly.",
    "18. Immediately start the stopwatch and observe the time when the mixture changes color to dark blue."    

];

const messagesh = [
    "1. प्रारंभ बटन दबाएं रिएक्शन को प्रारंभ करने के लिए।",
    "2. ड्रॉपडाउन मेनू से 0.1M पोटैशियम आयोडाइड चुनें।",
    "3. पोटैशियम आयोडाइड को मापने के लिए बेकर पर क्लिक करें।",
    "4. मापा हुआ पोटैशियम आयोडाइड सॉल्यूशन को कोनिकल फ्लास्क में डालें।",
    "5. ड्रॉपडाउन मेनू से 3% हाइड्रोजन पेरोक्साइड की मात्रा चुनें।",
    "6. बेकर में 3% हाइड्रोजन पेरोक्साइड मापें।",
    "7. मापा हुआ हाइड्रोजन पेरोक्साइड सॉल्यूशन को कोनिकल फ्लास्क में डालें।",
    "8. 0.05M सोडियम थाइओसल्फेट सॉल्यूशन का 10 मिलीलीटर मापें।",
    "9. मापा हुआ सोडियम थाइओसल्फेट सॉल्यूशन को कोनिकल फ्लास्क में डालें।",
    "10. 2.5M सल्फ्यूरिक एसिड सॉल्यूशन का 10 मिलीलीटर मापें।",
    "11. मापा हुआ सल्फ्यूरिक एसिड को कोनिकल फ्लास्क में डालें।",
    "12. 2% स्टार्च सॉल्यूशन का 5 मिलीलीटर मापें।",
    "13. मापा हुआ स्टार्च सॉल्यूशन को कोनिकल फ्लास्क में डालें।",
    "14. कुल सॉल्यूशन आयतन 100 मिलीलीटर बनाने के लिए जरूरी मात्रा का पानी मापें।",
    "15. पानी को कोनिकल फ्लास्क में डालें।",
    "16. अगला बटन दबाएं।",
    "17. मिश्रण को अच्छे से हिलाएं।",
    "18. तुरंत स्टॉपवॉच शुरू करें और मिश्रण का रंग गहरा नीला होने पर समय देखें।"
];



var hindibtn = document.querySelector("#hindi")
var engbtn = document.querySelector("#eng")
var langselector = document.querySelector("#langselector")
var mes1  

var counter=0

var lang
function hindi1(){
    console.log(lang)
    lang="hindi"
    langselector.style.visibility="hidden"
    update()
}

function eng1(){
    console.log(lang)
    lang="eng"
    langselector.style.visibility="hidden"
    update() 
}
function speech1(){
    if(lang=="hindi"){
        mes1=messagesh[counter-1]
        console.log(mes1)
    }
    else if(lang=="eng"){
        mes1=messages[counter-1]
        console.log(mes1)
    }
    setTimeout(function(){ 
        const utterance = new SpeechSynthesisUtterance(mes1);
        utterance.lang = 'hi-IN';
        utterance.pitch=1;
        utterance.rate=1;
        utterance.volume=1;
        speechSynthesis.speak(utterance);
    },500)
}

    var inst=document.querySelector("#message")
     inst.innerText=messages[counter]
     function update(){
      console.log(messages[counter])
      if(lang=="hindi"){
          inst.innerText=messagesh[counter]
      }
      else if(lang=="eng"){
          inst.innerText=messages[counter]
      }
      counter+=1
      speech1()
  }

// Add event listener to the "Next" button
document.getElementById("next").addEventListener("click", function() {
    // Toggle the visibility of the dropdown content
    var dropdownContent = document.querySelector(".dropdown");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});



