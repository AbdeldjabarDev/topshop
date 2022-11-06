export default function RatingBar(props)
{
     let starArr = [];
    let half = (props.rating/0.5)%2 == 0 ? false : true;
    for(let i = 0;i< Math.floor(props.rating);i++)
    {
starArr.push(<img className="w-4 h-4" src='/images/full-star.svg'></img>)
    } 
    if(half)
    starArr.push(<img className="w-4 h-4" src='/images/half-star.svg'></img>)
for(let i = Math.ceil(props.rating);i<5;i++)
{
    starArr.push(<img className="w-4 h-4" src='/images/empty-star.svg'></img>)
}

   
    return(
        <div className="flex gap-2">{starArr}</div>
    )
}