import './header.css';

function Header() {
    return (
        <>
        <header>
            <h1>TaskAhead</h1>
            <div className="theme">
                <span className="dark"></span>
                <span className="light"></span>
                <span className="pepper"></span>
                <span className="gone"></span>
                <span className="gtwo"></span>
                
            </div>
        </header>
        </>
    );
}

export default Header;