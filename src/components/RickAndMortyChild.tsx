import styled from "styled-components";
import {Character} from "../types";

//child component used for displaying info / UI

//container for the character displays
const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: teal;
`;

//styling div for each individual character
const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    width: 25%;
    padding: 1%;
    margin: 1%;
    background-color: ${(props)=>(props.status === "Alive" ? 'white' : 'black')};
    color: ${(props) => (props.status !== "Alive" ? 'white' : 'black')};
    border: ${(props) => (props.status !== "Alive" ? 'darkred 3px solid' : 'lightgreen 3px solid')};
    font: small-caps bold calc(2px + 1vw) Arial, fantasy;
    text-align: center;
`;

//styling some text to be bigger in font 
const BiggerFontP = styled.p `
    font: small-caps bold calc(5px + 1vw) Arial, fantasy;
`

export default function RickAndMortyChild(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} status={char.status}>
                        <h1>{char.name}</h1>
                        <BiggerFontP>{char.species !== "Human" ? "(Not Human)" : ""}</BiggerFontP>
                        <p>{char.type}</p>  {/*new field*/}
                        <img src={char.image} alt={`image of ${char.name}`} />
                        <BiggerFontP>{char.gender}</BiggerFontP> {/*new field*/}
                        <p>URL: <br />{char.url}</p> {/*new field*/}
                        <p>Added to database: <br /> {char.created}</p> {/*new field*/}
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}