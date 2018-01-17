 window.onload=function(){
    setSlide();
    var elems=document.getElementsByClassName("action-delete");
    for(var i=0;i<elems.length;i++){
        elems[i].addEventListener("click", function(){     
            var r=confirm("确定要删除该记录吗?")
            if (r){
              alert("呵呵呵");
            }else{
              alert("哈哈哈");
            }
        });
    }
 };
 
 function setSlide() {
    //侧滑显示删除按钮
    var expansion = null; //是否存在展开的list
    var container = document.querySelectorAll(".swipe-container");
    for (var i = 0; i < container.length; i++) {
        var x, y, X, Y, swipeX, swipeY;
        container[i].addEventListener('touchstart', function (event) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
            swipeX = true;
            swipeY = true;
            if (expansion) { //判断是否展开
                //如果展开则收起 以下代码取消注释后则滑动开始立即收起 注释后则向右滑动一定距离后收起隐藏按钮
                //方法一.
                //removeClass(this,"swipeleft");
                //方法二 需引入jquery
                //$(this).removeClass("swipeleft");
            }
        });
        container[i].addEventListener('touchmove', function (event) {
            X = event.changedTouches[0].pageX;
            Y = event.changedTouches[0].pageY;
            // 左右滑动
            if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
                // 阻止事件冒泡
                event.stopPropagation();
                if (X - x > 10) { //右滑收起
                    event.preventDefault();
                    removeClass(this,"swipeleft");
                    //$(this).removeClass("swipeleft");
                }
                if (x - X > 10) { //左滑展开
                    event.preventDefault();
                    //$(this).addClass("swipeleft");
                    addClass(this,"swipeleft");
                    expansion = this;
                }
                swipeY = false;
            }
            // 上下滑动
            if (swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
                swipeX = false;
            }
        });
    }
}

function hasClass(elem, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false;
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
  }
   
  function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
      ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
    }
  }
   
  function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
      var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
      while (newClass.indexOf(' ' + cls + ' ') >= 0) {
        newClass = newClass.replace(' ' + cls + ' ', ' ');
      }
      ele.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }