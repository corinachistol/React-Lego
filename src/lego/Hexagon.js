import Shape from "./Shape"

export const Hexagon = ({ color, size, ...props } ) => {
    console.log(props)

    const hexagon ={
        position: "relative",

        width:`${size[1]}px`,
       
        borderTop:`${size[1]}px solid ${color}`,
        borderRight: `${size[0]}px solid transparent`,
        borderLeft: `${size[0]}px solid transparent`,
        top:`${size[0] * 2}`,
    }

    const hexagon2 = {
        position:"absolute",
        top:`-${size[0]*2,99}`,
        left:`-${size[0]}px`,

        content:"",
        height:0,
        width: `${size[1]}px`,
        borderBottom: `${size[1]}px solid ${color}`,
        borderRight: `${size[0]}px solid transparent`,
        borderLeft:`${size[0]}px solid transparent`,
        bottom:`${size[1]}px`,
    }

    return (
        <>
        <Shape {...props} >
            <div style={hexagon}>
                <div style={hexagon2}></div>
            </div>
        </Shape>      
        </>
        
    )
}