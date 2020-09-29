import Head from 'next/head';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Layout = ({children}) => {
  const head = () => (
    <React.Fragment>
      <link
         rel="stylesheet"
         href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
         integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
         crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" />
    </React.Fragment>
  )

  const nav = () => (
    <ul className = "nav nav-tabs bg-warning">
      <li className = "nav-item">
        <Link href="/">
          <a className="nav-link text-dark" >Home</a>
        </Link>
      </li>
      <li className = "nav-item">
        <Link href="/login">
          <a className="nav-link text-dark" >Login</a>
        </Link>
      </li>

      <li className = "nav-item">
        <Link href="/register">
          <a className="nav-link text-dark" >Register</a>
        </Link>

      </li>
    </ul>
  )

  return <React.Fragment>
     {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
  </React.Fragment>
}

export default Layout;
