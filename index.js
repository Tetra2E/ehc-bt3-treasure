let products =document.querySelectorAll('.products')
let product = document.querySelector('.product')

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
