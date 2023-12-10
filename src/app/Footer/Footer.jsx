'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white inset-x-0 bottom-0 p-0">
      <div className="container mx-auto px-5 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/image/god.png" alt="Myth Logo" className="w-20 h-20" />
          <span className="ml-3 text-xl">MYTH</span>
        </div>
        <p className="text-sm text-white">
          Joongbu University - Web Programming 2
        </p>
        <div className="flex flex-wrap justify-between">
          <div className="px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              KIM GEUN SOO
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-white hover:text-gray-800">92014978</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">FRONT-END</a>
              </li>
              <li>
                <a
                  className="text-white hover:text-gray-800"
                  href="https://github.com/rrvv01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </nav>
          </div>
          <div className="px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              LEE DONG HA
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-white hover:text-gray-800">92015312</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">FRONT-END</a>
              </li>
              <li>
                <a
                  className="text-white hover:text-gray-800"
                  href="https://github.com/dongha0212"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </nav>
          </div>
          <div className="px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              LEE GYEONG JAE
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-white hover:text-gray-800">92015295</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">BACK-END</a>
              </li>
              <li>
                <a
                  className="text-white hover:text-gray-800"
                  href="https://github.com/gongjae"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </nav>
          </div>
          <div className="px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              KANG MIN HYUK
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-white hover:text-gray-800">92014942</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">BACK-END</a>
              </li>
              <li>
                <a
                  className="text-white hover:text-gray-800"
                  href="https://github.com/rkdalsgur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
