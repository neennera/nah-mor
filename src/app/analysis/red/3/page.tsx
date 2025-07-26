export default function RedAnalysis3Page() {
  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-6">
          <a href="/analysis" className="text-blue-600 hover:text-blue-800">← Back to Analysis</a>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6 text-red-700">Red Analysis 3: Security Audit</h1>
        
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Security Assessment Report</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-red-800 mb-2">Critical Issues</h4>
                <div className="text-2xl font-bold text-red-600">2</div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-yellow-800 mb-2">Warnings</h4>
                <div className="text-2xl font-bold text-yellow-600">7</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Passed Checks</h4>
                <div className="text-2xl font-bold text-green-600">91</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-3">Critical Security Issues</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">⚠️</span>
                  <div>
                    <strong>Weak encryption detected:</strong> Some data transmissions using outdated TLS 1.1
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">⚠️</span>
                  <div>
                    <strong>Privilege escalation risk:</strong> Admin access controls need tightening
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-3">Security Warnings</h4>
              <ul className="space-y-2 text-sm">
                <li>• Password policy could be strengthened (minimum 12 characters)</li>
                <li>• Session timeout should be reduced from 8 hours to 4 hours</li>
                <li>• Multi-factor authentication not enabled for all admin accounts</li>
                <li>• Log retention period should be extended to 12 months</li>
                <li>• API rate limiting could be more restrictive</li>
                <li>• Database backup encryption needs verification</li>
                <li>• Third-party dependency security scan overdue</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">Recommended Security Enhancements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium mb-2">Immediate Actions</h5>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Upgrade to TLS 1.3</li>
                    <li>• Review admin permissions</li>
                    <li>• Enable MFA for all users</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Long-term Improvements</h5>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Implement zero-trust architecture</li>
                    <li>• Regular penetration testing</li>
                    <li>• Enhanced monitoring and alerting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
