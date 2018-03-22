/**
 * Created by x1c on 2018/3/22.
 */

function drag(obj){

    obj.onmousedown = function(e){
        var e = e || window.event;
        var disX = e.clientX - obj.offsetLeft;
        var disY = e.clientY - obj.offsetTop;

        document.onmousemove = function(e){

            
        }
        document.onmouseup = function () {

        }

    }
}