import './index.css'

const CaseCardItem = props => {
  const {
    stateTotal,
    showConfirmed,
    showActive,
    showRecovered,
    showDeceased,
    showActiveCases,
    showDeceasedCases,
    showRecoveredCases,
    showConfirmedCases,
  } = props
  const {confirmed, deceased, recovered, active} = stateTotal
  // const stateName = name !== undefined ? name.state_name : null
  const onClickConfirmed = () => {
    showConfirmed()
  }

  const onClickActive = () => {
    showActive()
  }

  const onClickRecovered = () => {
    showRecovered()
  }

  const onClickDeceased = () => {
    showDeceased()
  }

  const activeConfirmedClass = showConfirmedCases
    ? 'confirmed-active-class'
    : ''
  const activeActiveClass = showActiveCases ? 'active-active-class' : ''

  const activeRecoveredClass = showRecoveredCases
    ? `recovered-active-class`
    : ''

  const activeDeceasedClass = showDeceasedCases ? `deceased-active-class` : ''

  return (
    <ul className="diff-type-cases">
      <li
        testid="stateSpecificConfirmedCasesContainer"
        onClick={onClickConfirmed}
        className={`country-wide confirmed ${activeConfirmedClass}`}
        // className="country-wide confirmed "
      >
        <p className="case-card-heading">confirmed</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/check-mark_1_e83qpy.png"
          alt="state specific confirmed cases pic"
        />
        <p className="case-count confirmed">{confirmed}</p>
      </li>
      <li
        testid="stateSpecificActiveCasesContainer"
        onClick={onClickActive}
        className={`country-wide active ${activeActiveClass}`}
        // className="country-wide active"
      >
        <p className="case-card-heading">Active</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/protection_1_roaazd.png"
          alt="state specific active cases pic"
        />
        <p className="case-count active">{active}</p>
      </li>
      <li
        testid="stateSpecificRecoveredCasesContainer"
        onClick={onClickRecovered}
        className={`country-wide recovered ${activeRecoveredClass}`}
        // className="country-wide recovered"
      >
        <p className="case-card-heading">Recovered</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/recovered_1_pz28bz.png"
          alt="state specific recovered cases pic"
        />
        <p className="case-count recovered">{recovered}</p>
      </li>

      <li
        testid="stateSpecificDeceasedCasesContainer"
        onClick={onClickDeceased}
        className={`country-wide deceased ${activeDeceasedClass}`}
        // className="country-wide deceased"
      >
        <p className="case-card-heading">Deceased</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/breathing_1_uxmvq9.png"
          alt="state specific deceased cases pic"
        />
        <p className="case-count deceased">{deceased}</p>
      </li>
    </ul>
  )
}
export default CaseCardItem

// import {Component} from 'react'
// import Loader from 'react-loader-spinner'
// import Header from '../Header'
// import Footer from '../Footer'

// import './index.css'

// class Vaccination extends Component {
//   renderLoader = () => (
//     <>
//       <div className="loader-container" testid="aboutRouteLoader">
//         <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
//       </div>
//     </>
//   )

//   render() {
//     return (
//       <>
//         <Header />
//         <div className="vaccination-main-container">
//           <div className="about-content-container">
//             <h1 className="about-title">Vaccination</h1>
//             <p className="about-vaccine-title">
//               Covid-19 vaccination is ready to serve
//             </p>
//             <p className="about-vaccine-title">
//               Sorry! this page under construction
//             </p>
//           </div>
//         </div>
//         <Footer />
//       </>
//     )
//   }
// }

// export default Vaccination
