import React ,{useState,useEffect} from "react";
import Question from "./Question";


export default function Quiz() {
  
  const[Quizes,setQuizes]=useState([]);
  useEffect(()=>{
    fetchMoreData();// eslint-disable-next-line
  },[])

  const fetchMoreData=async()=>{
    let url="https://api.jsonbin.io/v3/qs/6419a671ebd26539d09290a1";
    let data=await fetch(url);
    let parsed=await data.json();
    setQuizes(Quizes.concat(parsed.record.quizzes))
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {Quizes.map((element) => {
            return (
              <Question
                text={element.question}
                des={element.distractors}
                answer={element.answer}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
