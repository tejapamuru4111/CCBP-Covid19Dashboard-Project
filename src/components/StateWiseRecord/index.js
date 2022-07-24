import './index.css'

const StateWiseRecord = props => {
  const {stateTotal} = props
  const {confirmed, deceased, name, population, recovered, active} = stateTotal

  // console.log(confirmed)
  return (
    <li className="state-total-record-card">
      <p className="case-item state-name">{name}</p>
      <p className="case-item  confirmed1">{confirmed}</p>
      <p className="case-item active1">{active}</p>
      <p className="case-item  recovered1">{recovered}</p>
      <p className="case-item  deceased1">{deceased}</p>
      <p className="case-item population">{population}</p>
    </li>
  )
}

export default StateWiseRecord

// import {Link} from 'react-router-dom'

// import './index.css'

// const TotalStats = props => {
//   const {data} = props
//   const {
//     stateName,
//     recovered,
//     deceased,
//     confirmed,
//     active,
//     population,
//     stateCode,
//   } = data

//   return (
//     <>
//       <li className="state-name-list">
//         <div className="state-main-container">
//           <Link to={`/state/${stateCode}`} className="state-link">
//             <p className="description">{stateName}</p>
//           </Link>
//         </div>

//         <div className="home-container">
//           <p className="confirmed-state">{confirmed}</p>
//         </div>

//         <div className="home-container">
//           <p className="active-state">{active}</p>
//         </div>

//         <div className="home-container">
//           <p className="recovered-state">{recovered}</p>
//         </div>

//         <div className="home-container">
//           <p className="deceased-state">{deceased}</p>
//         </div>

//         <div className="home-container">
//           <p className="population-state">{population}</p>
//         </div>
//       </li>
//     </>
//   )
// }

// export default TotalStats
