function initiTab(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    tabContent[0].classList.add('ativo');

    if(tabMenu.length && tabContent.length ){
        // Remove a classe ativo das section
        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            })
        
            tabContent[index].classList.add('ativo');
        }
        // Ativa a função na seciton que clicar
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}

initiTab();