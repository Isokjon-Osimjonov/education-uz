import React from 'react';
import '../grammar/Grammar.css'
import {HEADER__LINKS} from './../../static/HEADER__STATIC__LINKS'
function Grammar() {
  return <div>
  
{
HEADER__LINKS?.map((links, index)=>(
 <p key={index}>{links.linkName }</p>
))

}

    
  </div>;
}

export default Grammar;
