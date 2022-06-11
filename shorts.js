
const inShortsnews = async () => {

    var newsCategory = document.getElementById("choose").value;

    const config = { headers: { Accept: 'application/json' } }
    var url = 'https://inshortsapi.vercel.app/news?category=' +  newsCategory;
    const res = await axios.get(url);
    
    var inShorts = "";

    for(i=0; i<res.data.data.length; i++){
        var result = res.data.data[i];
        console.log(result);
        
        inShorts += "<div><div><p><img class=shorts-img src=" +result.imageUrl +"></p></div>" 
        +  "<div class=shorts-auth><p>"+result.author + "</p></div><div><p>"+result.content+"</p></div></div>";
    
        

        document.getElementById("in-shorts").innerHTML =  inShorts;
    }
}
