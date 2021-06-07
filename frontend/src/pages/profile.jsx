import React from 'react';
import styled from 'styled-components';

// base styling
import { ContentWrapper } from 'components/base/styling'

// media
import ProfileIllustration from 'images/profile-illustration.svg';

// components
import Nav from 'components/nav/nav';

const StyledProfilePic = styled.img`
    margin: 70px 0 5px 0;
`

const StyledText = styled.p`
    text-align: center;
`;

const Profile = () => {
    return (
        <>
            <ContentWrapper>
                <StyledProfilePic src={ProfileIllustration} alt="profile illustration"/>
                <StyledText>Profil bearbeiten</StyledText>
            </ContentWrapper>
            <Nav />
        </>
    );
};

export default Profile;