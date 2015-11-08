import React from 'react';

class Landing extends React.Component {
    render() {
        const mainStyle = {
            width: '100%',
            height: '100%',
        };

        const headerStyle = {
            background: 'url(http://lanarkshireweddings.com/wp-content/uploads/2015/04/Thavorn_Wedding_Phuket_Romantic_Beachside.jpg) no-repeat center center scroll',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'table',
        };

        const textStyle = {
            display: 'table-cell',
            textAlign: 'center',
            verticalAlign: 'middle',
        };

        return (
            <div style={mainStyle}>
                <header style={headerStyle}>
                    <div style={textStyle}>
                        <h1>Our Wedding</h1>
                    </div>
                </header>
            </div>
        );
    }
}

export default Landing;
