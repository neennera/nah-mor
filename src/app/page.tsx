export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Nah-Mor</h1>
        <p className="text-lg text-gray-600 mb-8">
          A comprehensive voting and analysis platform
        </p>
        <div className="space-x-4">
          <a 
            href="/vote" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            Start Voting
          </a>
          <a 
            href="/result" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 inline-block"
          >
            View Results
          </a>
          <a 
            href="/analysis/upload/1" 
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 inline-block"
          >
            Analysis
          </a>
        </div>
      </div>
    </main>
  )
}
