import React from "react";
import { useParams } from "react-router-dom";
import { RickMortyDetailPod } from "@/pods/detail/rickAndMortyDetail";

export const RickMortyDetailScene: React.FC = () => {
    const {id} = useParams();
    return <RickMortyDetailPod id={id} />
    
}