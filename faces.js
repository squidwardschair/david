var parent = document.getElementById("faces");
var child = document.getElementById("defaultface")
var firststat = document.getElementById("firststat")
var textbox = document.getElementById("firstbox")
var height = parent.offsetHeight
var width = parent.offsetWidth

var maxNum = (Math.floor(parent.offsetHeight / child.offsetHeight) * Math.floor(parent.offsetWidth / child.offsetWidth))

child.remove()

const fentanylstatistics = ["2 milligrams of fentanyl, the amount that fits on the tip of a pencil, can be deadly.", "Fentanyl was responsible for nearly 70% of drug overdose deaths in 2022.", "6 out of 10 fentanyl-laced fake prescription pills contain a potentially lethal dose of fentanyl.", "In 2022, 73,654 people died from a fentanyl overdose in the US.", "One kilogram of fentanyl has the potential to kill 500,000 people.", "Fentanyl is up to 50 times stronger than heroin and up to 100 times stronger than morphine.", "In 2023, fentanyl is a leading cause of death for Americans aged 18 to 45.", "Overdose deaths from fentanyl laced stimulants have risen 50-fold since 2010.", "Fentanyl is the primary cause of drug overdose deaths among youth aged 14-18 years increasing 20% between 2020 and 2021.", "In 2021, 77% of teen drug overdose deaths were linked to fentanyl."]
console.log(maxNum)

const navbar =
  `
<div id="navbar" class="navbar">
<a href="javascript:void(0);" class="icon" onclick="responsiveNavbar()">
  <i class="fa fa-bars"></i>
  </a>
<a href="index.html">Home</a>
<a href="narcan.html">Learn to Save Lives</a>
<a href="faces.html">Faces of Fentanyl</a>
<a href="sources.html">Sources and Information</a>
<a href="https://www.overdoselifeline.org/donate/" target="_blank">Donate to
  Overdose Lifeline</a>
</div>
`

function show_faces() {
  textbox.remove()
  firststat.remove()
  parent.style.justifyContent="space-evenly"
  parent.style.flexDirection="row"

  for (let i = 0; i < maxNum; i++) {
    var facediv = document.createElement("div")
    facediv.setAttribute('class', 'face')
    facediv.id = i
    parent.appendChild(facediv)
    if (screen.width > 800) {
      facediv.style.width = '5.8vw'
      facediv.style.height = '8.66vw'
    } else if (screen.width > 700) {
      facediv.style.width = '7.54vw'
      facediv.style.height = '11.27vw'
    } else {
      facediv.style.width = '11.6vw'
      facediv.style.height = '17.33vw'
    }
  }

  childelements = parent.children

  listchilds = Array.from(childelements)

  nums = Array.from({ length: 69 }, (v, k) => k + 1)
  console.log(listchilds.length)
  console.log(nums)
  const length = listchilds.length
  for (let i = 0; i < length; i++) {
    var randdiv = listchilds[Math.floor(Math.random() * listchilds.length)];
    console.log(randdiv)
    var randimg = nums[Math.floor(Math.random() * nums.length)]
    randdiv.style.backgroundImage = `url(assets/faceimgs/${i}.jpg)`
    listchilds.splice(listchilds.indexOf(randdiv), 1)
    nums.splice(randimg, 1)
    randdiv.style.visibility = "visible"

  }
  function show_statistics() {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    parent.style.flexDirection = "column"
    for (let i = 0; i < 10; i++) {
      var statdiv = document.createElement("span")
      statdiv.innerHTML = fentanylstatistics[i]
      statdiv.setAttribute('class', 'stattext statanimation')
      statdiv.setAttribute('style', `--n:${i * 1.5}s`)
      parent.appendChild(statdiv)
    }
  }
  setTimeout(show_statistics, 8000)

  function final_message() {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    var finalmsg = document.createElement("span")
    var textdiv = document.createElement("div")
    textdiv.setAttribute('class', 'typingtextbox')
    finalmsg.innerHTML = "Don't be the next statistic."
    finalmsg.style.textAlign="center"
    finalmsg.setAttribute('class', 'typetext')
    finalmsg.setAttribute('style', "--n:28")
    textdiv.appendChild(finalmsg)
    parent.appendChild(textdiv)
    function add_furnishes() {
      parent.style.justifyContent="space-between"
      var reloadbutton=document.createElement("a")
      reloadbutton.setAttribute('class', 'psabutton otherbutton')
      reloadbutton.setAttribute('href', 'javascript:location.reload();')
      reloadbutton.innerHTML="Reload Exhibit"
      reloadbutton.style.marginBottom="2vh"
      parent.appendChild(reloadbutton)
      parent.insertAdjacentHTML('afterbegin', navbar);

    }
    setTimeout(add_furnishes, 5000)

  }

  setTimeout(final_message, 30000)

}

setTimeout(show_faces, 10000)




