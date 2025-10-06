function AddUser({setUser}){
    return(
        <div>
            <h1>AddUser</h1>
            <input type="text" onChange=
            {(e)=>setUser(e.target.value)} 
            placeholder="Enter name"/>
            <hr></hr>
        </div>
    )
}

export default AddUser