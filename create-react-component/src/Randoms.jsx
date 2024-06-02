function Randoms(){
    let randomNumber = Math.random()*100;
    return <h2 style={{'backgroundColor':'#101299'}}>This is the Random number Test : {Math.round(randomNumber)} </h2>
}

export default Randoms; 