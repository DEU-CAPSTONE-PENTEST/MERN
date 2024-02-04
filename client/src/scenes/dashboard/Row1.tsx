import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery} from "@/state/api";
import React from "react";

type Props = {};

const Row1 = (props:Props) => {
    const {data} = useGetKpisQuery();
    console.log('data:', data)
}