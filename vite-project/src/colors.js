export default function setColors() {
    let colors = {
        green: 'rgb(61, 129, 104)',
        grey: 'rgb(108, 114, 137)',
        black: 'rgb(28, 35, 43)'
    }

    Object.keys(colors).forEach(color => {
        document.getElementById(color).addEventListener('click', () => {
            const newColor = colors[color];
            document.querySelector(".add-goods").style.background = newColor;
            document.querySelector(".final-price").style.color = newColor;
            document.querySelector(".new-price").style.color = newColor;
        })
        
    })
}
