//selects all panels
const panels = document.querySelectorAll('.panel')

//loops through each panel
panels.forEach((panel)=> {
    //console.log(panel) goes through each panel
    panel.addEventListener('click', () => {
        //panel.ClassList gives lis of classes
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}