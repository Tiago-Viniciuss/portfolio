function openMenu() {
    let menu = document.getElementById('menu')
    menu.classList.toggle('active')
}

function openSite1() {
    let link = document.getElementById('backgroundPortfolio1')
    link.style.display = 'flex'
}

function closeSite1() {
    let link = document.getElementById('backgroundPortfolio1')
    link.style.display = 'none'
}

function openSite2() {
    let link = document.getElementById('backgroundPortfolio2')
    link.style.display = 'flex'
}

function closeSite2() {
    let link = document.getElementById('backgroundPortfolio2')
    link.style.display = 'none'
}

function openSite3() {
    let link = document.getElementById('backgroundPortfolio3')
    link.style.display = 'flex'
}

function closeSite3() {
    let link = document.getElementById('backgroundPortfolio3')
    link.style.display = 'none'
}

function openSite4() {
    let link = document.getElementById('backgroundPortfolio4')
    link.style.display = 'flex'
}

function closeSite4() {
    let link = document.getElementById('backgroundPortfolio4')
    link.style.display = 'none'
}

function changeThemeLight() {
    
    let themedarkbutton = document.getElementById('changeThemeDark')
    let themelightbutton = document.getElementById('changeThemeLight')
    let body = document.getElementById('body')
    let intro = document.getElementById('intro')
    let h1intro = document.getElementById('h1intro')
    let backIntro = document.getElementById('backgroundIntro')
    let aboutMe = document.getElementById('aboutMe')
    let h3resume = document.getElementById('h3resume')
    let pResume = document.getElementById('pResume')
    let skills = document.getElementById('skills')
    let h3skills = document.getElementById('h3skills')
    let pskills = document.getElementById('pskills')
    let portfolio = document.getElementById('portfolio')
    let h3portfolio = document.getElementById('h3portfolio')
    let containerPortfolio = document.getElementById('containerPortfolio')
    let musicStore = document.getElementById('musicStore')
    let club = document.getElementById('club')
    let bank = document.getElementById('bank')
    let restaurant = document.getElementById('restaurant')
    let myArticle = document.getElementById('myArticle')

    themelightbutton.style.display = 'none'
    themedarkbutton.style.display = 'block'
    body.style.background = 'white'
    aboutMe.style.background = 'white'
    h3resume.style.color = 'black'
    pResume.style.color = 'black'
    skills.style.background = 'white'
    h3skills.style.color = 'black'
    pskills.style.color = 'black'
    portfolio.style.background = 'white'
    h3portfolio.style.color = 'black'
    containerPortfolio.style.background = 'white'
    musicStore.style.border = '2px solid red'
    club.style.border = '2px solid red'
    bank.style.border = '2px solid red'
    restaurant.style.border = '2px solid red'
    myArticle.style.background = 'white'
    h3article.style.color = 'black'
}


function changeThemeDark() {
    
    let themedarkbutton = document.getElementById('changeThemeDark')
    let themelightbutton = document.getElementById('changeThemeLight')
    let body = document.getElementById('body')
    let intro = document.getElementById('intro')
    let h1intro = document.getElementById('h1intro')
    let backIntro = document.getElementById('backgroundIntro')
    let aboutMe = document.getElementById('aboutMe')
    let h3resume = document.getElementById('h3resume')
    let pResume = document.getElementById('pResume')
    let skills = document.getElementById('skills')
    let h3skills = document.getElementById('h3skills')
    let pskills = document.getElementById('pskills')
    let portfolio = document.getElementById('portfolio')
    let h3portfolio = document.getElementById('h3portfolio')
    let containerPortfolio = document.getElementById('containerPortfolio')
    let musicStore = document.getElementById('musicStore')
    let club = document.getElementById('club')
    let bank = document.getElementById('bank')
    let restaurant = document.getElementById('restaurant')
    let myArticle = document.getElementById('myArticle')

    themelightbutton.style.display = 'block'
    themedarkbutton.style.display = 'none'
    body.style.background = 'black'
    aboutMe.style.background = 'black'
    h3resume.style.color = 'white'
    pResume.style.color = 'white'
    skills.style.background = 'black'
    h3skills.style.color = 'white'
    pskills.style.color = 'white'
    portfolio.style.background = 'black'
    h3portfolio.style.color = 'white'
    containerPortfolio.style.background = 'black'
    musicStore.style.border = '2px solid white'
    club.style.border = '2px solid white'
    bank.style.border = '2px solid white'
    restaurant.style.border = '2px solid white'
    myArticle.style.background = 'black'
    h3article.style.color = 'white'
}