import { Data } from "..";

const Generate = (paragraphs:number):string[] => {
    //* 70 Prepositions
    //* 876 Nouns
    //* 633 Verbs
    //* 1000 Adjectives
    let text:string[] = []

    for(let p = 0, paragraph = ""; p < paragraphs; p++, paragraph = "") {
        for( let i = 0; i < 20; i ++) {
            let pIndex1 = Math.floor(Math.random() * 69)
            let nIndex1 = Math.floor(Math.random() * 875)
            let vIndex = Math.floor(Math.random() * 632)
            let pIndex2 = Math.floor(Math.random() * 69)
            let aIndex = Math.floor(Math.random() * 999)
            let nIndex2 = Math.floor(Math.random() * 875)
            let phrase = `${
              Data.prepositions[pIndex1].charAt(0).toUpperCase() + Data.prepositions[pIndex1].slice(1)
            } ${
              Data.nouns[nIndex1]
            } ${
              Data.verbs[vIndex]
            } ${
              Data.prepositions[pIndex2]
            } ${
              Data.adjectives[aIndex]
            } ${
              Data.nouns[nIndex2]
            }. `
            paragraph+=phrase
        }
        text.push(paragraph)
    }

    return text
};

export default Generate;
