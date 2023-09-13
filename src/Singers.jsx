const singerStyle = {
    margin: '10px',
    padding: '10px',
    border:'2px solid green',
    borderRadius: '20px'
}

export default function Singers({singer}){
    return (
        <div style={singerStyle}>
            <li>Name:{singer.name} && age:{singer.age}</li>
        </div>
    )
}