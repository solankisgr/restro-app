const RestaurantSignup = () =>{
    return(
        <>
         <h3>SignUp Component </h3>
        <div>
        <div className="input-wrapper">
            <input type="text" placeholder="Enter email id" className="input-field"/>
            </div>
            <div className="input-wrapper">
            <input type="text" placeholder="Enter password" className="input-field"/>
            </div>
            <div className="input-wrapper">
            <input type="text" placeholder="Confirm password" className="input-field"/>
            </div>
            <div className="input-wrapper">
            <input type="text" placeholder="Enter restaurant name" className="input-field"/>
            </div>
            <div className="input-wrapper">
            <input type="text" placeholder="Enter city" className="input-field"/>
            </div>
            <div className="input-wrapper">
            <input type="text" placeholder="Enter full address" className="input-field"/>
            </div>
            <div className="input-wrapper">
            <input type="text" placeholder="Enter contact No." className="input-field"/>
            </div>
           
            <div className="input-wrapper">
            <button className="button">SignUp</button>
            </div>
            </div>
        </>
    )
}

export default RestaurantSignup ;