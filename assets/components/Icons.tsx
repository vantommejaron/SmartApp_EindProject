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
export default ({icon, style, size}:{icon:any, style:any, size:any}) => {
    if (icon == 'BedRoom') {
      return (
        <>
          <BedDouble style={style} size={size} />
        </>
      )
    }
    if (icon == 'LivingRoom') {
      return (
        <>
          <Sofa style={style} size={size} />
        </>
      )
    }
    if (icon == 'Kitchen') {
        return (
          <>
            <Microwave style={style} size={size} />
          </>
        )
    }
    if (icon == 'BathRoom') {
        return (
          <>
            <Bath style={style} size={size} />
          </>
        )
    }
    if (icon == 'DinnerRoom') {
        return (
          <>
            <UtensilsCrossed style={style} size={size} />
          </>
        )
    }
    if (icon == 'Office') {
        return (
          <>
            <Laptop style={style} size={size} />
          </>
        )
    }
    if (icon == 'Car') {
        return (
          <>
            <CarIcon style={style} size={size} />
          </>
        )
    }
    if (icon == 'Gamepad') {
        return (
          <>
            <Gamepad2 style={style} size={size} />
          </>
        )
    }


}
