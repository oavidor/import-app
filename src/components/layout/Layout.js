import * as React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
    return(
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
            {/* <Content ></Content> */}
        </div>
    )
}

export default Layout