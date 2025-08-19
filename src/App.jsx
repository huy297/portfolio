import { useState } from 'react'


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 w-full border-b border-gray-100">
        <div className="w-full px-6">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Nguyen Duc Huy</h1>
            <div className="hidden md:flex space-x-6">
              <div className="flex items-center space-x-4">
                <a href="mailto:duchuy2972005@gmail.com" className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-bold text-black hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>duchuy2972005@gmail.com</span>
                </a>
                <a href="tel:+6584060642" className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-bold text-black hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>(+65) 84060642</span>
                </a>
                <a href="https://www.linkedin.com/in/huynguyenduc297/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-bold text-black hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/huy297" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-bold text-black hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  <span>GitHub</span>
                </a>
                                <a href="/NguyenDucHuyResumeAug.pdf" download className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-bold text-gray-800 bg-white hover:bg-gray-50 transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Download Resume</span>
        </a>
      </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
        </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full px-6 py-12 space-y-12">
        {/* About Me Section */}
        <div id="about" className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 w-full border border-white/20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
                          <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-30"></div>
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQFqVMOwjFPO3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724321053467?e=1758758400&v=beta&t=9OJP8C4koSD2CCByKqXeinMnCZfY56FKBhTH_MlMfOI" 
                    alt="Nguyen Duc Huy" 
                    className="relative w-80 h-80 rounded-2xl shadow-2xl object-cover border-4 border-white"
                  />
                </div>
              </div>
                          <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Computer Science Student</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    I'm a Bachelor of Computing student at National University of Singapore, specializing in 
                    Parallel Computing and Distributed Systems, and Algorithms and Theory. I'm passionate about 
                    competitive programming and building efficient software solutions.
        </p>
      </div>
                              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-3 text-lg">About Me</h4>
                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-200">
                      <div className="mb-2"><span className="text-purple-600">#include</span> <span className="text-blue-600">&lt;iostream&gt;</span></div>
                      <div className="mb-2"><span className="text-purple-600">using</span> <span className="text-blue-600">namespace</span> <span className="text-green-600">std</span><span className="text-gray-800">;</span></div>
                      <div className="mb-4"></div>
                      <div className="mb-2"><span className="text-blue-600">int</span> <span className="text-green-600">main</span><span className="text-gray-800">()</span> <span className="text-gray-800">{'{'}</span></div>
                      <div className="mb-2 ml-4"><span className="text-green-600">cout</span> <span className="text-gray-800">&lt;&lt;</span> <span className="text-orange-600">"Hello, I'm Huy!"</span> <span className="text-gray-800">&lt;&lt;</span> <span className="text-green-600">endl</span><span className="text-gray-800">;</span></div>
                      <div className="mb-2 ml-4"><span className="text-green-600">cout</span> <span className="text-gray-800">&lt;&lt;</span> <span className="text-orange-600">"Year 2 Computer Science Student at NUS"</span> <span className="text-gray-800">&lt;&lt;</span> <span className="text-green-600">endl</span><span className="text-gray-800">;</span></div>
                      <div className="mb-2 ml-4"><span className="text-green-600">cout</span> <span className="text-gray-800">&lt;&lt;</span> <span className="text-orange-600">"Passionate about Algorithm"</span> <span className="text-gray-800">&lt;&lt;</span> <span className="text-green-600">endl</span><span className="text-gray-800">;</span></div>
                      <div className="mb-2 ml-4"><span className="text-purple-600">return</span> <span className="text-orange-600">0</span><span className="text-gray-800">;</span></div>
                      <div className="mb-2"><span className="text-gray-800">{'}'}</span></div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 shadow-sm">
                    <h4 className="font-bold text-purple-800 mb-4 text-lg flex items-center">
                      <span className="mr-2">🎓</span>
                      Education
                    </h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-400 pl-4">
                        <p className="text-gray-800 text-base font-bold">National University of Singapore</p>
                        <p className="text-gray-700 text-sm font-medium">Bachelor of Computing in Computer Science</p>
                      </div>
                      <div className="space-y-3 bg-white/50 p-4 rounded-lg border border-purple-100">
                        <p className="text-gray-700 text-sm flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          <span><span className="font-semibold">Specialization:</span> Parallel Computing and Distributed System, Algorithms and Theory</span>
                        </p>
                        <p className="text-gray-700 text-sm flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          <span><span className="font-semibold">ASEAN Scholarship Holder:</span> Full tuition fee and living allowance</span>
                        </p>
                        <p className="text-gray-700 text-sm flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          <span><span className="font-semibold">Internship availability:</span> May 2026 – Aug 2026 (full-time)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Experience & Projects Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <div id="experience" className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 w-full border border-white/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Experience</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Research Assistant</h3>
                <p className="text-blue-600 font-medium text-sm">Hanoi International Research Center for AI (HUST)</p>
                <p className="text-gray-500 text-xs">Sep 2023 – Jan 2024</p>
                <ul className="text-gray-600 mt-2 text-sm space-y-1">
                  <li>• Participated in implementation and optimisation PC algorithms about Causal Graph, improving computational efficiency by 20%</li>
                  <li>• Built preprocessing pipeline for sign language videos (scraping + OCR), generating dataset of 72 hours of annotated data to train translation model</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6 mt-10">Projects</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-r-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Online Judge for Competitive Programming</h3>
                <a href="https://oj.hncode.edu.vn" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium text-sm mb-2 hover:text-green-700 underline">https://oj.hncode.edu.vn</a>
                <p className="text-gray-500 text-xs mb-3"></p>
                <p className="text-gray-600 text-sm mb-4">A website for Hanoi students to learn and practice competitive programming, with 2000+ users and over 3000+ daily submissions.</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">C++</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">Django</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">React</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-r-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Survival Game</h3>
                <a href="https://github.com/huy297/MyGame" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium text-sm mb-2 hover:text-purple-700 underline">https://github.com/huy297/MyGame</a>
                <p className="text-gray-500 text-xs mb-3"></p>
                <p className="text-gray-600 text-sm mb-4">A 2D survival game with intelligent BOT movement using shortest path algorithms for smooth gameplay.</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">C++</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://www.libsdl.org/media/SDL_logo.png" alt="SDL2" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">SDL2</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-r-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Chatting App</h3>
                <a href="https://github.com/huy297/HaSun" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-medium text-sm mb-2 hover:text-yellow-700 underline">https://github.com/huy297/HaSun</a>
                <p className="text-gray-500 text-xs mb-3"></p>
                <p className="text-gray-600 text-sm mb-4">Real-time messaging application with WebSocket support for instant communication.</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">React</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">Vite</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">Django</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="Socket.io" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">Socket.io</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-r-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Movie Platform</h3>
                <a href="https://github.com/huy297/movie-ap" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium text-sm mb-2 hover:text-red-700 underline">https://github.com/huy297/movie-ap</a>
                <p className="text-gray-500 text-xs mb-3"></p>
                <p className="text-gray-600 text-sm mb-4">A comprehensive movie platform with efficient data storage and retrieval system.</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">React</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">Vite</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Golang" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">Golang</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">Redis</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

                  {/* Achievements & Skills Section */}
        <div className="space-y-8">
          {/* Achievements Section */}
          <div id="achievements" className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 w-full border border-white/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">Achievements</h2>
            <div className="space-y-4">
                              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <img src="https://icpc.global/regionals/abouticpc/foundationlogo.png" alt="ICPC" className="w-8 h-8 object-contain" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 ml-4">ICPC Jakarta Asia Regional (2024)</h3>
                  </div>
                  <p className="text-gray-700 text-base font-medium">Rank 18 in International Collegiate Programming Contest (C++)</p>
                </div>
              
                              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <img src="https://icpc.global/regionals/abouticpc/foundationlogo.png" alt="ICPC" className="w-8 h-8 object-contain" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 ml-4">ICPC Ho Chi Minh Asia Regional (2022)</h3>
                  </div>
                  <p className="text-gray-700 text-base font-medium">Second Prize in International Collegiate Programming Contest (C++)</p>
                </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="Vietnam Flag" className="w-12 h-12 object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 ml-4">Vietnamese Olympiad in Informatics (2023)</h3>
                </div>
                                  <p className="text-gray-700 text-base font-medium">First Prize (Rank 7/400) (C++)</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="Vietnam Flag" className="w-12 h-12 object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 ml-4">Vietnam International Olympiad Team Selection Test (2023)</h3>
                </div>
                                  <p className="text-gray-700 text-base font-medium">Participated in Vietnam International Olympiad Team Selection Test (C++)</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 w-full border border-white/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Programming Languages</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">Python</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">C++</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">Java</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">TypeScript</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Frameworks & Libraries</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">PyTorch</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">TensorFlow</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">Django</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">Express.js</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="Socket.io" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">Socket.io</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Tools & Databases</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">Redis</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">PostgreSQL</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">Linux</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-300">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />
                    <span className="font-semibold text-gray-800">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        


      </main>
    </div>
  )
}

export default App
