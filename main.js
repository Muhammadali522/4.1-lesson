const num = +prompt("raqam kriting")
let newText = document.createElement("h1")
newText.className = "text"
switch(num){
    case 1:
        newText.textContent = "Dushanba"
        document.body.append(newText)
    break;
    case 2:
        newText.textContent = "Seshanba"
        document.body.append(newText)
    break;
    case 3:
        newText.textContent = "Chorshanba"
        document.body.append(newText)
    break;
    case 4:
        newText.textContent = "Payshanba"
        document.body.append(newText)
    break;
    case 5:
        newText.textContent = "Juma"
        document.body.append(newText)
    break;
    case 6:
        newText.textContent = "Shanba"
        document.body.append(newText)
    break;
    case 7:
        newText.textContent = "Yakshanba"
        document.body.append(newText)
    break;
    default:
        newText.textContent = "Haftada 7 kun"
        document.body.append(newText)
};
