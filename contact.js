const redirect =document.getElementById('redirect-container')
    const dropbtns = document.querySelectorAll('.dropbtn')
    const addInfo = document.querySelector('.add-info')
    function submit()
    {
        redirect.style.display="block"
    }
    
    function cancel()
    {
        redirect.style.display="none"
    }

    dropbtns.forEach(dropbtn => 
    {
        const drop = dropbtn.querySelector('i')
        const answer = dropbtn.parentElement.nextElementSibling

        dropbtn.addEventListener('click',() =>
        {
            answer.classList.toggle('show')
            drop.classList.toggle('fa-chevron-down')
            drop.classList.toggle('fa-chevron-up')
        })

        //checks if any answer is currently shown
        const isExpanded = document.querySelector('.answer.show')

        if(isExpanded)
        {
            addInfo.classList.add('expand')
        }
        else
        {
            addInfo.classList.remove('expand')
        }

    });