const Navbar = () => {
    return (
        <ul>
            <li><a href={'/'}>Main</a></li>
            <li><a href={'/Login'}>Login</a></li>
            <li><a href={'/Signup'}>Signup</a></li>
        </ul>
    )
}

const NavCRUD = () => {
    return (
        <ul>
            <li><a href={'/'}>Main</a></li>
            <li><a href={'/Create'}>Create Activity</a></li>
            <li><a href={'/Update'}>Upadate Activity</a></li>
        </ul>
    )
}
export default Navbar