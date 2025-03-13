//menu na górze
let jsBtn = document.querySelector(".js");
let jsMenu = document.querySelector(".js-menu");
//przyciski kontaktu
let contactBtn1 = document.querySelector(".contactbutton1");
let contactBtn2 = document.querySelector(".contactbutton2");
let contactBtn3 = document.querySelector(".contactbutton3");

let contactBtnAddon1 = document.querySelector(".buttonAddon1");
let contactBtnAddon2 = document.querySelector(".buttonAddon2");
let contactBtnAddon3 = document.querySelector(".buttonAddon3");
//darkmode
let darkBtn = document.querySelector(".darkmode");
let darkContent = document.querySelector(".darkball");
let headerDark = document.querySelector("#skills");
let skillDark = document.querySelectorAll(".skill");
let skillTitle = document.querySelector(".skilltitle");
//angielskaWersja
//menu
let languageBtn = document.querySelector("#languageBtn");
let menuAbout = document.querySelector("#menuAbout");
let menuSkills = document.querySelector("#menuSkills");
let menuContact = document.querySelector("#menuContact");
let menuProjects = document.querySelector("#menuProjects");
let projectOne = document.querySelector("#project1");
//skille
let notUnlocked = document.querySelectorAll("#notUnlocked");
//o mnie
let aboutDescription = document.querySelector("#aboutDescription");
//kontakt
let contactTitle = document.querySelector("#contactTitle");
let contactName = document.querySelector("#contactName");
let contactMail = document.querySelector("#contactMail");
let contactContent = document.querySelector("#contactContent");
let sendBtn = document.querySelector("#btn1")

//zmianajezyka funkcja
let websiteLanguage = false;
languageBtn.addEventListener("click", languageChange);

function languageChange() {
  if (websiteLanguage === false) {
    languageBtn.textContent = "EN";
    menuAbout.textContent = "About me";
    menuSkills.textContent = "Skills";
    menuContact.textContent = "Contact";
    menuProjects.textContent = "Projects";
    projectOne.textContent = "Project 1";
    skillTitle.textContent = "MY SKILLS";
    aboutDescription.textContent = "👋 Hey! I'm Grzegorz – a frontend enthusiast and future coding king.I love figuring out how things work and finding creative solutions. My journey started with HTML & CSS, but now I’m diving deeper into JavaScript and interactive effects. When something catches my attention, I won’t stop until I crack it.I don’t do things halfway – it’s all or nothing! 💥I code, I play Teamfight Tactics, and in my free time, I look for ways to make big money. 😎✨ Goal? Get so good that my projects speak for themselves.";
    contactTitle.textContent = "Contact Form";
    contactName.textContent = "Name";
    contactContent.textContent = "Content";
    contactBtn2.innerHTML = '<i class="fas fa-phone-alt"></i> PHONE';
    sendBtn.value = "SEND"
    notUnlocked.forEach((notUnlocked) => {
     notUnlocked.textContent = "not unlocked yet";
    });
    
    websiteLanguage = true;
  } else {
    languageBtn.textContent = "PL";
    menuAbout.textContent = "O mnie";
    menuSkills.textContent = "Umiejętności";
    menuContact.textContent = "Kontakt";
    menuProjects.textContent = "Projekty";
    projectOne.textContent = "Projekt 1";
    skillTitle.textContent = "MOJE UMIEJĘTNOŚCI";
    aboutDescription.textContent = "Cześć! Jestem Grzegorz, pasjonat frontendu i przyszły król kodowania.Uwielbiam rozkminiać, jak działa kod i znajdować kreatywne rozwiązania. Moja przygoda z programowaniem zaczęła się od czystego HTML i CSS, ale teraz coraz bardziej wkręcam się w JavaScript i interaktywne efekty. Jak coś mnie zaciekawi, to muszę to rozgryźć do końca.Nie lubię półśrodków – jak coś robię, to na pełnej! 💥Koduję, gram w Teamfight Tactics, a w wolnym czasie szukam sposobów, jak zdobyć gruby hajs. 😎✨ Cel? Być tak dobrym, żeby moje projekty mówiły same za siebie.";
    contactTitle.textContent = "Formularz kontaktowy";
    contactName.textContent = "Imię";
    contactContent.textContent = "Treść";
    contactBtn2.innerHTML = '<i class="fas fa-phone-alt"></i> TELEFON';
    sendBtn.value = "WYŚLIJ"
    notUnlocked.forEach((notUnlocked) => {
      notUnlocked.textContent = "jeszcze nie odblokowano";
    });
    
    websiteLanguage = false;
  }
}

//darkmode funckcja
darkBtn.addEventListener("click", darkMode);

function darkMode() {
  darkContent.classList.toggle("lightmode");
  darkBtn.classList.toggle("lightmodestrip");
  headerDark.classList.toggle("headerDark");
  skillTitle.classList.toggle("skilltitleDark");

  skillDark.forEach((skill) => {
    skill.classList.toggle("skillDark");
  });
}
//menu rozwijane funkcja
jsBtn.addEventListener("click", openMenu);

function openMenu() {
  jsMenu.classList.toggle("visible");
}
//przyciski kontaktu funkcja
contactBtn1.addEventListener("click", addContact);

function addContact() {
  if (contactBtnAddon1.classList.contains("displayNone")) {
    contactBtnAddon1.classList.toggle("displayNone");
    setTimeout(function () {
      contactBtnAddon1.classList.toggle("AddonVisible");
    }, 50);
  } else {
    contactBtnAddon1.classList.toggle("AddonVisible");
    setTimeout(function () {
      contactBtnAddon1.classList.toggle("displayNone");
    }, 200);
  }
}

contactBtn2.addEventListener("click", addContact2);
function addContact2() {
  if (contactBtnAddon2.classList.contains("displayNone")) {
    contactBtnAddon2.classList.toggle("displayNone");
    setTimeout(function () {
      contactBtnAddon2.classList.toggle("AddonVisible");
    }, 50);
  } else {
    contactBtnAddon2.classList.toggle("AddonVisible");
    setTimeout(function () {
      contactBtnAddon2.classList.toggle("displayNone");
    }, 200);
  }
}

contactBtn3.addEventListener("click", addContact3);

function addContact3() {
  if (contactBtnAddon3.classList.contains("displayNone")) {
    contactBtnAddon3.classList.toggle("displayNone");
    setTimeout(function () {
      contactBtnAddon3.classList.toggle("AddonVisible");
    }, 50);
  } else {
    contactBtnAddon3.classList.toggle("AddonVisible");
    setTimeout(function () {
      contactBtnAddon3.classList.toggle("displayNone");
    }, 200);
  }
}
