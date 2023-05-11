let product =document.querySelectorAll('.product')
let details = document.getElementById('details-container')
const det_CTA = document.querySelector('.det-CTA')
const CTA = document.querySelector('.CTA')
let expand = document.querySelector('.expand')

function detail(num)
{
    details.style.display="block"

    if (num == 1) 
    {
        expand.children[0].src = "./green_limeade.jpeg"
        expand.children[0].alt = "Green Limeade".
        expand.children[1].innerHTML = "<center>Green Limeade</center>"
        expand.children[3].innerHTML ="<strike>N</strike>5,000"
        expand.nextElementSibling.children[0].innerText = "Indulge in the refreshing taste of Green Limeade made from a blend of freshly squeezed lime,mint leaves, and ginger root for a zesty kick. Infused with the goondness of baoba fruit powder, it is rich in antioxidants and vitamin C,with just the right amount of honey, making it the perfect drink to quench your thirst"
    }
    else if (num ==2) {
        expand.children[0].src = "./blue_lagoon.jpeg"
        expand.children[0].alt = "Blue Lagoon"
        expand.children[1].innerHTML = "<center>Blue Lagoon</center>"
        expand.children[3].innerHTML ="<strike>N</strike>3,000"
        expand.nextElementSibling.children[0].innerText = "Indulge in the refreshing taste of Green Limeade made from a blend of freshly squeezed lime,mint leaves, and ginger root for a zesty kick. Infused with the goondness of baoba fruit powder, it is rich in antioxidants and vitamin C,with just the right amount of honey, making it the perfect drink to quench your thirst"
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