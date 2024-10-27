import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div className='font-lexend '>
            <div className="navbar mb-2 md:mb-0 bg-white my-4 md:my-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#150B2BB3] text-base">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#150B2BB3] text-base">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-4'>
                        <div className='bg-[#150B2B0D] w-[100px] md:w-[260px] h-12 items-center gap-3 rounded-[50px] px-6 hidden md:flex'>
                            <i className="text-gray-400 fa-solid fa-magnifying-glass pt-1"></i>
                            <input className='text-gray-400 bg-transparent w-full' type="text" name="search" id="search" placeholder='Search' />
                        </div>
                        <div className='w-10 h-10 md:w-12 md:h-12 bg-[#0BE58A] rounded-full flex justify-center items-center'>
                            <i className="text-xl fa-regular fa-circle-user"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mb-7'>
                <div className='bg-[#150B2B0D] w-[260px] h-12 items-center gap-3 rounded-[50px] px-6 flex md:hidden'>
                    <i className="text-gray-400 fa-solid fa-magnifying-glass pt-1"></i>
                    <input className='text-gray-400 bg-transparent w-full' type="text" name="search" id="search" placeholder='Search' />
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;