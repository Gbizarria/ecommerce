const products=[    
    {
        title:'Lightweight Jacket', 
        url:"asset/lightweight-jacket.jpg",
        tag:'Camisetas',
        descript:"Adicione um pouco de energia guarda roupa de inverno com estajaqueta vibrante...",
        price:'100.00',
    },
    {
        title:'Elegance Jacket', 
        url:"asset/elegance-jacket.jpg",
        tag:'Camisetas',
        descript:"Roupas elegantes para eventos especiais, trazendo sofisticação e uma boa impressão de primeira...",
        price:'100.00',
    },
    {
        title:'Over Shirt', 
        url:"asset/over-shirt.jpg",
        tag:'Camisetas',
        descript:"Adicione muita energia ao seu guarda roupa do dia a dia com estacamiseta sensacional...",
        price:'100.00',
    },
    {
        title:'Super Over Shirt', 
        url:"asset/super-over-shirt.jpg",
        tag:'Camisetas',
        descript:"dicione muita energia ao seuguarda roupa do dia a dia com estacamiseta sensacional...",
        price:'100.00',
    },
    {
        title:'Minimal Jacket', 
        url:"asset/minimal-jacket.jpg",
        tag:'Camisetas',
        descript:"Adicione elegância e estilo em seu guarda roupa com nossas camiseta de manga longa basicas ...",
        price:'100.00',
    },
    {
        title:'Weather Shirts', 
        url:"asset/weather-shirts.jpg",
        tag:'Camisetas',
        descript:"Cores vibrantes e uma energia sem igual é o que você precisa ter no seu guardada roupa de primavera...",
        price:'100.00',
    }
];



// barra de pesquisa 

const search ={
    placeHolder:'Digite sua busca', button:'Pesquisar'
};

const aside=document.querySelector('aside')
 



const divSeach = document.createElement('div')
    divSeach.classList.add('search')



const input = document.createElement('input')
    input.placeholder=search.placeHolder
    input.type='text'
    
    

    
const buttonSearch = document.createElement('button')
    buttonSearch.type = 'submit'
    buttonSearch.innerText = search.button
    
    
    
    
    divSeach.appendChild(input)
    divSeach.appendChild(buttonSearch)
    aside.appendChild(divSeach)


 // evento no botão de pesquisar

 
    buttonSearch.addEventListener('mousemove',()=>{
        buttonSearch.style.background='#37268C'
        buttonSearch.addEventListener('mouseout',() => {
            buttonSearch.style.background='#2E245E'})
    })


    
    //Carrinho  de compras 

const titleCart = document.createElement('div')
     titleCart.classList.add('shopping-cart')
     titleCart.innerText='Carrinho de compras'
     aside.appendChild(titleCart)
  

const cart = document.createElement('div')
    cart.classList.add('cart')
   
    
const empaty = document.createElement('p')
    empaty.classList.add('empaty')
    empaty.innerText='Carrinho Vazio'

const reminder =document.createElement('a')
    reminder.innerText='Adicione itens'
    
    cart.appendChild(reminder)
    cart.appendChild(empaty)
    aside.appendChild(cart)
    
    
const cartSum = document.createElement('section')
    cartSum.classList.add('cart-sum')
    cartSum.style.display='none'
     

const checkOut = document.createElement('div')
      checkOut.classList.add('check-out')

const quantity=document.createElement('span')
      quantity.innerText='Quantidade'      

const total=document.createElement('span')
      total.innerText='Total'

checkOut.appendChild(quantity)
checkOut.appendChild(total)

cartSum.appendChild(checkOut)

aside.appendChild(cartSum)

//checkout do carrinho e cálculo
const priceCart = document.createElement('div')
    priceCart.classList.add('price-cart')
    cartSum.appendChild(priceCart)

const valueChekOut = document.createElement('span')   
    priceCart.appendChild(valueChekOut)
   

const princeTotal = document.createElement('span')
      priceCart.appendChild(princeTotal)
    
      
      


let sumPrinceCart = 0// para somar o valor dos itens dentro do carrinho

const containerCards = document.querySelector('.container-cards')//área dos cards

const tableCart = document.createElement('table')//tabela de itens dentro do carrinho
    tableCart.classList.add('table-cart')
    cart.appendChild(tableCart)

//cards dos produtos dentro da tag main(container)
products.forEach(card => {
    const  imagem = document.createElement('img')
                 imagem.src = card.url 
    const container = document.createElement('div')
                container.classList.add('box-cards')
    const  tag = document.createElement('p')
                tag.classList.add('section')
                tag.innerText=card.tag
    const  titleCard = document.createElement('p')
                titleCard.classList.add('title-card')
                titleCard.innerText=card.title    
    const  descript = document.createElement('p')
                descript.classList.add('descript')
                descript.innerText=card.descript  
    const  addCart = document.createElement('button')
                addCart.classList.add('addCart')
                addCart.innerText='Adicionar ao carrinho'  
    const  price = document.createElement('p')
                price.classList.add('value')
                price.innerText=`R$ ${card.price}`
                
      
          container.appendChild(imagem)
          container.appendChild(tag)
          container.appendChild(titleCard)
          container.appendChild(descript)
          container.appendChild(price)
          container.appendChild(addCart)
      
          containerCards.appendChild(container)
      
    
      /**Estilização do botão para 'adicionar ao carrinho' */
          
          addCart.addEventListener("mousemove",() => {
              addCart.style.textDecoration='underline'
          
          addCart.addEventListener("mouseout",() => {
              addCart.style.textDecoration='none'  
          })
          }) 
          addCart.addEventListener('mousedown',()=>{
              addCart.style.color='blue'
       
          addCart.addEventListener('mouseup',()=>{
              addCart.style.color='#333'           
          })
          });

          /**Ações de click */

          addCart.addEventListener('click',() => {
            empaty.style.display='none'
            reminder.style.display='none'
            cartSum.style.display=''
            cart.style.overflowY ='scroll'
            
            
        // clicando e somando
            sumPrinceCart+=Number(price.innerText.replace('R$',''))
            princeTotal.innerText =`R$ ${parseFloat(sumPrinceCart).toFixed(2)}`

        // criando tabela que recebe os produtos no carrinho 
    const tableProduts = document.createElement('tr')
              tableProduts.classList.add('table-products')
            

    const urlImg= document.createElement('img')
                urlImg.src = card.url

    const tableImg = document.createElement('tr')
             
                tableImg.classList.add('table-img')
                tableImg.appendChild(urlImg)
              
    const tableTitle = document.createElement('th')
                
                tableTitle.classList.add('table-title')
                tableTitle.innerText=card.title      
              
    const tablePrice = document.createElement('th')
                 tablePrice.classList.add('table-price')
                 tablePrice.innerText= `R$ ${card.price}`
            
    const removeProduct = document.createElement('button')
                  removeProduct.type = 'submit'
                  removeProduct.innerText = 'Remover Produto'
                  removeProduct.classList.add('remove-product')

                  // evento botão remove

                removeProduct.addEventListener('mousemove', () => {
                    removeProduct.style.textDecoration='underline'
                    removeProduct.style.color= '#3461F0'
                    
                    removeProduct.addEventListener('mouseout', () => {
                        removeProduct.style.textDecoration='none'
                        removeProduct.style.color= '#333'


                    })

                    
                    removeProduct.addEventListener('click', () => {
                        tableCart.removeChild(tableProduts)
                        tableCart.removeChild(tableImg)
                        valueChekOut.innerText=tableCart.querySelectorAll('.table-products').length 
                        sumPrinceCart-=Number(price.innerText.replace('R$',''))
                        princeTotal.innerText =`R$ ${parseFloat(sumPrinceCart).toFixed(2)}`
                        if(tableCart.querySelectorAll('.table-products').length == 0){
                            cartSum.style.display='none'
                            cart.style.overflow=''
                        }
                    })
                })
        
               tableCart.appendChild(tableImg)
               tableProduts.appendChild(tableTitle)
               tableProduts.appendChild(tablePrice)
               tableProduts.appendChild(removeProduct)
               tableCart.appendChild(tableProduts)
     //quantidade de itens no carrinho
            valueChekOut.innerText=tableCart.querySelectorAll('.table-products').length 

        } )

        // bordas no cards(movimento)
        container.addEventListener('mouseover',() => {
            container.style.border='1px solid #2E245E'})
        container.addEventListener('mouseout', () => {
            container.style.border='none'
        })

        
        // click pesquisar
        
        

    

         buttonSearch.addEventListener('click', (e) =>{
            e.preventDefault()
        
                 const valueInput = input.value

             if(card.title.includes(valueInput)===true){
                    container.style.display=''
                    
                    

              }else{
                    container.style.display = 'none'
                    


                }
    
         })

        
     
        
    });
        
    
   
    
         
       
         
 
    


