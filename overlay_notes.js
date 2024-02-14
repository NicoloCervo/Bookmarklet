javascript: (() => {
    const documentHTML = document.documentElement.outerHTML;
    const matches = documentHTML.matchAll(/[\w.+=~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/g);
    const flatMatches = Array.from(matches).map((item) => item[0]);
    const uniqueMatches = Array.from(new Set(flatMatches));
    var result;
    if (uniqueMatches.length > 0) {
        result = uniqueMatches.join('\n');
    } else {
        result = 'No emails found!'
    }

    htmlString = `<div id="swci-popup-window" class="popup">
        <div class="overlay-app" contenteditable="true">
            <span style="color: white;">${result}</<span>
        </div>
        <button  onclick='document.getElementById("swci-popup-window").style.display = "none";' class="item-2"></button>
    </div>`;

    div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    document.body.appendChild(div);

    css = `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
    
    
    .popup{
        position: fixed;
        z-index: 99900;
        background-color: rgba(16 18 27 / 40%);
        width: 18%;
        height: 200px;
        border-radius: 5px;
        right: 10px;
        top: 10px;
        backdrop-filter: blur(20px);
        display: flex;
        flex-direction: row;
        padding-left: 10px;
        padding-top: 10px;
        padding-right: 10px;
        justify-content: space-between;
        font-family: "Poppins", sans-serif;
    }
    .overlay-app{
        
        display: flex;
        flex-direction: column;
    }
    
    .flex-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    min-height: 100vh; 
    }
    [class^="item"]{
    text-decoration: none;
    margin-right: 20px;
    background: transparent;
    box-shadow: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
    }
    .item-1 {
    height: 50px;
    .inner {
        display: block;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        &:before {
        content: "";
        position: absolute;
        height: 2px;
        width: 50px;
        background-color: #FFF;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        transition: ease-out .2s all;
        }
        &:after {
        content: "";
        position: absolute;
        height: 2px;
        width: 50px;
        background-color: #FFF;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        transition: ease-out .2s all;
        }
    }
    .label {
        color: #FFF;
        opacity: 0;
        transition: all .2s ease-out;
    }
    &:hover,
    &:focus {
        .inner {
        &:before {
            transform: translate(-50%, 0%) rotate(0);
            top: 25%;
        }
        &:after {
            transform: translate(-50%, 0%) rotate(0);
            top: 76%;
        }
        }
        .label {
        opacity: 1;
        }
    }
    }
    .item-2 {
    width: 30px;
    height: 30px;
    position: relative;
    border: 1px solid #FFF;
    border-radius: 50%;
    &:before,
    &:after {
        content: "";
        position: absolute;
        width: 80%;
        height: 2px;
        background-color: #FFF;
        transition: 0.3s ease-out;
        left: 50%;
        top: 50%;
    }
    &:after {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:before {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:hover,
    &:focus {
        &:before,
        &:after {
        transform: translate(-50%, -50%) rotate(180deg);
        }
    }
    }
    .item-3 {
    width: 50px;
    height: 50px;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        height: 2px;
        width: 50px;
        background-color: #FFF;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        transition: ease-out .3s all;
    }
    &:after {
        content: "";
        position: absolute;
        height: 2px;
        width: 50px;
        background-color: #FFF;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        transition: ease-out .3s all;
    }
    &:hover, &:focus {
        &:before {
        transform: translate(-50%, -50%) rotate(135deg);
        }
        &:after {
        transform: translate(-50%, -50%) rotate(225deg);
        }
    }
    }
    .item-4 {
    width: 60px;
    height: 60px;
    position: relative;
    border-radius: 50%;
    background-color: #FFF;
    opacity: 0.8;
    transition: 0.3s ease-out;
    &:before,
    &:after {
        content: "";
        position: absolute;
        width: 80%;
        height: 2px;
        background-color: #36658d;
        left: 50%;
        top: 50%;
    }
    &:after {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:before {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:hover,
    &:focus {
        transform: scale(1.15);
        opacity: 1;
    }
    }
    .item-5 {
    position: relative;
    width: 50px;
    height: 50px;
    &:before, &:after {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        background-color: #fff;
        width: 100%;
        height: 2px;
        transition: height .2s ease-out;
        border-radius: 3px;
    }
    &:before {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:hover, &:focus {
        &:before, &:after {
        height: 4px;
        }
    }
    }
    .item-6 {
    position: relative;
    width: 50px;
    height: 50px;
    &:before, &:after {
        content: "";
        position: absolute;
        height: 2px;
        width: 50%;
        background-color: #FFF;
        transition: width .2s ease-out;
    }
    &:before {
        transform: rotate(45deg);
        left: 7px;
        top: 7px;
        transform-origin: left;
    }
    &:after {
        transform: rotate(-45deg);
        right: 7px;
        top: 7px;
        transform-origin: right;
    }
    .inner {
        color: #FFF;
        &:before, &:after {
        content: "";
        position: absolute;
        height: 2px;
        width: 50%;
        background-color: #FFF;
        transition: width .2s ease-out;
        }
        &:before {
        transform: rotate(45deg);
        transform-origin: right;
        bottom: 6px;
        right: 8px;
        }
        &:after {
        transform: rotate(-45deg);
        transform-origin: left;
        bottom: 6px; 
        left: 8px;
        }
    }
    .label {
        opacity: 0;
        transition: all .2s ease-out;
    }
    &:focus, &:hover {
        &:before, &:after {
        width: 10px;
        }
        .inner {
        &:before, &:after {
            width: 10px;
        }
        }
        .label {
        opacity: 1;
        }
    }
    }`;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.append(style);

})();
