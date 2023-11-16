

## reactjs / LEGO / functional
> reusability >> DRY , lose coupling.
    React mdoern = functional programming
    Framewokrs, libraries based on OOP programming, foarte des vor incuraja reusabilitatea prin mostenire (o clasa, un prototip de baza care transmite mostenitorilor o parte din structura sa, logica). Chiar si in aceasta caz in ultimii ani se incurajeaza compozitia 
    Mostenirea la nivel functional nici nu e posibil
> composition
> decoration
> HoC
> props drill down








   <Square 
   size={100} 
   color="green"          ----->packed ---> props { color size , //// }
   place={50,50}>                              |
                                               |   
                                               |       
                                      
---------------------------------Square   (   props  ) ---------------
                                                |
                                            destructuring
                                        {color = "black", size=100, place=[0,0]}  <- default
                                                |
                                                |
                                                |
                                            color =...
                                            size=...
                                            place=...
                                                |
                                                v
                                               JSX
                                               |
                                             return (render)
                                               |
                                               v
                                        

 





## functional (DRY) : association

<Shape ...> 
    ^
    |
    +
   / \ 
Square Triangle  specific

Cind separi pe parti ceva,ca apoi sa le combini  ca sa poti utiliza DRY,nu te gindi doar la partea logica,  gindeste-te la mai mult decit separarea logicii

gindeste-te si la separarea sablonului pe straturi





    {
        place:...
        size:...
        color:...
    }   
        |
        v
Square (props)
        |
        |
        |        {
        |            color:...
        |            size:...
        |          }
        |  +--------children = <div....>        
        v v 
    Shape(props)
        |
        |
        +-----> children
                place


                hw: try to draw a hexagon the same way 