import { UserOutlined, CloseOutlined, SettingOutlined } from '@ant-design/icons';

const FriendActivity = () => {
  return (
    <div className="max-w-[240px] bg-[#121212] text-white h-screen p-5 flex flex-col fixed right-0">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">N A.dev</h2>
        <div className="flex gap-2">
          <SettingOutlined className="text-xl cursor-pointer" />
          <CloseOutlined className="text-xl cursor-pointer" />
        </div>
      </div>

      <div className="mt-5 space-y-5">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="relative">
              <UserOutlined className="text-4xl bg-gray-700 p-2 rounded-full" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full"></span>
            </div>
            <div className="flex-1">
              <div className="bg-gray-800 h-4 w-3/4 rounded mb-2"></div>
              <div className="bg-gray-800 h-4 w-1/2 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-gray-400">
        <p>Go to Settings &gt; Social and enable "Share my listening activity on Spotify." You can turn this off at any time.</p>
        <button className="mt-5 bg-white text-black px-4 py-2 rounded-full font-bold">SETTINGS</button>
      </div>
    </div>
  );
}

export default FriendActivity;