import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Body from './Body';
function Page(){
 return (
    <div>
      <Header />
      <Body />
    </div>
 )
}
ReactDOM.render(
    <Page />,
  document.getElementById('root')
);

