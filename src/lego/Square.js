import Shape from "./Shape"

const Square = ({color,size, ...props})=> {
    console.log(props)
    

    const specificCss= { 
        backgroundColor: color,
        width: `${size}px` ,
        height: `${size}px` 
    }

  
    return(
        <Shape {...props} >
            <div style={specificCss}>

            </div>
        </Shape>
    )
}


export default Square