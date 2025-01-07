import React from 'react'

const Meeting = async ({params} : {params : {id : string}}) => {
  const para = await params;
  console.log(para);
  return (
    <div>Meeting Room: {para.id}</div>
  )
}

export default Meeting