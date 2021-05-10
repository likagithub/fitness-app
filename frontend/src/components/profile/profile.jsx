import React from 'react';

// base styling
import { ContentWrapper } from 'components/base/styling'

// components
import Nav from 'components/nav/nav';

const Profile = () => {
    return (
        <>
            <ContentWrapper>
                <h2>Profile</h2>
            </ContentWrapper>
            <Nav />
        </>
    );
};

export default Profile;