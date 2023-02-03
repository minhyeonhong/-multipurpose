import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <StLayoutWrap>
            <Header />
            <StLayout>{children}</StLayout>
            <Footer />
        </StLayoutWrap>
    );
};

const StLayoutWrap = styled.div`
    text-align: center;
`;

const StLayout = styled.div`
    min-height: 100vh;
`;

export default Layout;