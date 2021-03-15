    produtos = [
    { 
        img: "img/hotdog.png",
        codigo: 0,
        nome: "Hot Dog",
        preco: 4,
        quantidade: 0
    },
    { 
        img: "img/xsalada.png",
        codigo: 1,
        nome: "X-Salada",
        preco: 4.5,
        quantidade: 0      
    },
    { 
        img: "img/xbacon.png",
        codigo: 2,
        nome: "X-Bacon",
        preco: 5,
        quantidade: 0      
    },
    { 
        img: "img/torrada.png",
        codigo: 3,
        nome: "Torrada",
        preco: 2,
        quantidade: 0
    },
    { 
        img: "img/refrigerante.png",
        codigo: 4,
        nome: "Refrigerante",
        preco: 1.5,
        quantidade: 0  
    }
    ]

    function inicializarLoja() {
        let containerProdutos = document.getElementById('produtos');
        produtos.map ((produto)=>{
            containerProdutos.innerHTML+= `
    
            <div class="produto">
                <img src="`+produto.img+`" />
                <p>`+produto.nome+`</p>
                <p> R$`+produto.preco.toFixed(2)+`</p>
                <a adicionar="`+produto.codigo+`" href="#">Adicionar ao carrinho!</a>                
            </div>
            `;
        })
    }


    inicializarLoja();

    let valorParcial = 0;

    function atualizarCarrinho() {
        let containerCarrinho = document.getElementById('carrinho');
        containerCarrinho.innerHTML = "";
        
        let carrinhoCheio = [];

        produtos.map ((produto)=>{

            valorParcial = produto.preco*produto.quantidade;
            
            if(produto.quantidade > 0) {
            containerCarrinho.innerHTML+= `        
                        
            <div class="elementos-carrinho">
                <table>                   
                    <tboby>
                        <tr>
                          <td><img src="`+produto.img+`" /></td>
                          <td>`+produto.nome+` </td>
                          <td>| Qtd: `+produto.quantidade+` |</td>
                          <td>R$ `+valorParcial.toFixed(2)+`</td>
                        </tr>
                    </tboby>
                </table>
            <div>
            `;                      
                carrinhoCheio.push(valorParcial);
            }      
    
            })

            const total = carrinhoCheio.reduce(function(acumuladorValorParcial, valorAtual){
            return acumuladorValorParcial + valorAtual;
            }, 0);

            let containerTotal= document.getElementById('total');
            containerTotal.innerHTML = `<p> Total: R$ `+total.toFixed(2)+`</p>`
    }



    let links = document.getElementsByTagName('a');

    let total = 0;

    function adicionarAoCarrinho(){
        for (let i = 0; i <links.length; i++){
            links[i].addEventListener("click", function(){
            let adicionar = this.getAttribute ('adicionar');
            produtos[adicionar].quantidade++;
            atualizarCarrinho();
            })
              
        }
    }

    adicionarAoCarrinho();
    

    