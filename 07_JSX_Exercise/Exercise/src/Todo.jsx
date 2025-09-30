function Todo() {
    function callFun(){
        alert("clicked");
    }
  return (
    <>
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQHx9h7Rz-zdlQ/profile-displayphoto-shrink_800_800/B56ZdFTLZgGsAc-/0/1749214346327?e=1761782400&v=beta&t=8A7AhitnDbp4gjexEVHEcJAA8wPQZWjUfkjob5V-5Lc"
        alt="Deepak Singh"
        class="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <button onClick={callFun}>Click Me</button>
    </>
  );
}

export default Todo
