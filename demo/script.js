const messages = [ 
   " Press on the next button to start the reaction.",
   
   " Select the amount of 0.1M Potassium Iodide by choosing on dropdown menu ",
   " now click on potassium iodide to measure it in the beaker",
   " now click on the beaker to put the solution in flask",
   " choose the amount of 3% Hydrogen Peroxide and measure it in measuring cylinder ",
   " Now pour the measured solution in conical flask",
   "measure 10ML of 0.05M Sodium Thiosulphate Solution",
   "Now pour the measured sodium thiosulphate  in conical flask",
   "Press the next button.",
   "measure 10ML of 2.5M Sulphuric Acid Solution",
   "Now pour the measured sulphuric acid in conical flask",
   "Press the next button.",
   "measure 5ML of 2% Starch Solution",
   "Now pour the measured starch solution in conical flask",
   "Press the next button.",
   "measure required amount of water to make the whole solution 100Ml",
   "pour the water into conical flask",
   "Press the next button.",
   "Now Stir the mixture",
   "Immediately start the Stop watch and observe the timming when the mixture convert the colour into dark blue"
];

const messagesh=[" वर्चुअल रासायनिक प्रयोगशाला में आपका स्वागत है, घड़ी रिएक्शन को करने के लिए। ",
" अपनी पसंदीदा भाषा चुनें।",
" उन्हें हविंग करके समाधानों के साथ अपने आप को परिचित करें।",
" प्रारंभ करने के लिए आगे बटन दबाएं।" ,
"0.1M पोटेशियम आयोडाइड की मात्रा का चयन करें और मापन बेलन में मापें।",
"अब मापी गई विलय को कोनिकल फ्लास्क में डालें।",
"आगे बटन पर क्लिक करें।",
" 3% हाइड्रोजन पेरॉक्साइड की मात्रा का चयन करें और मापन बेलन में मापें।",
 "अब मापी गई विलय को कोनिकल फ्लास्क में डालें।",
"0.05M सोडियम थाइओसल्फेट समाधान का 10मिलीलीटर मापन करें।",
 "अब मापी गई सोडियम थाइओसल्फेट को कोनिकल फ्लास्क में डालें।",
"आगे , बटन दबाएं।",
"2.5M सल्फ्यूरिक एसिड समाधान का 10मिलीलीटर मापें।",
" अब मापी गई सल्फ्यूरिक एसिड को कोनिकल फ्लास्क में डालें।",
"आगे , बटन दबाएं।",
" 2% स्टार्च समाधान की आवश्यक मात्रा मापें।",
"अब मापी गई स्टार्च समाधान को कोनिकल फ्लास्क में डालें।",
"आगे , बटन दबाएं।",
"पूरे समाधान को 100मिलीलीटर बनाने के लिए जरूरी मात्रा का पानी मापें।",
" पानी को कोनिकल फ्लास्क में डालें।",
"आगे , बटन दबाएं।",
" अब मिश्रण को उत्तेजित करें।",
" तुरंत स्टॉपवॉच शुरू करें और समय नोट करें जब मिश्रण का रंग गहरा नीला हो जाए।"];


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

  var emptyflask=document.querySelector("#emptyflask")
  var emptybeaker=document.querySelector("#emptybeaker")
  var stir=document.querySelector("#stir")
  var kifull=document.querySelector("#kifull")
  var h2o2full=document.querySelector("#h2o2full")
  var na2s2o3full =document.querySelector("#na2s2o3full")
  var h2so4full=document.querySelector("#h2so4full")
  var starchfull=document.querySelector("#starchfull")
  var waterfull=document.querySelector("#waterfull")
var dropdown=document.querySelector("#dropdown")



// ######## 1st step ##############
//Add event listener to the "Next" button
document.getElementById("next").addEventListener("click", function() {
    update();
    // Toggle the visibility of the dropdown content
    var dropdownContent = document.querySelector(".dropdown");
 {
        dropdownContent.style.display = "block";
    }
});

document.getElementById("kifull").addEventListener("click",function(){
    
})
// Add event listener to the dropdown select element
document.getElementById("KI").addEventListener("change", function() {
    // Update the message when an option is selected from the dropdown
    update();
});

function SelectItem(){
    let item =document.getElementById('KI').value
    document.getElementById('INSTRUCTION').innerHTML="you have selected"+item
}
