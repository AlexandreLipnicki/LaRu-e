import Navbar from "../components/Navbar"

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <h1 className="display-3 text-light">
          Dashboard
        </h1>
      </div>
    </>
  )
}