(function(){
    function Show(id){
        this.shows = $('.show');
        this.menu = $('.menu');
        
        var _this = this;
        this.menu.mouseleave(function (){
            // alert(1)
            _this.fold();
        })
        $('.banner').after('<div class="create"><div id="Data"></div></div>');    
        // if (isMobile()){
        //     $('.banner').after('<div class="create"><div id="Data"></div></div>');  
        // }
        //添加点击事件
        for (var i = 0; i < this.shows.length; i++){
            this.shows[i].index = i;
            this.shows[i].onmouseover = function(){
                if ($('.create')) {
                    $('.create').remove();
                } 
                $('.banner').after('<div class="create"><div id="Data"></div></div>');                         
                _this.unfold();
            } 
            this.shows[i].onclick = function () {//点击事件
                _this.change(this);// this当前点击的事件按钮 this变化了
                new randomData(this.getAttribute("id"));
            }
        }
    }
    //展开语录
    Show.prototype.unfold = function (){
        this.divs = $('.create').animate({
            'width':'100%',
            'left':'0'
        },250).animate({
            'padding':'40px 20px 40px 20px',
        },300);
    }
    //收拢语录
    Show.prototype.fold = function(){
        this.divs = $('.create').find('#Data').remove();
        this.divs = $('.create').animate({
            'padding': '0',
        }, 150).animate({
            'width': '0',
            'left': '50%'
        }, 150);
        //监听 上边的动画是否结束
        this.divs = $(".create")[0].addEventListener("transitionend", function(){
            $('.create').remove();
        })
    }
    Show.prototype.change = function (obj) {//展开
        for (var i = 0; i < this.shows.length; i++) {
            this.shows[i].className = "";
        }
        this.shows[obj.index].className = "active";
    };

    //判断是否是移动端
    // function isMobile(){
    //     if(isset ($_SERVER['HTTP_X_WAP_PROFILE'])){
    //         return true;
    //     }
    // }
    window.Show = Show;
})();