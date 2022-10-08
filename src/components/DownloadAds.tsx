import appStoreImg from '../assets/appStore.png';
import googlePlayImg from '../assets/googlePlay.png';

export function DownloadAds() {
  const downloadImgStyle = 'border-2 border-[#232A4E] rounded-[13px] h-12 w-40';

  return (
    <div className='download'>
      <div className='download_images flex gap-8'>
        <img className={downloadImgStyle} src={appStoreImg} alt='' />
        <img className={downloadImgStyle} src={googlePlayImg} alt='' />
      </div>
    </div>
  );
}
