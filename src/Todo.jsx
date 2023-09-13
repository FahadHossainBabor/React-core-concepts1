// export default function Todo ({task,isDone}){
//     return (
//         <div>
//             <ol>
//                 <li><h3>Task: {task}</h3></li>
//             </ol>

//         </div>
//     )
// }

//Conditional rendering method one
// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>{task}: this task is  Finished</li>
//     }else{
//         return <li>{task}: Let's DO it</li>
//     }
// }


// Option 2
export default function Todo({ task, isDone }) {
  if (isDone) {
    return <li>{task}: this task is Finished</li>;
  }

  return <li>{task}: Let's DO it</li>;
}
