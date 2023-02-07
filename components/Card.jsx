import React from 'react'

export default function Card(props) {
  return (
    <div className="Card round py-5 flex-col flex">
      <img className="h-44 aspect-square" src={props.image} alt="" />
      <div className="flex flex-col items-center">
        <h1 className="text-sm font-medium">{props.title}</h1>
        <h1 className="text-xl font-bold">Price:{props.price}$</h1>

      </div>

    </div>
  )
}
