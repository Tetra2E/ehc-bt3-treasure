let product =document.querySelectorAll('.product')
let details = document.getElementById('details-container')
const det_CTA = document.querySelector('.det-CTA')
const CTA = document.querySelector('.CTA')

function detail()
{
        details.style.display="block"
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