import React, {useState} from "react";

/* 아기사자의 길~ */
// const Diary = () => {
//   // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
//   // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
//   // 실습으로 다뤘던 두 문제를 참고하면 충분히 해결할 수 있으실거라 생각합니다!

//   const [myTitle,setMyTitle]=useState("");
//   const [myDiary,setMyDiary]=useState("");

//   const insertTitle = (e)=>{
//     setMyTitle(e.target.value);
//     console.log(e.target.value);
//   }

//   const insertIndex = (e)=>{
//     setMyDiary(e.target.value);
//     console.log(e.target.value);
//   }

//   const removeAll = () =>{
//     setMyDiary("");
//     setMyTitle("");
//   }

//   const insertAll = () => {
//     let aa=`제목 : ${myTitle}\n내용 : ${myDiary}`;//템플릿 리터럴
//     alert(aa);
//   }

//   return (
//     <div className="diary">
//       <input name="subject" placeholder="제목을 입력해주세요" onChange={insertTitle} value={myTitle}/>
//       <br />
//       <textarea name="content" placeholder="내용을 입력해주세요" onChange={insertIndex} value={myDiary}/>
//       <br />
//       <button onClick={removeAll}>초기화</button>
//       <br />
//       <button onClick={insertAll}>입력 완료</button>
//     </div>
//   );
// };

// export default Diary;

/*어른사자의 길 */
const Diary = () => {

  const [myDiary,setMyDiary]=useState([{Title:"",Index:""}]);

  //배열 말고 객체로
  function insertTitle(e) {
    setMyDiary({Title:e.target.value, Index:myDiary.Index});
    console.log(e.target.value);
    console.log(e.target);
    //obj["fruit"] = "soyoon";
  }

  const insertIndex = (e)=>{

    setMyDiary({Title:myDiary.Title, Index:e.target.value});
    console.log(e.target.value);
    console.log(e.target);
  }

  const removeAll = () =>{
    setMyDiary({Title:"",Index:""});
  }

  const insertAll = () => {
    let aa=`제목 : ${myDiary.Title}\n내용 : ${myDiary.Index}`;//템플릿 리터럴
    alert(aa);
  }

  return (
    <div className="diary">
      <input name="subject" placeholder="제목을 입력해주세요" onChange={insertTitle} value={myDiary.Title}/>
      <br />
      <textarea name="content" placeholder="내용을 입력해주세요" onChange={insertIndex} value={myDiary.Index}/>
      <br />
      <button onClick={removeAll}>초기화</button>
      <br />
      <button onClick={insertAll}>입력 완료</button>
    </div>
  );
};

export default Diary;
