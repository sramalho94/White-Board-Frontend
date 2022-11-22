import {Link} from 'react-router-dom'



const Navbar = ({handleLogout, user, authenticated}) => {
let authenticatedOptions 

if (user) {
    authenticatedOptions = (
        <div className="nav">
            <h1>WhiteBoard</h1>
            <h3>Welcome {user.email}</h3>
            <Link to='/'>Home</Link>
            <Link onClick={handleLogout} to='/'>Logout?</Link>
        </div>
        
    )
}


const publicOptions = (
    <nav className="nav">
        <h1>WhiteBoard</h1>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/addcourse'> Add Course </Link>
            <Link to='/students'> Students</Link>

    </nav>
)

return(
    <div>
<header>
{authenticated && user ? authenticatedOptions : publicOptions}
</header>
    </div>
    )
}

export default  Navbar