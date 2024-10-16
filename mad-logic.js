
// Omoh there should be a shorter way to write some of this logic but i know i will get better

const coinName1 = document.querySelector("#coin-name1");
const coinImage1 = document.querySelector("#coin-image1");
const select1 = document.querySelector("#top-coin");

select1.addEventListener('input', () =>{
    const coin1 = select1.value;
    switch(coin1){
        case "ethereum":
            coinImage1.src = "ethereum-eth.svg";
            coinName1.innerHTML = "Ethereum <span>Eth</span";
            break;
        case "bitcoin":
            coinImage1.src = "bitcoin-logo-svgrepo-com.svg"
            coinName1.innerHTML = "Bitcoin <span>Btc</span"
            break;
        case "ton":
            coinImage1.src = "toncoin-ton-seeklogo.svg";
            coinName1.innerHTML = "Ton <span>Ton</span";
            break;
        case "solana":
            coinImage1.src = "solana.svg";
            coinName1.innerHTML = "Solana <span>Sol</span";

    }
});

const coinName2 = document.querySelector("#coin-name2");
const coinImage2 = document.querySelector("#coin-image2");
const select2 = document.querySelector("#down-coin");

const coin = document.querySelector("#coin");

select2.addEventListener('input', () =>{

    const coinInput = parseInt(coin.value);

    const coin2 = select2.value;

    switch(coin2){
        case "ethereum":
            coinImage2.src = "ethereum-eth.svg";
            coinName2.innerHTML = "Ethereum <span>Eth</span";

            if (select1.value === "bitcoin"){
                alert(`${coinInput} BTC = ${((coinInput * 64600) / 2521)} ETH`);
            }else if (select1.value === "ethereum"){
                alert(`${coinInput} ETH = ${coinInput} ETH`);
            }else if (select1.value === "ton"){
                alert(`${coinInput} TON = ${((coinInput * 5) / 2521)} ETH`);
            }else if (select1.value === "solana"){
                alert(`${coinInput} SOL = ${((coinInput * 155) / 2521)} ETH`);
            }
            break;

        case "bitcoin":
            coinImage2.src = "bitcoin-logo-svgrepo-com.svg"
            coinName2.innerHTML = "Bitcoin <span>Btc</span"

            if (select1.value === "bitcoin"){
                alert(`${coinInput} BTC = ${coinInput} BTC`);
            }else if (select1.value === "ethereum"){
                alert(`${coinInput} ETH = ${((coinInput * 2521) / 64600)} BTC`);
            }else if (select1.value === "ton"){
                alert(`${coinInput} TON = ${((coinInput * 5) / 64600)} BTC`);
            }else if (select1.value === "solana"){
                alert(`${coinInput} SOL = ${((coinInput * 155) / 64600)} BTC`);
            }
            break;

        case "ton":
            coinImage2.src = "toncoin-ton-seeklogo.svg";
            coinName2.innerHTML = "Ton <span>Ton</span";
            if (select1.value === "bitcoin"){
                alert(`${coinInput} BTC = ${((coinInput * 64600) / 5)} TON`);
            }else if (select1.value === "ethereum"){
                alert(`${coinInput} ETH = ${((coinInput * 2521) / 5)} TON`);
            }else if (select1.value === "ton"){
                alert(`${coinInput} TON = ${coinInput} TON`);
            }else if (select1.value === "solana"){
                alert(`${coinInput} SOL = ${((coinInput * 155) / 5)} TON`);
            }
            break;

        case "solana":
            coinImage2.src = "solana.svg";
            coinName2.innerHTML = "Solana <span>Sol</span";
            if (select1.value === "bitcoin"){
                alert(`${coinInput} BTC = ${((coinInput * 64600) / 155)} SOL`);
            }else if (select1.value === "ethereum"){
                alert(`${coinInput} ETH = ${((coinInput * 2521) / 155)} SOL`);
            }else if (select1.value === "ton"){
                alert(`${coinInput} TON = ${((coinInput * 5) / 155)} SOL`);
            }else if (select1.value === "solana"){
                alert(`${coinInput} SOL = ${coinInput} SOL`);
            }
    }
});
