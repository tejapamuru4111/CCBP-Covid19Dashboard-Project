import {BiChevronRightSquare} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import './index.css'

const SearchRecommendation = props => {
  const {state} = props
  const {stateCode, stateName} = state

  return (
    <Link className="recommendation-link-item" to={`/state/${stateCode}`}>
      {/* <li className="recommendation-card" onClick={onClickSearchItem}> */}
      <li className="recommendation-card">
        <p className="suggest-state-name">{stateName}</p>
        <div className="stateCode-item">
          <p className="state-code">{stateCode}</p>
          <BiChevronRightSquare className="right-square-icon" />
        </div>
      </li>
    </Link>
  )
}
export default SearchRecommendation

//   to={{
//     pathname: `/state/${stateCode}`,
//     state: {stateWiseData: allStates, timeLineData},
//   }}

// import {Link} from 'react-router-dom'
// import {BiChevronRightSquare} from 'react-icons/bi'

// import './index.css'

// const SearchResult = props => {
//   const {states} = props

//   return (
//     <li>
//       <Link className="search-link" to={`/state/${states.state_code}`}>
//         <div className="search-main-container">
//           <h1 className="search-heading">{states.state_name}</h1>
//           <button className="search-button" type="button">
//             {states.state_code}
//             <BiChevronRightSquare
//               alt="icon search"
//               className="icon"
//               testid="searchResultChevronRightIcon"
//             />
//           </button>
//         </div>
//       </Link>
//     </li>
//   )
// }

// export default SearchResult
