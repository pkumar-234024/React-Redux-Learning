function Hello(){
    let name = 'praveen kumar';
    let fullname = () =>{
        return 'praveen kumar singh';
    }
    
    return <h3>
        my name is {fullname()}
    </h3>
}
export default Hello;