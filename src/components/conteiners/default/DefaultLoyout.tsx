import { Outlet } from "react-router-dom";
import DefaultHeader from "./DefaultHeader";

const DefaultLoyout = () =>
{
    return(
    <>
    <DefaultHeader/>
    <div className="conteiner">
        <Outlet/>
    </div>
    </>
    );
};

export default DefaultLoyout;