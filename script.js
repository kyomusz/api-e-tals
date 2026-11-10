function buscarApi(url) {
    fetch(url)
        .then(resposta => resposta.json())
        .then(data => {
            if (data.erro) {
                console.log("CEP não encontrado")
            } else {
                console.log(data)
            }
        })
}

buscarApi("https://jsonplaceholder.typicode.com/posts")