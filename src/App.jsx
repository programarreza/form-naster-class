import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import ReusableForm from './components/ReusableForm/ReusableForm'

function App() {

  // const handleSignUpSubmit = (data) => {
  //   console.log("sign up data", data);  
  // }

  // const handleUpdateProfile = (data) => {
  //   console.log("update profile", data);
  // }

  return (
    <>

      {/* <h1>Form Master</h1> */}
      {/* <SimplForm></SimplForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>please sign up right now</p>
          </div>
      </ReusableForm>

      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile update</p>
          </div>
      </ReusableForm> */}

      <GrandPa></GrandPa>

    </>
  )
}

export default App
