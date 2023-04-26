import React, {useState} from "react";

const Name = () => {
  // 이곳에 useState 구문을 작성해주세요
  const [myName,setMyName]=useState("");//디폴트값 빈 문자열 ""
  const [myNickName,setMyNickName]=useState("");

  const handleName = (e) => {
    // 이곳에 이름을 설정하도록 하는 코드를 작성해주세요
    setMyName(e.target.value);
  };

  const handleNickName = (e) => {
    // 이곳에 닉네임을 설정하도록 하는 코드를 작성해주세요
    setMyNickName(e.target.value);
    };

  return (
    <div className="name">
      <input name="myName" placeholder="이름을 입력해주세요" onChange={handleName} value={myName}/>
      <input name="nickName" placeholder="닉네임을 입력해주세요" onChange={handleNickName} />
      <p>이름: {myName === "" ? "아직 이름이 없습니다" : myName}</p>
      <p>닉네임: {myNickName === "" ? "아직 닉네임이 없습니다" : myNickName}</p>
    </div>
  );
};

export default Name;
