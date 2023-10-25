import styled from "styled-components";

const MovieContainer = styled.div`
    background-color: rgb(24, 30, 109);
    display : flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const MovieBox = styled.div`
    width: 250px;
    height: 400px;
    margin: 10px;
    text-align: center;
    background-color: rgb(51, 58, 163);
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    transition: filter 0.3s ease;

    &:hover {
        opacity: 0.6;
    }

    .movie-overview {
        display: none;
    }

    &:hover .movie-overview {
        position: absolute;
        left: 20;
        top: 10;
        display: block;
        z-index: 999;
    }

    p {
        color: white;
        font-size: small;
        font-weight: bold;
    }

    .movie-poster {
        width: 100%;
        height : 85%;
        position: relative;
        z-index: 1;
    }

    .movie-title {
        text-align: left;
        margin-top: 10px;
        color: white;
        font-size: 13px;
    }

    .movie-grade {
        text-align: right;
        color: white;
        font-size: 12px;
     }
      
    &.hovered .movie-overview {
        opacity: 1;
    }
`;

export {MovieContainer, MovieBox};