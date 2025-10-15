import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-indigo-500 ring-offset-4 shadow-2xl">
              <Image
                src="/avatar.png"
                alt="孙志坤"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              孙志坤
            </h1>
            <p className="text-2xl md:text-3xl text-indigo-600 font-semibold mb-6">
              技术负责人 & AI技术专家
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
              20年+技术开发经验，专注于大型互联网产品研发与技术创新。
              <br />
              担任大厂技术负责人，致力于推动 AI 与技术融合发展。
              <br />
              《DeepSeek极简入门与应用》畅销书作者（销量已突破80万册）。
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg"
              >
                关注公众号
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all hover:scale-105 shadow-lg"
              >
                联系我
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            技能专长
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">技术栈精通</h3>
              <p className="text-gray-700 leading-relaxed">
                精通 React、Vue、TypeScript 等现代技术栈，拥有大型应用架构设计经验，擅长构建高性能、可扩展的前端系统。
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI 技术融合</h3>
              <p className="text-gray-700 leading-relaxed">
                深入研究 AI 与技术融合，专注 D2C、Copilot 等前沿技术，推动 AI 在实际开发中的应用与创新。
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">团队管理</h3>
              <p className="text-gray-700 leading-relaxed">
                丰富的技术团队管理经验，善于规划技术方向和推动团队创新，打造高效协作的技术团队。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            我的作品
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <a
              href="https://mcp-cn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  MCP Hub 中国
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                精选优质 MCP 服务的综合平台，包含 Web 应用、CLI 工具和 MCP 服务器。
                支持 Cursor 一键安装，为 AI 开发者提供便捷的工具生态系统。
              </p>
              <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                访问项目
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            <a
              href="https://ziliu.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">✍️</div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  字流
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI 驱动的多平台内容发布工具。一次创作，智能适配公众号、知乎、掘金、知识星球、
                视频号、抖音、B站、小红书等平台格式。
              </p>
              <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                访问项目
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            成就荣誉
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">⭐</div>
              <p className="text-gray-800 font-medium">逆向分析 Copilot<br />（Github 已获得上千 star）</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎤</div>
              <p className="text-gray-800 font-medium">GMTC 全球大技术大会<br />演讲嘉宾</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📚</div>
              <p className="text-gray-800 font-medium">《DeepSeek极简入门与应用》<br />畅销书作者</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">💡</div>
              <p className="text-gray-800 font-medium">知乎技术话题<br />高赞回答者</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏆</div>
              <p className="text-gray-800 font-medium">Trae 官方认证<br />Expert</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎯</div>
              <p className="text-gray-800 font-medium">CSDN AI编程大赛<br />官方特邀评委</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            联系方式
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">社交媒体</h3>
                <div className="space-y-4">
                  <a
                    href="https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">📱</span>
                    <div>
                      <div className="font-semibold text-gray-900">公众号</div>
                      <div className="text-sm text-gray-600">关注获取最新动态</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/mengjian-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">💻</span>
                    <div>
                      <div className="font-semibold text-gray-900">Github</div>
                      <div className="text-sm text-gray-600">@mengjian-github</div>
                    </div>
                  </a>

                  <a
                    href="https://www.zhihu.com/people/meng-jian-39-32"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">🔵</span>
                    <div>
                      <div className="font-semibold text-gray-900">知乎</div>
                      <div className="text-sm text-gray-600">@meng-jian-39-32</div>
                    </div>
                  </a>

                  <a
                    href="https://juejin.cn/user/4212984287073895"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">⚡</span>
                    <div>
                      <div className="font-semibold text-gray-900">掘金</div>
                      <div className="text-sm text-gray-600">技术文章分享</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-8 bg-white rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">直接联系</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-2">微信</div>
                    <div className="text-lg text-indigo-600 font-mono">mjcoding3</div>
                    <div className="text-sm text-gray-600 mt-2">添加时请备注来意</div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg text-center">
                    <div className="font-semibold text-gray-900 mb-3">微信二维码</div>
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mx-auto flex items-center justify-center text-gray-500">
                      <span className="text-sm">扫码添加微信</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">孙志坤 - 技术负责人 & AI技术专家</p>
          <p className="text-gray-400">
            致力于推动 AI 与技术融合发展，让技术创造更大价值
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="https://github.com/mengjian-github" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              Github
            </a>
            <a href="https://www.zhihu.com/people/meng-jian-39-32" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              知乎
            </a>
            <a href="https://juejin.cn/user/4212984287073895" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              掘金
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © {new Date().getFullYear()} 孙志坤. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
