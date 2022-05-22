import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to='/first'><div>First</div></Link>
      <Link to='/second'><div>Second</div></Link>
    </div>
  )
}
