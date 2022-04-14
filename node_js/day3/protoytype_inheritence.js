// const cat={
//     legs:4,
//     tails:true,
//     furs:true,
//     claws:"sharp"
// };

// const lion=Object.create(cat);
// lion.speed="60kph"

// const liger=Object.create(lion)
// console.log("liger",liger)

const tata={
    
    Power_Steering:"yes",
    Power_Windows_Front:"yes",
    Anti_Lock_Braking_System:"yes",
    Air_Conditioner:"yes",
    Driver_Airbag:"yes",
    Passenger_Airbag:"yes",
    Automatic_Climate_Control:"yes",
    Fog_Lights___Front:"yes",
    Alloy_Wheels:"yes"

}   

const tata_punch=Object.create(tata);
tata_punch.ARAI_Mileage="18.82 kmpl"
tata_punch.Fuel_Type="Petrol"
tata_punch.Engine_Displacement_cc="1199"
tata_punch.Fuel_Tank_Capacity="37.0"
tata_punch.Max_Power="84.48bhp@6000rpm"
tata_punch.Seating_Capacity="5"

const tata_nexon=Object.create(tata);
tata_nexon.ARAI_Mileage="21.5 kmpl"
tata_nexon.Fuel_Type="Diesel"
tata_nexon.Engine_Displacement_cc="1497"
tata_nexon.Fuel_Tank_Capacity="44.0"
tata_nexon.Max_Power="108.49bhp@4000rpm"
tata_nexon.Seating_Capacity="5"



console.log(tata_punch)