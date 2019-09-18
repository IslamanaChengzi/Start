
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

index = 0;
while( index < keys['length']){

    div1 = document.createElement('div')
    root.appendChild(div1);
    row = keys[index]
    index2 = 0;
    
    while( index2 < row['length'] ){
        kbd = document.createElement('kbd')
        kbd.textContent = row[index2]
        btn = document.createElement('button')
        btn.textContent = '编辑'
        btn.id = row[index2];
        btn.onclick = function(event){
            // console.log(btn.id);
            key = event.target.id
            x = prompt('给我一个网址');
            hash[key] = x;
            localStorage.setItem('zzz',JSON.stringify(hash));
        }
        kbd.appendChild(btn)
        div1.appendChild(kbd)
        index2++;
    }
   
    index++;

}

document.onkeypress = function(event){
    window.open( 'http://'+hash[event.key]);//新窗口打开
    // location.href = 'http://'+hash[event.key];//当前窗口打开
}