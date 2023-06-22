
/*==================== SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills_content");
skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills_content skills_close";
    }
    if (itemClass == "skills_content skills_close") {
        this.parentNode.className = "skills_content skills_open";
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills);
})



/*==================== QUALIFICATION ====================*/
const tabs = document.querySelectorAll("[data-target]")
tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active');
        })
        target.classList.add('qualification_active');

        tab.forEach(tab => {
            tab.classList.remove('qualification_active');
        })
        tab.classList.add('qualification_active');
    })
})