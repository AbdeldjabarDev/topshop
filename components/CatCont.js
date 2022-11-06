import Link from "next/link"
import { useRouter } from "next/router"

export default function CatCont(props)
{
    let router = useRouter();
    return(
    <div className="flex border-b border-b-slate-600 w-fit ml-[30%]" onClick={(e)=>{router.push("/categories/" + props.name)}}>
    <div>{props.name + "    (" + props.numItems +")" + "    >"}  </div>
    
    </div>)
}