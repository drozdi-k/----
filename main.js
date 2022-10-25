const svgns = "http://www.w3.org/2000/svg";
window.onload = () => {
    var svg = document.getElementById('svg');
    var isDrawRect = false;
    var isDrawCircle = false;
    var mouseIsDown = false;
    svg.setAttribute('width', window.innerWidth);
    svg.setAttribute('height', window.innerHeight);

    //rectangle
    const butRect = document.getElementById('butRect');
    butRect.addEventListener('click', () => {
        isDrawRect = true;
        isDrawCircle = false;
    });
    svg.addEventListener("mousedown", (e) => {
        if (!isDrawRect) return;
        mouseIsDown=true;
        var rx =e.offsetX;
        var ry =e.offsetY;
        var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'x', rx);
        rect.setAttributeNS(null, 'y', ry);
        rect.setAttributeNS(null, 'width', 1);
        rect.setAttributeNS(null, 'height', 1);
        rect.setAttributeNS(null, 'style', 'fill: white; stroke: purple; stroke-width: 2px;');
        svg.appendChild(rect);
        svg.addEventListener("mousemove", (e) => {
            if(!isDrawRect) return;
            var status=rect.getAttributeNS(null,'class');
            if(mouseIsDown && status==null){
                var height = e.offsetY - ry;
                  if (height<0){
                     height = -height;
                     rect.setAttributeNS(null, 'y', e.offsetY);
                  }
                 var width = e.offsetX - rx;
                  if (width<0){
                     width = -width;
                     rect.setAttributeNS(null, 'x', e.offsetX);
                  }
                rect.setAttributeNS(null, 'width', width);
                rect.setAttributeNS(null, 'height', height);
            }
        });
        svg.addEventListener("mouseup", (e) => {
            rect.setAttributeNS(null, 'class', 'completed');
            mouseIsDown = false;
        });
    });
    
    // circle
    const butCircle = document.getElementById('butCircle');
    butCircle.addEventListener('click', () => {
        isDrawCircle = true;
        isDrawRect = false;
    });
    svg.addEventListener("mousedown", (e) => {
        if (!isDrawCircle) return;
        mouseIsDown = true;
        var cx = e.offsetX;
        var cy = e.offsetY;
        var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'cx', cx);
        circle.setAttributeNS(null, 'cy', cy);
        circle.setAttributeNS(null, 'r', 1);
        circle.setAttributeNS(null, 'style', 'fill: white; stroke: blue; stroke-width: 2px;');
        svg.appendChild(circle);
        svg.addEventListener("mousemove", (e) => {
            if (!isDrawCircle) return;
            var status = circle.getAttributeNS(null, 'class');
            if (mouseIsDown && status == null) 
            circle.setAttributeNS(null, 'r', Math.sqrt(Math.pow(e.offsetX - cx, 2) + Math.pow(e.offsetY - cy, 2)));
        });
        svg.addEventListener("mouseup", (e) => {
            mouseIsDown = false;
            circle.setAttributeNS(null, 'class', 'completed');
        });
    });

    //delete
    const butDelete = document.getElementById('delete');
    butDelete.addEventListener('click', () => {
        location.reload();
        // svg.remove();
        // svg = document.createElementNS(svgns, 'svg');
        // svg.setAttribute('width', window.innerWidth);
        // svg.setAttribute('height', window.innerHeight);
    });
}