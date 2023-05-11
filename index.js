let products =document.querySelectorAll('.products')
let product = document.querySelector('.product')
const CTA = document.querySelector('.CTA')

products.forEach(pro =>
    {
        pro.addEventListener('mouseenter', () => 
        {
            pro.classList.add('active')
            product.classList.add('expand')
        })

        pro.addEventListener('mouseleave', () => 
            {
                pro.classList.remove('active')
                product.classList.remove('expand')
            })
    })
function call()
{
        CTA.style.display = "flex"
}
    
function cancel()
{
    CTA.style.display = "none"
}

function submit() {
    alert("You've successfully placed an order,check your email to see your order details")
}