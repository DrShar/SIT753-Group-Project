//
// This is the Javascript file I have included to enable various functions of my code such as Button Toggles, Link Redirections, etc. 
// Additionally I have included the functions required for correct implementation of my user stories and features I have identified in Sprint 1  
// These include Accessibility Options like Colour-Blind Mode and Font Size Customisation as well as Language Support to Choose Language 
// ~ Sharath Vijayananda 
// 

// The below function is for the 'Current Students' button to redirect to the relevant Enrolment and Fees url I have included in the html file 
function redirectTo(url) {
 window.open(url, '_blank')}; // used _blank so that the Enrolment and Fees url opens in a new tab, while leaving the main tab of the SIT753 Unit Site as is 


 //Choose Language feature for user powered by Google Translate API and translate element here
 //Note: To test this, please run the code through live server and not just by opening the static html through terminal
 function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }


//Creating Accessibility Option #1 : Font Size Customisation 
//Discrete Font Size Customisation option for the users through Button
    let cont = document.getElementById("container");
function changeSizeByBtn(size) {
    // Set value of the parameter as fontSize
    cont.style.fontSize = size;
}

//Continuous Dynamic Font Size Customisation option for users through Slider 
function changeSizeBySlider() {
    let slider = document.getElementById("slider");
    // Set slider value as fontSize
    cont.style.fontSize = slider.value + "px";
}

//Creating Accessibility Option #2: Colour-Blind Mode   
// Provinding users with protanopia i.e., Red-Green Colour-Blindness the option to view the unit site in a more accessible manner 
// Note: To test this feature, please run the code through live server and not just by opening the static html through terminal 
var toggleButtonColourBlind = document.getElementById("toggle-colour-blind");

toggleButtonColourBlind.addEventListener("click", function() {
    document.body.classList.toggle("protanopia");
  });
  