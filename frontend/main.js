
const pesquisar = async() =>{
    const value = document.getElementById('searchChar').value
    const url = 'http://localhost:3000/src'
    const dados = await fetch("/src",{
        method: 'POST',
        headers: {
        
            'content-type': 'application/json',
        },
        mode:"cors",
        body: JSON.stringify({mensagem: value})
    })
    let dadosJson = await dados.json()
    console.log(dadosJson.text);
    document.getElementById('searchResponse').innerText = dadosJson.text
}

document.getElementById('search')
    .onclick = pesquisar