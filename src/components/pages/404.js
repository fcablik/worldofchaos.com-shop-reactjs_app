import { NavLink } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <>
            <main id='main'>
                <div className='main-content'>
                    <div id='error404'>
                        <h1 className="-mc-title -text-center">404 Page Not Found</h1>
                        <NavLink className="btn-home" to="/">Go back home</NavLink>
                        {/* <NavLink className="btn-404" to="/shop">Go to Store</NavLink> */}
                    </div>
                </div>
            </main>
        </>
    );
}
