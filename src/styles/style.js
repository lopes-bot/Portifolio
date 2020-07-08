import styled from 'styled-components';

export const Nav = styled.div `
    background-color:  	#4682B4;
    height:60px;
    color:white;  
    padding-top:10px;   
`;

export const UlItem = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavItem = styled.li`
    text-decoration: none;
    list-style: none;
    margin:15px;  
`;
export const Container = styled.div `
    width:1050px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-left:160px;
`;
export const Card = styled.div `
    height: 400px;
    width:500px;
    margin:15px;
    text-align: center;
`;
export const Title = styled.h3 `
    color: #00008B;
    margin: 10px;
    margin-top:15px;
`;
export const FormCard = styled.h4 `
    text-align: left;
    margin-left: 20px;
    margin-top: 25px; 
    color:#59ed78;
    padding: 5px;
`;
export const Text = styled.p `
    background-color:#e8f5fc;
    padding:30px;
    text-align: left;
    word-spacing:3px;
    font-size: 14px;
    line-height:160%;
`;
export const Box = styled.div `
    background-color:#e8f5fc; 
`;
export  const  Name = styled.p `
    color: black;
    position: absolute;
    top:153px;
    left:1000px;
`;
export const Date = styled(Name) `
    top:210px;
    left:1080px;
`;
export const Phone = styled(Name) `
    top:265px;
    left:1040px;
`;
export const Email = styled(Name) `
    top:320px;
    left:955px;
`;
export const Linkicon = styled.a `
    margin:5px;

`;
export const But = styled.button `
    background-color: 	#20B2AA;
    border-radius: 10px;
    height:35px;
    color: white;
    position: absolute;
    top:390px;
    border-style: none;
    
    &:hover{
        background-color: tomato;
        cursor:pointer;
        color:white;
    }

`;

export const NavStyle = styled.div `
    background-color: #4682B4;
    width:1020px;
    margin-left:160px; 
    border-left: 30px solid #0000cd;
    border-top: 30px solid transparent; 
    border-bottom: 30px solid transparent;
    float:left;
    
`;
export const NavTitle = styled.p `
    color: white;
    margin-left:50px;
    font-size: 20px;

`;


