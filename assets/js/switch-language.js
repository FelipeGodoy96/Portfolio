const ptbr = document.getElementById('ptbr')
const enus = document.getElementById('enus')

ptbr.addEventListener('click', event => {
  switchLanguage(event.target.id)
})

enus.addEventListener('click', event => {
  switchLanguage(event.target.id)
})

function switchLanguage(id) {
  const selected = document.getElementById(id).parentNode
  selected.classList.add('language-selected')
  const navbar = document.getElementById('navbar')
  const navItens = {
    home: navbar.children[0].children[0].children[0].children[1],
    about: navbar.children[0].children[1].children[0].children[1],
    resume: navbar.children[0].children[2].children[0].children[1],
    portfolio: navbar.children[0].children[3].children[0].children[1]
  }
  const portfolio = document.getElementById('portfolio')
  const portfolioItens = {
    h2: portfolio.children[0].children[0].children[0],
    p: portfolio.children[0].children[0].children[1]
  }
  const aboutMeTitle = document.getElementById('about-me-title')
  const aboutMePt = Array.from(document.getElementsByClassName('switchPt'))
  const aboutMeEn = Array.from(document.getElementsByClassName('switchEn'))
  const aboutMeInfo = Array.from(document.getElementsByClassName('aboutMeInfo'))
  const habilitiesTitle = document.getElementById('habilities-title')
  const resumeTitle = document.getElementById('resume-title')
  const experiencesTitle = document.getElementById('experiences-title')
  const educationTitle = document.getElementById('education-title')
  if (id == 'ptbr') {
    enus.parentNode.classList.remove('language-selected')
    navItens.home.innerText = 'Início'
    navItens.about.innerText = 'Sobre'
    navItens.resume.innerText = 'Resumo'
    navItens.portfolio.innerText = 'Portfólio'
    portfolioItens.h2.textContent = 'PORTFÓLIO'
    portfolioItens.p.textContent =
      'Na seção abaixo você pode ver alguns de meus projetos que desenvolvi com todo meu ❤️'
    aboutMeTitle.innerText = 'Sobre mim'
    aboutMeEn.forEach(element => {
      element.style.display = 'none'
    })
    aboutMePt.forEach(element => {
      element.style.display = 'block'
    })
    aboutMeInfo[0].innerText = 'Nascimento: '
    aboutMeInfo[2].innerText = 'Telefone: '
    aboutMeInfo[3].innerText = 'Cidade: '
    habilitiesTitle.innerText = 'Habilidades'
    resumeTitle.innerText = 'Resumo profissional'
    experiencesTitle.innerText = 'Experiências'
    educationTitle.innerText = 'Formação'
  }
  if (id == 'enus') {
    ptbr.parentNode.classList.remove('language-selected')
    navItens.home.innerText = 'Home'
    navItens.about.innerText = 'About'
    navItens.resume.innerText = 'Resume'
    navItens.portfolio.innerText = 'Portfolio'
    portfolioItens.h2.textContent = 'PORTFOLIO'
    portfolioItens.p.textContent =
      'In the section below you can see some of my projects that I developed with all my ❤️'
    aboutMeTitle.innerText = 'About me'
    aboutMePt.forEach(element => {
      element.style.display = 'none'
    })
    aboutMeEn.forEach(element => {
      element.style.display = 'block'
    })
    aboutMeInfo[0].innerText = 'Birthday: '
    aboutMeInfo[2].innerText = 'Telephone: '
    aboutMeInfo[3].innerText = 'City: '
    habilitiesTitle.innerText = 'Skills'
    resumeTitle.innerText = 'Professional summary'
    experiencesTitle.innerText = 'Work Experiences'
    educationTitle.innerText = 'Education'
  }
}
