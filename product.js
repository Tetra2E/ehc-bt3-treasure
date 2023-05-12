let product =document.querySelectorAll('.product')
let details = document.getElementById('details-container')
const det_CTA = document.querySelector('.det-CTA')
const CTA = document.querySelector('.CTA')
const expand = document.querySelector('.expand')
const image = expand.children[0]
const drinkname = expand.children[1]
const price = expand.children[3]
const writeup = expand.nextElementSibling.children[0]

function detail(num)
{
    details.style.display="block"

    if (num == 1) 
    {
        image.src = "./green_limeade.jpeg"
        image.alt = "Green Limeade"
        drinkname.innerHTML ="<center>Green Limeade</center>"
        price.innerHTML ="<strike>N</strike>5,000"
        writeup.innerText = "Indulge in the refreshing taste of Green Limeade made from a blend of freshly squeezed lime,mint leaves, and ginger root for a zesty kick. Infused with the goondness of baoba fruit powder, it is rich in antioxidants and vitamin C,with just the right amount of honey, making it the perfect drink to quench your thirst"
    }
    else if (num ==2) {
        image.src = "./blue_lagoon.jpeg"
        image.alt = "Blue Lagoon"
        drinkname.innerHTML = "<center>Blue Lagoon</center>"
        price.innerHTML ="<strike>N</strike>3,000"
        writeup.innerText = "Indulge in the refreshing taste of Green Limeade made from a blend of freshly squeezed lime,mint leaves, and ginger root for a zesty kick. Infused with the goondness of baoba fruit powder, it is rich in antioxidants and vitamin C,with just the right amount of honey, making it the perfect drink to quench your thirst"
    }
    else if (num == 3)
    {
        image.src = ""
        image.alt = ""
        drinkname.innerHTML = ""
        price.innerHTML =""
        writeup.innerText = ""
    }
    else if (num == 4)
    {
        image.src = ""
        image.alt = ""
        drinkname.innerHTML = ""
        price.innerHTML =""
        writeup.innerText = ""
    }
    else if (num == 5)
    {
        image.src = ""
        image.alt = ""
        drinkname.innerHTML = ""
        price.innerHTML =""
        writeup.innerText = ""
    }
    else if (num == 6)
    {
        image.src = ""
        image.alt = ""
        drinkname.innerHTML = ""
        price.innerHTML =""
        writeup.innerText = ""
    }
    else if (num == 7)
    {
        image.src = ""
        image.alt = ""
        drinkname.innerHTML = ""
        price.innerHTML =""
        writeup.innerText = ""
    }
    else if (num == 8)
    {
        image.src = ""
        image.alt = ""
        drinkname.innerHTML = ""
        price.innerHTML =""
        writeup.innerText = ""
    }
    else if (num == 9)
    {
        image.src = ""
        image.alt = ""
        drinkname.innerHTML = ""
        price.innerHTML =""
        writeup.innerText = ""
    }
    else if (num == 10)
    {
        image.src = ""
        image.alt = ""
        drinkname.innerHTML = ""
        price.innerHTML =""
        writeup.innerText = ""
    }
    else if (num == 11)
    {
        image.src = ""
        image.alt = ""
        drinkname.innerHTML = ""
        price.innerHTML =""
        writeup.innerText = ""
    }
    else if (num == 12)
    {
        image.src = ""
        image.alt = ""
        drinkname.innerHTML = ""
        price.innerHTML =""
        writeup.innerText = ""
    }

}
function det_cancel()
{
    details.style.display ="none"
}

function det_call()
{
    det_CTA.style.display = "flex"
}

function det_call_cancel()
{
    det_CTA.style.display ="none"
}

function call()
{
    CTA.style.display = "flex"
}

function cancel()
{
    CTA.style.display = "none"
}

function submit() 
{
    alert("You've successfully placed an order,check your email to see your order details")
}