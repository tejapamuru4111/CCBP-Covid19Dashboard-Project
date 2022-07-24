import './index.css'

const HomeCaseCardItem = props => {
  const {
    stateTotal,
    showActiveCases,
    showDeceasedCases,
    showRecoveredCases,
    showConfirmedCases,
  } = props

  // console.log(stateTotal)

  const {confirmed, deceased, recovered, active} = stateTotal

  const activeConfirmedClass = showConfirmedCases
    ? 'confirmed-active-class'
    : ''
  const activeActiveClass = showActiveCases ? 'active-active-class' : ''

  const activeRecoveredClass = showRecoveredCases
    ? `recovered-active-class`
    : ''

  const activeDeceasedClass = showDeceasedCases ? `deceased-active-class` : ''

  return (
    <>
      <div
        testid="countryWideConfirmedCases"
        className={`home-country-wide confirmed ${activeConfirmedClass}`}
      >
        <p className="case-card-heading">Confirmed</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/check-mark_1_e83qpy.png"
          alt="country wide confirmed cases pic"
        />
        <p className="case-count confirmed">{confirmed}</p>
      </div>
      <div
        testid="countryWideActiveCases"
        className={`home-country-wide active ${activeActiveClass}`}
      >
        <p className="case-card-heading">Active</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/protection_1_roaazd.png"
          alt="country wide active cases pic"
        />
        <p className="case-count">{active}</p>
      </div>
      <div
        testid="countryWideRecoveredCases"
        // onClick={onClickRecovered}
        className={`home-country-wide recovered ${activeRecoveredClass}`}
        // className="country-wide recovered"
      >
        <p className="case-card-heading">Recovered</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/recovered_1_pz28bz.png"
          alt="country wide recovered cases pic"
        />
        <p className="case-count">{recovered}</p>
      </div>

      <div
        testid="countryWideDeceasedCases"
        // onClick={onClickDeceased}
        className={`home-country-wide deceased ${activeDeceasedClass}`}
        // className="country-wide deceased"
      >
        <p className="case-card-heading">Deceased</p>
        <img
          src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/breathing_1_uxmvq9.png"
          alt="country wide deceased cases pic"
        />
        <p className="case-count">{deceased}</p>
      </div>
    </>
  )
}
export default HomeCaseCardItem

// import {Component} from 'react'
// import Loader from 'react-loader-spinner'

// import Header from '../Header'
// import Footer from '../Footer'

// import ShowEachDistrictData from '../ShowEachDistrictData'
// import StateTotalData from '../StateTotalData'
// import ChartsData from '../ChartsData'

// import './index.css'

// const statesList = [
//   {
//     state_code: 'AN',
//     state_name: 'Andaman and Nicobar Islands',
//   },
//   {
//     state_code: 'AP',
//     state_name: 'Andhra Pradesh',
//   },
//   {
//     state_code: 'AR',
//     state_name: 'Arunachal Pradesh',
//   },
//   {
//     state_code: 'AS',
//     state_name: 'Assam',
//   },
//   {
//     state_code: 'BR',
//     state_name: 'Bihar',
//   },
//   {
//     state_code: 'CH',
//     state_name: 'Chandigarh',
//   },
//   {
//     state_code: 'CT',
//     state_name: 'Chhattisgarh',
//   },
//   {
//     state_code: 'DN',
//     state_name: 'Dadra and Nagar Haveli and Daman and Diu',
//   },
//   {
//     state_code: 'DL',
//     state_name: 'Delhi',
//   },
//   {
//     state_code: 'GA',
//     state_name: 'Goa',
//   },
//   {
//     state_code: 'GJ',
//     state_name: 'Gujarat',
//   },
//   {
//     state_code: 'HR',
//     state_name: 'Haryana',
//   },
//   {
//     state_code: 'HP',
//     state_name: 'Himachal Pradesh',
//   },
//   {
//     state_code: 'JK',
//     state_name: 'Jammu and Kashmir',
//   },
//   {
//     state_code: 'JH',
//     state_name: 'Jharkhand',
//   },
//   {
//     state_code: 'KA',
//     state_name: 'Karnataka',
//   },
//   {
//     state_code: 'KL',
//     state_name: 'Kerala',
//   },
//   {
//     state_code: 'LA',
//     state_name: 'Ladakh',
//   },
//   {
//     state_code: 'LD',
//     state_name: 'Lakshadweep',
//   },
//   {
//     state_code: 'MH',
//     state_name: 'Maharashtra',
//   },
//   {
//     state_code: 'MP',
//     state_name: 'Madhya Pradesh',
//   },
//   {
//     state_code: 'MN',
//     state_name: 'Manipur',
//   },
//   {
//     state_code: 'ML',
//     state_name: 'Meghalaya',
//   },
//   {
//     state_code: 'MZ',
//     state_name: 'Mizoram',
//   },
//   {
//     state_code: 'NL',
//     state_name: 'Nagaland',
//   },
//   {
//     state_code: 'OR',
//     state_name: 'Odisha',
//   },
//   {
//     state_code: 'PY',
//     state_name: 'Puducherry',
//   },
//   {
//     state_code: 'PB',
//     state_name: 'Punjab',
//   },
//   {
//     state_code: 'RJ',
//     state_name: 'Rajasthan',
//   },
//   {
//     state_code: 'SK',
//     state_name: 'Sikkim',
//   },
//   {
//     state_code: 'TN',
//     state_name: 'Tamil Nadu',
//   },
//   {
//     state_code: 'TG',
//     state_name: 'Telangana',
//   },
//   {
//     state_code: 'TR',
//     state_name: 'Tripura',
//   },
//   {
//     state_code: 'UP',
//     state_name: 'Uttar Pradesh',
//   },
//   {
//     state_code: 'UT',
//     state_name: 'Uttarakhand',
//   },
//   {
//     state_code: 'WB',
//     state_name: 'West Bengal',
//   },
// ]

// class StateWiseCases extends Component {
//   state = {
//     isLoading: true,
//     stateName: '',
//     stateTotalCasesData: {},
//     activeTabId: 'confirmed',
//     districtsCases: {},
//     lastUpdatedDate: '',
//     activeStateCode: '',
//   }

//   componentDidMount() {
//     this.getAllStatesData()
//   }

//   getAllStatesData = async () => {
//     const {match} = this.props
//     const {params} = match
//     const {stateCode} = params
//     const apiUrl = `https://apis.ccbp.in/covid19-state-wise-data/`
//     const options = {
//       method: 'GET',
//     }

//     const response = await fetch(apiUrl, options)
//     if (response.ok) {
//       const data = await response.json()
//       const stateData = data[stateCode]
//       // console.log(stateData)
//       const districtsData = stateData.districts
//       // console.log(districtsData)
//       const stateTotalCases = stateData.total
//       // console.log(stateTotalCases)
//       const lastUpdated = stateData.meta.notes.split(':')
//       // console.log(lastUpdated[0].slice(1, -2))

//       this.setState({
//         isLoading: false,
//         stateName: statesList.filter(item => item.state_code === stateCode),
//         stateTotalCasesData: stateTotalCases,
//         districtsCases: districtsData,
//         lastUpdatedDate: lastUpdated[0].slice(1, -2),
//         activeStateCode: stateCode,
//       })
//     }
//   }

//   renderLoader = () => (
//     <>
//       <div className="loader-container" testid="stateDetailsLoader">
//         <Loader type="Oval" color="blue" height="50" width="50" />
//       </div>
//     </>
//   )

//   changeActiveTabId = id => {
//     this.setState({activeTabId: id}, this.getAllStatesData)
//   }

//   getDistrictData = data => {
//     const {activeTabId} = this.state
//     let categoryData = []
//     const dn = Object.keys(data)
//     if (activeTabId === 'active') {
//       categoryData = dn.map(item => {
//         const count =
//           data[item].total.confirmed -
//           (data[item].total.recovered + data[item].total.deceased)
//             ? data[item].total.confirmed -
//               (data[item].total.recovered + data[item].total.deceased)
//             : 0
//         return {
//           name: item,
//           casesCount: count,
//         }
//       })
//     } else {
//       categoryData = dn.map(item => ({
//         name: item,
//         casesCount: data[item].total[activeTabId]
//           ? data[item].total[activeTabId]
//           : 0,
//       }))
//     }
//     const sortedData = categoryData.sort((a, b) => b.casesCount - a.casesCount)
//     return sortedData
//   }

//   renderSuccessView = () => {
//     const {
//       stateName,
//       stateTotalCasesData,
//       activeTabId,
//       districtsCases,
//       lastUpdatedDate,
//       activeStateCode,
//     } = this.state

//     const tabsDataList = [
//       {
//         id: 'confirmed',
//         name: 'Confirmed',
//         logo:
//           'https://res.cloudinary.com/amst/image/upload/v1639929248/conf_cof3e9.jpg',
//         value: stateTotalCasesData.confirmed,
//       },

//       {
//         id: 'active',
//         name: 'Active',
//         logo:
//           'https://res.cloudinary.com/amst/image/upload/v1639929248/act_kq7nfx.jpg',
//         value:
//           stateTotalCasesData.confirmed -
//           (stateTotalCasesData.recovered + stateTotalCasesData.deceased),
//       },

//       {
//         id: 'recovered',
//         name: 'Recovered',
//         logo:
//           'https://res.cloudinary.com/amst/image/upload/v1639929248/uyf_ndpqov.jpg',
//         value: stateTotalCasesData.recovered,
//       },

//       {
//         id: 'deceased',
//         name: 'Deceased',
//         logo:
//           'https://res.cloudinary.com/amst/image/upload/v1639929248/dese_tgak4e.jpg',
//         value: stateTotalCasesData.deceased,
//       },
//     ]

//     const districtData = this.getDistrictData(districtsCases)

//     return (
//       <>
//         <div className="state-name-row">
//           <h1 className="state-title">{stateName[0].state_name}</h1>
//           <div className="testNo-container">
//             <p className="test-title">Tested</p>
//             <p className="testNo">{stateTotalCasesData.tested}</p>
//           </div>
//         </div>
//         <p className="last-date">{`last update on ${lastUpdatedDate} 2021`}</p>

//         <ul className="country-stats">
//           {tabsDataList.map(item => (
//             <StateTotalData
//               key={item.id}
//               tabData={item}
//               changeActiveTabId={this.changeActiveTabId}
//               isActive={activeTabId === item.id}
//             />
//           ))}
//         </ul>

//         <div className="total-district-data-block">
//           <h1 className={`district-heading ${activeTabId}-color`}>
//             Top Districts
//           </h1>
//           <div className="ul-parent-list">
//             <div className="district-data-ul-list">
//               <ul
//                 className="districts-container"
//                 testid="topDistrictsUnorderedList"
//               >
//                 {districtData.map(each => (
//                   <ShowEachDistrictData
//                     key={each.name}
//                     number={each.casesCount}
//                     name={each.name}
//                   />
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="graphs-data" testid="lineChartsContainer">
//             <ChartsData stateCode={activeStateCode} category={activeTabId} />
//           </div>
//         </div>
//       </>
//     )
//   }

//   render() {
//     const {isLoading} = this.state
//     return (
//       <>
//         <Header />
//         <div className="single-state-main-container">
//           <div className="state-content-container">
//             {isLoading ? this.renderLoader() : this.renderSuccessView()}
//           </div>
//         </div>
//         <Footer />
//       </>
//     )
//   }
// }

// export default StateWiseCases
