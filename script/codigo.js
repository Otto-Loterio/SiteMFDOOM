var iframe = document.getElementsByClassName("iframe")[0]
var contato = document.getElementsByClassName("contato")[0]
var wikipedia = document.getElementsByClassName("wikipedia")[0]
var title = document.getElementsByClassName("title")[0]
var subtitle = document.getElementsByClassName("subtitle")[0]
var header = document.getElementsByClassName("header")[0]
var navegacao = document.getElementsByClassName("navegacao")[0]
var principal = document.getElementsByClassName("principal")[0]
var itemDaNav = document.getElementsByClassName("itemDaNav")[0]
var itemDaNav1 = document.getElementsByClassName("itemDaNav")[1]
var itemDaNav2 = document.getElementsByClassName("itemDaNav")[2]
var itemDaNav3 = document.getElementsByClassName("itemDaNav")[3]
var itemDaNav4 = document.getElementsByClassName("itemDaNav")[4]
var itemDaNav5 = document.getElementsByClassName("itemDaNav")[5]
var titleBiografia = document.getElementsByClassName("titleBiografia")[0]
var subTitleBiografia = document.getElementsByClassName("subTitleBiografia")[0]
var subTitleBiografia1 = document.getElementsByClassName("subTitleBiografia")[1]
var textBiografia = document.getElementsByClassName("textBiografia")[0]
var footer = document.getElementsByClassName("footer")[0]
var botaoEstilo1 = document.getElementsByClassName("logo1")[0]
var botaoEstilo2 = document.getElementsByClassName("logo2")[0]
var imagemBanner = document.getElementsByClassName("imagemBanner")[0]


botaoEstilo1.addEventListener('click', mudarEstiloMadvillainy)
botaoEstilo2.addEventListener('click', voltarEstilo)


function voltarEstilo() {
    document.body.classList.remove('madvillainy')

    iframe.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1nxlXq?utm_source=generator&theme=1";

    wikipedia.style = '';
    contato.style = '';
    titleBiografia.style = '';
    subTitleBiografia.style = '';
    subTitleBiografia1.style = '';
    textBiografia.style = '';

    itemDaNav.style = '';
    itemDaNav1.style = '';
    itemDaNav2.style = '';
    itemDaNav3.style = '';
    itemDaNav4.style = '';
    itemDaNav5.style = '';

    footer.style = '';
    principal.style = '';
    navegacao.style = '';
    header.style = '';
    title.style = '';
    subtitle.style = '';
    imagemBanner.style.backgroundImage = '';
}

function mudarEstiloMadvillainy() {
    document.body.classList.add('madvillainy')

    iframe.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1nxlXq?utm_source=generator&theme=0";

    wikipedia.style.color = '#1f1f1fff';
    wikipedia.style.WebkitTextStroke = '1px #000000ff';

    contato.style.color = '#6d6d6dff';
    contato.style.WebkitTextStroke = '1px #2b2b2bff';

    titleBiografia.style.color = '#1f1f1fff';
    titleBiografia.style.WebkitTextStroke = '1px #000000ff';

    subTitleBiografia.style.color = '#adadadff';
    subTitleBiografia.style.WebkitTextStroke = '1px #7c7c7cff';

    subTitleBiografia1.style.color = '#adadadff';
    subTitleBiografia1.style.WebkitTextStroke = '1px #7c7c7cff';

    itemDaNav.style.color = '#1f1f1fff';
    itemDaNav.style.WebkitTextStroke = '1px #000000ff';

    itemDaNav1.style.color = '#1f1f1fff';
    itemDaNav1.style.WebkitTextStroke = '1px #000000ff';

    itemDaNav2.style.color = '#1f1f1fff';
    itemDaNav2.style.WebkitTextStroke = '1px #000000ff';

    itemDaNav3.style.color = '#1f1f1fff';
    itemDaNav3.style.WebkitTextStroke = '1px #000000ff';

    itemDaNav4.style.color = '#1f1f1fff';
    itemDaNav4.style.WebkitTextStroke = '1px #000000ff';

    itemDaNav5.style.color = '#1f1f1fff';
    itemDaNav5.style.WebkitTextStroke = '1px #000000ff';

    footer.style.background = '#c7c7c7ff';
    principal.style.background = '#e4e4e4ff';
    navegacao.style.background = '#C2C2C4';
    header.style.background = '#d1cfcfff';

    title.style.color = '#ee7539';
    title.style.WebkitTextStroke = '1px #d44f0cff';

    subtitle.style.color = '#e76625ff';
    subtitle.style.WebkitTextStroke = '1px #d44f0cff';

    imagemBanner.style.backgroundImage = 'url("../img/bannerDOOMmadvillainy2.png")';
}
