const api_url ="https://api.quotable.io/random";
const quote=document.getElementById("quote");
const author=document.getElementById("author");

async function getQuote(url){
    const response= await fetch(url);
    var data= await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
    
}


getQuote(api_url);

function tweet(){
    window.open(  href="https://twitter.com/intent/tweet?text=" + quote.innerHTML,"Tweet Window",width="60",height="30"
    )
}
