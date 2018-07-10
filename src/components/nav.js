import React from 'react';

const Nav = (props) => (
<div className="topbar">
  <div className="title">LA Bus Tracker</div>
  <div className="route">
    <div className="label">Select Route: </div>
    <form onSubmit={props.handleSubmit}>
      <input value={props.lineValue} onChange={props.handleChange} className="fat" type="text" placeholder="Bus Line"/>
    </form>
  </div>
</div>
)

export default Nav
