var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 24/100*100,
    slideMargin = 1/100*100,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    slides.style.width = ((24/100*100) + slideMargin) * slideCount - slideMargin + '%';

    function moveSlide(num){
        slides.style.left = -num * (25/100*100) +'%';
        currentIdx = num;
    }
    nextBtn.addEventListener('click',function(){
        if(currentIdx < (slideCount)-4){
            moveSlide(currentIdx + 1);
        }else{
            moveSlide(0);
        }
    })
    prevBtn.addEventListener('click',function(){
        if(currentIdx > 0){
            moveSlide(currentIdx - 1);
        }else{
            moveSlide((slideCount)-4);
        }
    });






    $(function(){
        $('nav .btn').on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('nav .menu').toggleClass('visible');
        });
        
    });