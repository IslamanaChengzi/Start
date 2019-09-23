// 初始化数据
var keys = {
    0:['q','w','e','r','t','y','u','i','o','p'],
    1:['a','s','d','f','g','h','j','k','l'],
    2:['z','x','c','v','b','n','m'],
    length:3
};

var hash = {
    q:'qq.com',
    w:'weibo.com',
    e:'ele.com',
    r:'renren.com',
    t:'tianya.com',
    y:'youtube.com',
    u:'uc.com',
    i:'iqiyi.com',
    o:'opera.com',
    p:undefined,
    a:'acfun.tv',
    s:'sohu.com',
    z:'zhihu.com',
    m:'www.mcdonalds.com.cn'
};

hash = JSON.parse( localStorage.getItem('zzz') || 'null' ) || hash ;

// 生成键盘
var index = 0;

while( index < keys['length']){

    var div1 = tag('div',{className:'row'});
   
    root.appendChild(div1);
    var row = keys[index]
    var index2 = 0;
    
    while( index2 < row['length'] ){
        var kbd = tag('kbd',{className:'key'})
        var span = tag('span',{className:'text'})
        span.textContent = row[index2]
        var btn = tag('button')
        btn.textContent = '编辑'
        btn.id = row[index2];
        var imgXXXX = tag('img')
        if( hash[row[index2]] ){
            imgXXXX.src = 'http://'+hash[row[index2]]+'/favicon.ico'
        } else {
            imgXXXX.src = './btn.jpg'
        }
        imgXXXX.onerror = function(event){
            console.log('下载失败！');
            event.target.src = './btn.jpg'
        }
        btn.onclick = function(event){
            button2 = event['target']
            img2 = button2.previousSibling
            key = event.target.id
            x = prompt('给我一个网址');
            hash[key] = x;
            img2.src = 'http://'+x+'/favicon.ico'
            img2.onerror = function(event){
                console.log('下载失败！');
                event.target.src = './btn.jpg'
            }
            localStorage.setItem('zzz',JSON.stringify(hash));
        }
        kbd.appendChild(span)
        kbd.appendChild(imgXXXX)
        kbd.appendChild(btn)
        div1.appendChild(kbd)
        index2++;
    }
   
    index++;

}

// 监听键盘
document.onkeypress = function(event){
    window.open( 'http://'+hash[event.key],'_blank');//新窗口打开
    // location.href = 'http://'+hash[event.key];//当前窗口打开
}

function tag(tagName,obj){

    // var ggg =  document.createElement(tagName);
    // ggg.className = obj?obj.className:'';
    // return ggg;

    var element = document.createElement(tagName);
    for ( var key in obj ){
        element[key] = obj[key]
    }
    return element;

}