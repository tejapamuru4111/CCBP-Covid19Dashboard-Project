import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CaseCardItem from '../CaseCardItem'
import DistrictItem from '../DistrictItem'
import TimeLineData from '../TimeLineData'
import Footer from '../Footer'
import './index.css'
import Header from '../Header'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}
const activeCaseConstants = {
  confirm: 'confirmed',
  active: 'active',
  recovered: 'recovered',
  deceased: 'deceased',
}
class StateSpecificDetails extends Component {
  state = {
    showConfirmedCases: true,
    showActiveCases: false,
    showRecoveredCases: false,
    showDeceasedCases: false,
    activeCaseClass: activeCaseConstants.confirm,
    stateWiseData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'

    const options = {
      method: 'GET',
    }

    const response1 = await fetch(apiUrl, options)
    const fetchedStateWiseData = await response1.json()
    this.setState({
      apiStatus: apiStatusConstants.success,
      stateWiseData: fetchedStateWiseData,
    })
  }

  convertObjectsDataIntoListItemsUsingForInMethod = () => {
    // console.log(`state`, state)
    const {stateWiseData} = this.state
    const resultList = []

    // getting keys of an object object
    const stateKeyNames = Object.keys(stateWiseData)

    stateKeyNames.forEach(keyName => {
      if (stateWiseData[keyName]) {
        const {total} = stateWiseData[keyName]
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0
        const population = stateWiseData[keyName].meta.population
          ? stateWiseData[keyName].meta.population
          : 0
        const lastUpdated = stateWiseData[keyName].meta.last_updated
          ? stateWiseData[keyName].meta.last_updated
          : 'No Report'

        let allDistricts = []
        allDistricts = stateWiseData[keyName].districts
        resultList.push({
          stateCode: keyName,
          name: statesList.find(eachState => eachState.state_code === keyName),
          confirmed,
          deceased,
          recovered,
          tested,
          population,
          active: confirmed - (deceased + recovered),
          lastUpdated,
          districts: allDistricts,
        })
      }
    })
    return resultList
  }

  convertDistrictObjectIntoList = districts => {
    const resultDistrictList = []
    const districtKeyName = Object.keys(districts)
    districtKeyName.forEach(keyName => {
      if (districts[keyName]) {
        const {total} = districts[keyName]
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0

        resultDistrictList.push({
          districtName: keyName,
          confirmed,
          recovered,
          deceased,
          tested,
          active: confirmed - (deceased + recovered),
        })
      }
    })
    return resultDistrictList
  }

  renderStateSpecificData = () => {
    const {
      showConfirmedCases,
      showActiveCases,
      showRecoveredCases,
      showDeceasedCases,
      activeCaseClass,
      // singleState,
    } = this.state

    const {match} = this.props

    const {params} = match
    const stateCode = params

    const specificState = stateCode

    const specificStateCode = specificState.stateCode

    const TabelData = this.convertObjectsDataIntoListItemsUsingForInMethod()

    const singleState = TabelData.filter(
      eachTotal => eachTotal.stateCode === specificStateCode,
    )

    const [oneState] = singleState

    const testedCount = oneState.tested

    let lastUpdatedDate = oneState.lastUpdated
    lastUpdatedDate = new Date(lastUpdatedDate).toDateString()

    const nameOfState = statesList.filter(
      eachState => eachState.state_code === specificStateCode,
    )
    const [State] = nameOfState
    const StateName = State.state_name

    const [singleSpecificState] = singleState
    // console.log(`s2`, singleSpecificState)
    const {districts} = singleSpecificState

    const districtDataList = this.convertDistrictObjectIntoList(districts)
    // console.log(districtDataList)

    const sortByCaseKey = (array, key) =>
      array.sort((a, b) => {
        const x = a[key]
        const y = b[key]
        return x > y ? -1 : 1
      })

    const sortedArray = sortByCaseKey(districtDataList, activeCaseClass)
    console.log(`sorted_case_array`, sortedArray)

    const showConfirmed = () => {
      this.setState({
        showConfirmedCases: true,
        showActiveCases: false,
        showDeceasedCases: false,
        showRecoveredCases: false,
        activeCaseClass: activeCaseConstants.confirm,
      })
    }

    const showActive = () => {
      this.setState({
        showConfirmedCases: false,
        showActiveCases: true,
        showDeceasedCases: false,
        showRecoveredCases: false,
        activeCaseClass: activeCaseConstants.active,
      })
    }

    const showDeceased = () => {
      this.setState({
        showConfirmedCases: false,
        showActiveCases: false,
        showDeceasedCases: true,
        showRecoveredCases: false,
        activeCaseClass: activeCaseConstants.deceased,
      })
    }

    const showRecovered = () => {
      this.setState({
        showConfirmedCases: false,
        showActiveCases: false,
        showDeceasedCases: false,
        showRecoveredCases: true,
        activeCaseClass: activeCaseConstants.recovered,
      })
    }

    const districtHeadingActiveClass = () => {
      switch (activeCaseClass) {
        case activeCaseConstants.confirm:
          return 'confirmed-head'
        case activeCaseConstants.recovered:
          return ' recovered-head'
        case activeCaseConstants.active:
          return 'active-head'
        case activeCaseConstants.deceased:
          return 'deceased-head'
        default:
          return null
      }
    }

    const districtHeadingActive = districtHeadingActiveClass()

    return (
      <div className="state-specific-details-route">
        <div className="banner-card">
          <div className="state-details-container">
            <h1 className="state-name-card">{StateName}</h1>
            <p className="last-update">{`Last Updated on ${lastUpdatedDate}`}</p>
          </div>
          <div className="tested-count-container">
            <p className="tested-head">Tested</p>
            <p className="test-count">{testedCount}</p>
          </div>
        </div>

        <ul className="cases-types">
          {singleState.map(eachState => (
            <CaseCardItem
              key={eachState.stateCode}
              showConfirmed={showConfirmed}
              showActive={showActive}
              showRecovered={showRecovered}
              showDeceased={showDeceased}
              stateTotal={eachState}
              showActiveCases={showActiveCases}
              showDeceasedCases={showDeceasedCases}
              showRecoveredCases={showRecoveredCases}
              showConfirmedCases={showConfirmedCases}
            />
          ))}
        </ul>

        <h1 className={`districts-heading ${districtHeadingActive}`}>
          Top Districts
        </h1>

        <ul className="districts-data-list" testid="topDistrictsUnorderedList">
          {sortedArray.map(eachState => (
            <DistrictItem
              key={eachState.districtName}
              districtDetails={eachState}
              showActiveCases={showActiveCases}
              showDeceasedCases={showDeceasedCases}
              showRecoveredCases={showRecoveredCases}
              showConfirmedCases={showConfirmedCases}
            />
          ))}
        </ul>

        <TimeLineData activeCaseClass={activeCaseClass} />
        <Footer />
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="covid-loader-container" testid="stateDetailsLoader">
      <Loader type="Oval" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderStateSpecificRoute = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderStateSpecificData()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    // console.log('Hello')
    return (
      <div>
        <Header />
        {this.renderStateSpecificRoute()}
      </div>
    )
  }
}

export default StateSpecificDetails

// import {Component} from 'react'
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   BarChart,
//   Bar,
// } from 'recharts'
// import Loader from 'react-loader-spinner'
// import './index.css'

// class ChartsData extends Component {
//   state = {
//     allData: '',
//     forOtherChart: '',
//     isLoading: true,
//   }

//   componentDidMount() {
//     this.getChartData()
//   }

//   getChartData = async () => {
//     const {stateCode} = this.props
//     const apiUrl = `https://apis.ccbp.in/covid19-timelines-data`
//     const options = {
//       method: 'GET',
//     }

//     const response = await fetch(apiUrl, options)
//     if (response.ok) {
//       const data = await response.json()
//       // console.log(data)

//       const dataDateWise = Object.keys(data[stateCode].dates)

//       const particularState = dataDateWise.map(date => ({
//         date,
//         confirmed: data[stateCode].dates[date].total.confirmed,
//         deceased: data[stateCode].dates[date].total.deceased,
//         recovered: data[stateCode].dates[date].total.recovered,
//         tested: data[stateCode].dates[date].total.tested,
//         active:
//           data[stateCode].dates[date].total.confirmed -
//           (data[stateCode].dates[date].total.deceased +
//             data[stateCode].dates[date].total.recovered),
//       }))

//       const particularStateForOtherChart = dataDateWise.map(date => ({
//         date,
//         confirmed: data[stateCode].dates[date].total.confirmed,
//         deceased: data[stateCode].dates[date].total.deceased,
//         recovered: data[stateCode].dates[date].total.recovered,
//         tested: data[stateCode].dates[date].total.tested,
//         active:
//           data[stateCode].dates[date].total.confirmed -
//           (data[stateCode].dates[date].total.deceased +
//             data[stateCode].dates[date].total.recovered),
//       }))

//       console.log(particularState)
//       console.log(particularStateForOtherChart)

//       this.setState({
//         allData: particularState,
//         forOtherChart: particularStateForOtherChart,
//         isLoading: false,
//       })
//     }
//   }

//   renderLoadingView = () => (
//     <div
//       className="barCharts-details-loader-container"
//       testid="timelinesDataLoader"
//     >
//       <Loader type="Oval" color="#0b69ff" height="50" width="50" />
//     </div>
//   )

//   barChart = () => {
//     const {allData} = this.state
//     const {category} = this.props

//     const topTenData = allData.slice(0, 10)
//     console.log(topTenData)

//     let colorType = '#9A0E31'
//     if (category === 'confirmed') {
//       colorType = '#9A0E31'
//     } else if (category === 'active') {
//       colorType = '#0A4FA0'
//     } else if (category === 'recovered') {
//       colorType = '#216837'
//     } else if (category === 'deceased') {
//       colorType = '#474C57'
//     }
//     const dataFormatter = number => {
//       if (number > 1000) {
//         return `${(number / 1000).toString()}k`
//       }
//       return number.toString()
//     }

//     return (
//       <div className="chart-wrapper">
//         <BarChart
//           width={900}
//           height={400}
//           data={topTenData}
//           margin={{
//             top: 5,
//           }}
//         >
//           <XAxis
//             dataKey="date"
//             tick={{
//               stroke: '#6c757d',
//               strokeWidth: 1,
//               fontSize: 15,
//               fontFamily: 'Roboto',
//             }}
//           />
//           <Tooltip />
//           <Legend tickFormatter={dataFormatter} />
//           <Bar
//             dataKey={`${category}`}
//             fill={`${colorType}`}
//             label={{position: 'top', fill: '#ffffff'}}
//             radius={[5, 5, 0, 0]}
//             barSize="10%"
//           />
//         </BarChart>
//       </div>
//     )
//   }

//   graph = (type, color) => {
//     const {forOtherChart} = this.state
//     return (
//       <div>
//         <LineChart
//           width={800}
//           height={250}
//           data={forOtherChart}
//           margin={{top: 5, right: 30, left: 20, bottom: 5}}
//         >
//           <XAxis
//             dataKey="date"
//             style={{
//               fontFamily: 'Roboto',
//               fontWeight: 500,
//               textTransform: 'uppercase',
//             }}
//             dy={10}
//           />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey={type} stroke={color} />
//         </LineChart>
//       </div>
//     )
//   }

//   allChartsView = () => (
//     <>
//       <div className="barchart-container">{this.barChart()}</div>

//       <h1 className="charts-title">Spread Trends</h1>
//       <div testid="lineChartsContainer" className="barcharts-container">
//         <div className="charts confirmed-background">
//           {this.graph('confirmed', '#FF073A')}
//         </div>
//         <div className="charts active-background">
//           {this.graph('active', '#007BFF')}
//         </div>
//         <div className="charts recovered-background">
//           {this.graph('recovered', '#27A243')}
//         </div>
//         <div className="charts deceased-background">
//           {this.graph('deceased', '#6C757D')}
//         </div>
//         <div className="charts tested-background">
//           {this.graph('tested', '#9673B9')}
//         </div>
//       </div>
//     </>
//   )

//   render() {
//     const {isLoading} = this.state
//     return (
//       <div className="charts-container">
//         {isLoading ? this.renderLoadingView() : this.allChartsView()}
//       </div>
//     )
//   }
// }

// export default ChartsData
