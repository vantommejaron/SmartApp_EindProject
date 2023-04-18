import {
  Sofa,
  BedDouble,
  Microwave,
  Bath,
  UtensilsCrossed,
  Laptop,
  CarIcon, 
  Gamepad2,
} from 'lucide-react-native'
export default ({number, style, size}:{number:any, style:any, size:any}) => {
    if (number == 1) {
        return (
            <>
                <BedDouble style={style} size={size}/>
            </>
        )
    }
    if (number == 2) {
      return (
        <>
          <Sofa style={style} size={size} />
        </>
      )
    }
    if (number == 3) {
        return (
          <>
            <Microwave style={style} size={size} />
          </>
        )
    }
    if (number == 4) {
        return (
          <>
            <Bath style={style} size={size} />
          </>
        )
    }
    if (number == 5) {
        return (
          <>
            <UtensilsCrossed style={style} size={size} />
          </>
        )
    }
    if (number == 6) {
        return (
          <>
            <Laptop style={style} size={size} />
          </>
        )
    }
    if (number == 7) {
        return (
          <>
            <CarIcon style={style} size={size} />
          </>
        )
    }
    if (number == 8) {
        return (
          <>
            <Gamepad2 style={style} size={size} />
          </>
        )
    }


}
