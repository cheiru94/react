
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

const SideMenu = (props) => {
  console.log(props);
  return (
    <>
      <div
        style={{
          border: "1px solid rgba(180,10,50,1.0)",
          width: "200px",
          height: "94vh", // vh : viewport height  ,  vw : viewport width
          padding: "10px",
          textAlign: props.direction,
          textTransform: "uppercase",


        }}>
        {props.direction}

        {/* ul>li*5>lorem1  이래 작성하면 밑에 처럼 쫘락 나온다*/}
        <ul style={{ listStyle: "none", paddingLeft: "0px", lineHeight: "1.6rem" }}>  {/* rem  */}
          <li>Lorem.</li>
          <li>Explicabo.</li>
          <li>Et.</li>
          <li>Corporis.</li>
          <li>Sapiente!</li>
          <li>Fugiat.</li>
          <li>Magnam?</li>
          <li>Sit.</li>
          <li>Nam.</li>
          <li>Non.</li>
          <li>Dignissimos.</li>
          <li>Vitae!</li>
          <li>Officia!</li>
          <li>Animi.</li>
          <li>Optio.</li>
        </ul>

      </div>

    </>
  )
}


/* 🟢 App  */
const App = (props) => {
  const { showMenu } = props;

  return (
    <>
      {showMenu && <SideMenu direction={'left'} />}

    </>
  )
}

// React.createElement(태그타입, props, ...children)

ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <App showMenu={true} />


  </>
);