import Link from "next/link"

const RestaurantHeader = () =>{
    return(
        <>
        <div className="header-wrapper">
            <div className="logo">
                <img style={{width:100}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3noXW8nPZ433BwWrahQQatS3XVlPLovVsOw&s" />
            </div>
            <ul className="nav-links">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Login/SignUp</Link>
                </li>
                <li>
                    <Link href="/">Profile</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default RestaurantHeader;