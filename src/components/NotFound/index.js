import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="covid-error-view-container">
    <div className="notfound-card">
      <img
        src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/notfound_wxbwda.png"
        alt="not-found-pic"
        className="not-found-image"
      />
      <h1 className="notfound-heading">PAGE NOT FOUND</h1>
      <p className="notfound-description">
        we are sorry, the page you requested could not be found
      </p>
      <Link to="/">
        <button type="button" className="go-to-home-button">
          Home
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound

// import {Link} from 'react-router-dom'

// import './index.css'

// const NotFound = () => (
//   <div className="not-found-main-container">
//     <div className="not-found-container">
//       <img
//         src="https://res.cloudinary.com/amst/image/upload/v1639762911/notfnd_e79uve.jpg"
//         className="not-found-img"
//         alt="not-found-pic"
//       />
//       <h1 className="not-found-heading">PAGE NOT FOUND</h1>
//       <p className="not-found-description">
//         we are sorry, the page you requested could not be found
//       </p>
//       <p className="not-found-description">Please go back to the homepage</p>

//       <div className="button-container">
//         <Link to="/state/AN">
//           <button className="not-found-btn" type="button">
//             Home
//           </button>
//         </Link>
//       </div>
//     </div>
//   </div>
// )

// export default NotFound
