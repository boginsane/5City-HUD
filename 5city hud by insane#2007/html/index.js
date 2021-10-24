var isHide = true
var inMap = false
var hideArmor = true

window.addEventListener('message', (event) => {
    let item = event.data;
  
    if (event.data.type == 'TOGGLE_HUD') {
        if (event.data.bool) {
            $('hud').fadeOut()
            isHide = false
            inMap = true
        } else {
            if (isHide) {
                $('hud').fadeOut()
                isHide = false
            } else {
                $('hud').fadeIn()
                isHide = true
            }
        }
        return
    }

    if (event.data.type == "UPDATE_VOICE") {
        if (event.data.isTalking) {
            var gadanie = document.getElementById("voice-glow");
            if (event.data.mode == 'Car') {
                gadanie.style.filter = "drop-shadow(0px 0px 5px #ffffff)";
            } 
            if (event.data.mode == 'Whisper') {
                gadanie.style.filter = "drop-shadow(0px 0px 5px #ffffff)";
            } 
            if (event.data.mode == 'Normal') {
                gadanie.style.filter = "drop-shadow(0px 0px 5px #ffffff)";
            }
            if (event.data.mode == 'Shouting') {
                gadanie.style.filter = "drop-shadow(0px 0px 5px #ffffff)";
            }
        } else {
            var gadanie = document.getElementById("voice-glow");
            gadanie.style.filter = "drop-shadow(0px 0px 0px #ffffff7a)";
            if (event.data.mode == 'Car') {
                document.getElementById("voice").innerHTML = '<stop offset="'+15+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+15+'%" stop-color="#ffffff"/>';
            } else if (event.data.mode == 'Whisper') {
                document.getElementById("voice").innerHTML = '<stop offset="'+25+'%" stop-color="rgba(125, 1, 174)"/> <stop offset="'+35+'%" stop-color="#ffffff"/>';
            } else if (event.data.mode == 'Normal') {
                document.getElementById("voice").innerHTML = '<stop offset="'+50+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+50+'%" stop-color="#ffffff"/>';
            } else if (event.data.mode == 'Shouting') {
                document.getElementById("voice").innerHTML = '<stop offset="'+100+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+100+'%" stop-color="#ffffff"/>';
            }
        }
        return
    }
    if (event.data.type == 'UPDATE_STATUS') {
        if (!isHide && inMap) {
            $('hud').fadeIn()
            isHide = true
            inMap = false
        }
        if (event.data.hunger) {
            if ((event.data.hunger) > 60) {
                document.getElementById("glod").innerHTML = '<stop offset="'+Math.floor(event.data.hunger)+'%" stop-color="rgba(125, 1, 174)"/> <stop offset="'+Math.floor(event.data.hunger)+'%" stop-color="#ffffff"/>';
            } else if ((event.data.hunger) > 40 && (event.data.hunger <= 60)) {
                document.getElementById("glod").innerHTML = '<stop offset="'+Math.floor(event.data.hunger)+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+Math.floor(event.data.hunger)+'%" stop-color="#ffffff"/>';
            } else if ((event.data.hunger) >= 0 && (event.data.hunger) <= 40) {
                document.getElementById("glod").innerHTML = '<stop offset="'+Math.floor(event.data.hunger)+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+Math.floor(event.data.hunger)+'%" stop-color="#ffffff"/>';
            }
        }
        if (event.data.thirst) {
            if ((event.data.thirst) > 60) {
                document.getElementById("pragnienie").innerHTML = '<stop offset="'+Math.floor(event.data.thirst)+'%" stop-color="rgba(125, 1, 174)"/> <stop offset="'+Math.floor(event.data.thirst)+'%" stop-color="#ffffff"/>';
            } else if ((event.data.thirst) > 40 && (event.data.thirst) <= 60) {
                document.getElementById("pragnienie").innerHTML = '<stop offset="'+Math.floor(event.data.thirst)+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+Math.floor(event.data.thirst)+'%" stop-color="#ffffff"/>';
            } else if ((event.data.thirst) >= 0 && (event.data.thirst) <= 40) {
                document.getElementById("pragnienie").innerHTML = '<stop offset="'+Math.floor(event.data.thirst)+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+Math.floor(event.data.thirst)+'%" stop-color="#ffffff"/>';
            }
        }
        if (event.data.stress) {
            if ((event.data.stress) > 60) {
                document.getElementById("stres").innerHTML = '<stop offset="'+Math.floor(event.data.stress)+'%" stop-color="rgba(125, 1, 174)"/> <stop offset="'+Math.floor(event.data.stress)+'%" stop-color="#ffffff"/>';
            } else if ((event.data.stress) > 40 && (event.data.stress) <= 60) {
                document.getElementById("stres").innerHTML = '<stop offset="'+Math.floor(event.data.stress)+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+Math.floor(event.data.stress)+'%" stop-color="#ffffff"/>';
            } else if ((event.data.stress) >= 0 && (event.data.stress) <= 40) {
                document.getElementById("stres").innerHTML = '<stop offset="'+Math.floor(event.data.stress)+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+Math.floor(event.data.stress)+'%" stop-color="#ffffff"/>';
            }
        }
        if ((event.data.nurkowanie) > 60) {
            $('#nurkowanie').show();
            document.getElementById("nurkowanie").innerHTML = '<stop offset="'+Math.floor(event.data.nurkowanie)+'%" stop-color="rgba(147, 255, 128, 255)"/> <stop offset="'+Math.floor(event.data.nurkowanie)+'%" stop-color="#ffffff"/>';
        } 
        if ((event.data.nurkowanie) <= 60 && (event.data.nurkowanie) >= 20) {
            $('#nurkowanie').show();
            document.getElementById("nurkowanie").innerHTML = '<stop offset="'+Math.floor(event.data.nurkowanie)+'%" stop-color="rgb(255, 181, 77)"/> <stop offset="'+Math.floor(event.data.nurkowanie)+'%" stop-color="#ffffff"/>';
        }
        if ((event.data.nurkowanie) <= 20 && (event.data.nurkowanie) >= 2) {
            $('#nurkowanie').show();
            document.getElementById("nurkowanie").innerHTML = '<stop offset="'+Math.floor(event.data.nurkowanie)+'%" stop-color="rgb(255, 77, 77)"/> <stop offset="'+Math.floor(event.data.nurkowanie)+'%" stop-color="#ffffff"/>';
        }
        if ((event.data.nurkowanie) >= 100) {
            $('#nurkowanie2').hide();
        }
        if ((event.data.nurkowanie) < 100) {
            $('#nurkowanie2').show();
        }
        if (event.data.zycie) {
            var healthPercent = event.data.zycie-100;
            if ((healthPercent) > 80) {
                document.getElementById("zycie").innerHTML = '<stop offset="'+healthPercent+'%" stop-color="rgba(125, 1, 174)"/> <stop offset="'+healthPercent+'%" stop-color="#ffffff"/>';
            } else if ((healthPercent) >= 40 && (healthPercent) < 80) {
                document.getElementById("zycie").innerHTML = '<stop offset="'+healthPercent+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+healthPercent+'%" stop-color="#ffffff"/>';
            } else if ((healthPercent) > 0 && (healthPercent) < 40) {
                document.getElementById("zycie").innerHTML = '<stop offset="'+healthPercent+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+healthPercent+'%" stop-color="#ffffff"/>';
            }
        }
        if (event.data.isdead) {
            document.getElementById("zycie").innerHTML = '<stop offset="'+0+'%" stop-color="rgb(125, 1, 174)"/> <stop offset="'+0+'%" stop-color="#ffffff"/>';
        }
        return
    }
})