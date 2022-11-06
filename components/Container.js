export default function Container(props)
{
    return(
        <div className={props.tailwind}>
            <props.child></props.child>
        </div>
    )
}