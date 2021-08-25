var container=document.createElement('div');
container.setAttribute('class', 'container-fluid');

container.innerHTML=`<nav class="navbar navbar-expand-lg">
<div class="container">
    <a class="navbar-brand " href="#" style="padding-right: 30px; color: white;">Cataas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="" style="color: white;">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="https://cataas.com/#/integration"
                    style="color: white;">Indegration</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="https://cataas.com/#/about"
                    style="color: white;">About</a>
            </li>
        </ul>
        <form class="d-flex" id="searchbar">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit" style="color: white;">Search</button>
        </form>
    </div>
</div>
</nav>
<div class="back-img">
<img src="./images/cat-1.jpg" alt="">
<img src="./images/cat-2.jpg" alt="">
<img src="./images/cat-3.jpg" alt="">
<img src="./images/cat-4.jpg" alt="">
<img src="./images/cat-5.jpg" alt="">
<img src="./images/cat-6.jpg" alt="">

<div class="home-banner-content-container">
    <div class="home-banner-content container">
        <h1>Cataas</h1>
        <h2>Cat as a service</h2>
        <p>Is a Rest Api to spread peace and love (or not) thanks to cats.<br> Have <span class="count"
                innerhtml="683">683</span> cats for now</p>
        <br>
        <a class="btn btn-primary"
            href="https://i.pinimg.com/236x/3d/b7/d7/3db7d7faea5eaa39f0e568336836d409.jpg"
            target="_blank">Give me a cat</a>
    </div>
</div>
</div>
</div>
`;
    document.body.append(container);
    
    
    async function showingdata(){
        try{
            const data=await fetch("https://cataas.com/api/cats");
            const res=await data.json();
            catDatas(res);
        }
        catch{
            console.log("result not found")
        }
    };
   
    const searchbar = document.getElementById('searchbar');
    let catCharacters = [];
    
    searchbar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
    
        const filteredcats = catCharacters.filter((character) => {
            return (
                character.tags.includes(searchString)
            );
        });
        displayCharacters(filteredcats);
    });
    
    const loadCharacters = async () => {
        try {
            const res = await fetch('https://cataas.com/api/cats?tags=cute');
            catCharacters = await res.json();
            displayCharacters(catCharacters);
        } catch (err) {
            console.log("err");
        }
    };
    
    const displayCharacters = (characters) => {
        const htmlString = characters
            .map((character) => {
                return `
                <li class="character">
                    <p>character:${character.tags}"></p>
                </li>
            `;
            })
            .join('');
            displayCharacters() = htmlString;
    };
    
    loadCharacters();
    
    