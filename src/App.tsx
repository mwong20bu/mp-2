import RickAndMorty from "./components/RickAndMorty.tsx";
import styled from "styled-components";

//parent div for the app as a whole, containing all the data displayed from the API 
const ParentDiv=styled.div`
    width: 90vw;
    margin: auto;
    border: 5px limegreen solid;
`;

export default function App(){
    return(
        <ParentDiv>
            <RickAndMorty/>
        </ParentDiv>
    )
}