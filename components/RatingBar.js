export default function RatingBar(props)
{
     let starArr = [];
    let half = (props.rating/0.5)%2 == 0 ? false : true;
    for(let i = 0;i< Math.floor(props.rating);i++)
    {
starArr.push(<img key={i} className="w-3 h-3 lg:w-4 lg:h-4" src='/images/full-star.svg'></img>)
    } 
    if(half)
    starArr.push(<img key={Math.floor(props.rating)} className="w-3 h-3 lg:w-4 lg:h-4" src='/images/half-star.svg'></img>)
for(let i = Math.ceil(props.rating);i<5;i++)
{
    starArr.push(<img key={i} className="w-3 h-3 lg:w-4 lg:h-4" src='/images/empty-star.svg'></img>)
}

   
    return(
        <div className="flex gap-1  w-[50%]">{starArr}</div>
    )
}