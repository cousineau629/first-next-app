import styled from "styled-components";

const StyledHeader = styled.div`
.header{
    padding: 25px 0;
    text-align: center;
    background: blue;
}
`
export function Header(){
    let websiteName = "My Site";

    return(
        <StyledHeader>
            <div className="header">
            {websiteName}
            </div>
        </StyledHeader>
    );
}