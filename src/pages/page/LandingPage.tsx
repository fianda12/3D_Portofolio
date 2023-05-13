interface LandingPageProps {
    onStartClick: () => void
  }
  

function LandingPage({ onStartClick }: LandingPageProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-8 text-black">
            Welcome to My Landing Page
          </h1>
          <button className="bg-secondary text-black px-8 py-4 rounded-md" onClick={onStartClick}>
            Start
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
