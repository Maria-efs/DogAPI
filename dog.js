//Retornar as imagens de uma raça que o usuário pede 
const pesquisarDog = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca}/images`

    //Variavel que recebe a resposta da requisição 
    const response = await fetch (url) 

    //Extraindo os dados da API
    const listDog = await response.json()
    
    //.message para chamar uma propriedade
    return listDog.message
}

export{pesquisarDog}