function Button1() {
    function handleClick(){
        alert('Button is clicked');
    }
  return <button onClick = {handleClick}>I don't do anything</button>;
}

function AlertButton({message , children}) {
    return (
        <button onClick={()=>alert(message)}>{children}</button>
    )
}

function Toolbar1(){
    return(
        <div>
        <AlertButton message="Playing!">Play Movie!</AlertButton>
        <AlertButton message="Uploading!">Upload Image!</AlertButton>
        </div>
    )
}

 function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}


function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}

export default function Play01(){
    return(
        <>
        <Button1 />
        <Toolbar1/>
        <App />
        <LightSwitch />
        </>
    )
}