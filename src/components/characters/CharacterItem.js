import React from 'react'

function CharacterItem({ item }) {
    return (
        <>
          <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt="" />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>

                    <ul>
                        <li>
                            <strong>Actor name: {item.name}</strong>
                        </li>

                        <li>
                            <strong>NIckname: {item.nickname}</strong>
                        </li>

                        <li>
                            <strong>Birthday: {item.birthday}</strong>
                        </li>

                        <li>
                            <strong>Status: {item.status}</strong>
                        </li>
                    </ul>
                </div>
            </div>    
          </div>  
        </>
    )
}

export default CharacterItem
