

function Search(){
    
    var help = document.querySelector('.help').classList;
    var bottom = document.querySelector('.bottom').classList;
    var log = document.querySelector('.log').classList;
    var line = document.querySelector('.line').classList;
    var navbar = document.querySelector('.navbar').classList;
    
    if(help.contains('d-none')){
        help.remove('d-none');
        bottom.add('d-none');
        log.add('d-none');
        line.add('d-none');
        navbar.add('d-none');

    }
    else{
        help.add('d-none');
        bottom.remove('d-none');
        log.remove('d-none');
        line.remove('d-none');
        navbar.remove('d-none');
    }

}

function Down(){

    var icon = document.querySelector('.low').classList;
    var language = document.querySelector('.language')
    var lan = document.querySelector('.lan').classList;
    
    
    if (lan.contains('d-none')) {
        lan.remove('d-none');
        language.style.opacity = '1' 
        icon.add('d-none');
    }
    else{
        lan.add('d-none');
        language.style.opacity = '0'
        icon.remove('d-none');
    }

}


function UP(){
    var lan = document.querySelector('.lan').classList;
    var icon = document.querySelector('.low').classList;
    var language = document.querySelector('.language')

    if (icon.contains('d-none')) {
        icon.remove('d-none');
        language.style.opacity = '0' 
        lan.add('d-none');
    }
    else{
        icon.add('d-none');
        language.style.opacity = '1'
        lan.remove('d-none');
    }
}
