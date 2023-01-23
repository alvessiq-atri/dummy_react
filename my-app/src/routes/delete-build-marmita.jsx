// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   Button,
//   Form,
//   CardGroup,
//   FormGroup,
//   Label,
//   CardImg,
//   CardTitle,
//   CardBody,
//   Card,
//   CardText,
// } from "reactstrap";
// import protein from "../food-data/protein.js";

// export default function BuildMarmita({ plateId }) {
//   const [defIngredients, setDefIngredients] = useState(["salmon"]);

//   useEffect(() => {
//     (async () => {
//       const result = await axios("http://localhost:8000/menu/" + plateId);
//       setDefIngredients(result.data.ingredients);
//     })();
//   }, []);

//   const { register, handleSubmit, errors, reset } = useForm({
//     defaultValues: { data: defIngredients },
//   });
//   console.log(defIngredients);
//   // const {
//   //   register,
//   //   handleSubmit,
//   //   // formState: { errors },
//   // } = useForm({ defaultValues: { ing: [ } });

//   const onSubmit = (data) => {
//     // console.log("Hey");
//     console.log(data);
//   };

//   return (
//     <>
//       <h3 className="d-flex justify-content-center">Edit plate:</h3>
//       <h2>Ingredients are: {defIngredients + " "}</h2>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <CardGroup>
//           <Card>
//             <CardBody>
//               <CardTitle tag="h5" className="d-flex justify-content-center">
//                 Protein
//               </CardTitle>
//               <CardText>
//                 {protein.map((c) => (
//                   <FormGroup className="d-flex justify-content-center">
//                     <input
//                       type="checkbox"
//                       value={c}
//                       name={c}
//                       {...register("data")}
//                     />
//                     <Label key={c}>{c}</Label>
//                   </FormGroup>
//                 ))}
//               </CardText>
//             </CardBody>
//           </Card>

//           {/* <FoodCard
//             register={register}
//             title={"Protein"}
//             data={protein}
//             ingredients={ingredients}
//           ></FoodCard>
//           <FoodCard
//             register={register}
//             title={"Sides"}
//             data={sides}
//             ingredients={ingredients}
//           ></FoodCard>
//           <FoodCard
//             register={register}
//             title={"Greens + Veggies"}
//             data={veggies}
//             ingredients={ingredients}
//           ></FoodCard> */}
//         </CardGroup>
//         <Button type="submit" color="warning">
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// }
