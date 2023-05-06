import logo from "../../icons/logo-bright.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" className="burger-container">
          <svg className="icon-toggle cursor-point">
            <use xlinkHref="#svg-icon-toggle"></use>
          </svg>
        </label>

        {/* <!-- navbar-menu --> */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                男款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul className="nav-list site-action-list">
            {/* <!-- search --> */}
            <li className="nav-item">
              {/* <svg className="nav-icon cursor-point">
                      <use xlinkHref="#svg-icon-search"></use>
                    </svg>                               */}
            </li>
            {/* <!-- cart --> */}
            <li className="nav-item">
              {/* <svg className="nav-icon cursor-point">
                      <use xlinkHref="#svg-icon-cart"></use>
                    </svg> */}
            </li>
            <li id="theme-toggle" className="nav-item">
              {/* <!-- moon --> */}
              {/* <svg className="nav-icon cursor-point">
                      <use xlinkHref="#svg-icon-moon"></use>
                    </svg>                */}
              {/* <!-- sun --> */}
              {/* <svg className="nav-icon cursor-point">
                      <use xlinkHref="#svg-icon-sun"></use>
                    </svg> */}
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a className="header-logo-container" href="#">
          {/* <svg className="icon-logo cursor-point">
                  <use xlinkHref="#svg-icon-logo"></use>
                </svg> */}
          <img src={logo} classNameName="icon-logo cursor-point" alt="logo" />
        </a>
      </div>
    </header>
  );
}
