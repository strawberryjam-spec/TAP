const message = `pasensya na po na-late. ang balak ko po talaga ay exactly 12am ko ise-send kaso po di na po kakayanin ng time ko. kaya po tinanong kita kahapon kung okay lang na next time ka na lang sumama kasi nga po gagawin ko to, pero ayorn. naisip ko po na ngayong araw ko na lang gawin, kahit di exactly 12am basta po umabot ngayong araw. eto rin po yung ginagawa ko simula kanina, baby, I'm sorry po kung napa-overthink kita.

eto lang kinaya ng time, and common din to sa tiktok. di kasi ako maalam sa coding e, pasensya na po. also, p'wede naman na sa canva gawin, kaso di ako sanay mag-edit hihi. eto parang template lang, kaso coding naman. if, ever na may time ako, try ko gumawa ng maayos hihi`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
