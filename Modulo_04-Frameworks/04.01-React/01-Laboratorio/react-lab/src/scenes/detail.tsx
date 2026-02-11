import React from "react";
import { useParams } from "react-router-dom";
import { DetailPod } from "@/pods/detail";

export const DetailScene: React.FC = () => {
    const {login} = useParams();
    return <DetailPod login={login} />
    
}