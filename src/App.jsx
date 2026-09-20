// import { Gallery, Image } from "./Gallery";
// export function App() {
//   return (
//     <>
//       <Gallery />
//       <Image />
//     </>
//   );
// }


function StudentCard(props){
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Department {props.department}</p>
      <p>CGPA : {props.cgpa}</p>
    </div>
  )
}

export function App(){
  return(
    <>
    <StudentCard
    name = "Rakibul"
    age = {25}
    department = "CSE"
    cgpa = {3.26}
    />

      <StudentCard
    name = "Rakibul Hasan"
    age = {25}
    department = "CSE"
    cgpa = {3.26}
    />
      <StudentCard
    name = "Rakibul Hasan"
    age = {25}
    department = "CSE"
    cgpa = {3.26}
    />
    </>
  )
}