/**
 * Created by x1c on 2018/3/22.
 */

function drag(id){
    var obj = document.getElementById(id);
    var disX = 0;
    var disY = 0;

    obj.onmousedown = function(e){
        var e = e || window.event;
        var disX = e.clientX - obj.offsetLeft;
        var disY = e.clientY - obj.offsetTop;

        document.onmousemove = function(e){

            obj.style.left = e.pageX - disX + "px";
            obj.style.top = e.pageY - disY + "px";

        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
    return false;
}