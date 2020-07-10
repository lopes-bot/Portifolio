import styled from 'styled-components';

export const Nav = styled.div `
    background-color:  	#4682B4;
    height:60px;
    width:100%;
    color:white;  
    padding-top:10px;   
    position: fixed;
`;

export const Mbox = styled.div `
    background-color: #4682B4;
    width: 100% ;
    height:400px;
    display:flex;
    align-items: center;
    justify-content: center;

`;
export const MboxImg = styled.div `
    height:300px;
    width:300px;
    background-color:#4682B4;

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
    width:80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-left:100px;
  
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
export const FormCard = styled.p `
    text-align: left;
    margin-left: 20px;
    margin-top: 25px; 
    padding: 5px;
    background-color:#e8f5fc
`;

export const Text = styled.p `
    background-color:#e8f5fc;
    padding:30px;
    text-align: left;
    word-spacing:3px;
    font-size: 14px;
    line-height:160%;
`;

export const Linkicon = styled.a `
    margin:5px;
    margin-top:10px;

`;
export const But = styled.button `
    background-color: 	#20B2AA;
    border-radius: 10px;
    height:35px;
    width:160px;
    color: white;
    border-style: none;
    
    
    &:hover{
        background-color: tomato;
        cursor:pointer;
        color:white;
    }

`;
export const LinkBut = styled.a `
    margin-top:-20px;
`;

export const NavStyle = styled.div `
    margin-top:${props=>props.top};
    background-color: #4682B4;
    width:77%;
    margin-right:10px;
    margin-left:100px; 
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
export const BoxBar = styled.div `
   
  height: 15px;
  padding: 5px;
  border-radius:10px;
  background-color: #ccc;
  display: flex;

`;

export const BarProg = styled(BoxBar) `
    --progress:${props => props.prog};
   content: "";
  width: calc(var(--progress) * 1%);
  background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
  transition: all 0.2s ease;

`;
export const Tec = styled.h5 `
    
`;

export const BoxConatiner = styled(Container) `
    display: inline-block;
    text-align:center;
    border-style: solid;
    border-color:white;
    border-width:1px;
    width:500px ;
    margin-left:0px;
    border-radius:15px;
    margin:20px;
    box-shadow: 0 0 2em gray;
    height:450px;
    
    
`;
export const TitleImg = styled.h4 `
    margin:10px;
`;
export const TextImg = styled.p `
    margin:10px;
   
`;
export const TextA = styled.h2 `
color:white;
margin-top:180px;
margin-left:150px
`;
export const TextB = styled.h1 `
    color:white;
    margin-left:180px;
    margin-top:10px;
`;
export const boxText = styled.div `
    margin-left:150px;

`;