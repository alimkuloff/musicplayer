import { useNavigate } from 'react-router-dom';
import { HomeOutlined, SearchOutlined, BookOutlined, PlusOutlined, HeartFilled } from '@ant-design/icons';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className='py-[70px] px-[30px] flex flex-col gap-[15px] bg-[#181818] text-white h-screen w-full max-w-[220px] fixed'>
      <div className='flex items-center gap-[15px] cursor-pointer' onClick={() => navigate('/')}>
         <HomeOutlined className='text-[25px]'/>
         <p className='text-[14px]'>Home</p>
      </div>
      <div className='flex items-center gap-[15px] cursor-pointer' onClick={() => navigate('/search')}>
         <SearchOutlined className='text-[25px]'/>
         <p className='text-[14px]'>Search</p>
      </div>
      <div className='flex items-center gap-[15px] cursor-pointer' onClick={() => navigate('/library')}>
         <BookOutlined className='text-[25px]'/>
         <p className='text-[14px]'>Your Library</p>
      </div>
      <div className='mt-[30px]'>
        <div className='flex items-center gap-[15px] cursor-pointer' onClick={() => navigate('/create-playlist')}>
          <PlusOutlined className='text-[25px] bg-gray-700 p-[5px] rounded-sm'/>
          <p className='text-[14px]'>Create Playlist</p>
        </div>
        <div className='flex items-center gap-[15px] cursor-pointer mt-[15px]' onClick={() => navigate('/likedSongs')}>
          <HeartFilled className='text-[25px] bg-gradient-to-br from-purple-600 to-blue-600 p-[5px] rounded-sm'/>
          <p className='text-[14px]'>Liked Songs</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;