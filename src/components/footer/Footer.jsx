import { PlayCircleFilled, PauseCircleFilled, StepBackwardOutlined, StepForwardOutlined, SoundOutlined, SwapOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between p-4 shadow-lg">
      <div className="flex items-center space-x-4">
        <img src="https://via.placeholder.com/50" alt="Album Art" className="w-12 h-12 object-cover" />
        <div>
          <p className="font-semibold">Track Name</p>
          <p className="text-gray-400 text-sm">Artist Name</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <StepBackwardOutlined className="text-2xl cursor-pointer" />
        <PlayCircleFilled className="text-4xl cursor-pointer" />
        <PauseCircleFilled className="text-4xl cursor-pointer hidden" />
        <StepForwardOutlined className="text-2xl cursor-pointer" />
        <div className="flex items-center space-x-2">
          <span className="text-sm">2:39</span>
          <div className="bg-gray-700 h-1 w-64 rounded-full">
            <div className="bg-green-500 h-1 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <span className="text-sm">4:22</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <SwapOutlined className="text-2xl cursor-pointer" />
        <SoundOutlined className="text-2xl cursor-pointer" />
        <div className="bg-gray-700 h-1 w-24 rounded-full">
          <div className="bg-green-500 h-1 rounded-full" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;