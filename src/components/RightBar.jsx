import { Link } from 'react-router-dom';
// import { InstagramOutlined, TwitterOutlined, GithubOutlined, LinkedinOutlined  } from '@ant-design/icons';

const RightBar = ()=>{
    return (
        <>
        <div className="lg:w-1/20 bg-grey lg:fixed md:h-full h-24 right-0 border-l border-solid border-neutral-200">
            <div className="pt-500">
                <div className="text-white pl-6 pt-8"><a href="https://www.instagram.com/iam_portable_mo/">
                    <i className="fa-brands fa-instagram fa-3x"></i></a> 
                </div>
                <div className="text-white pl-6 pt-6"> <a href="https://web.facebook.com/enitan.oyakelvin/">
                    <i className="fa-brands fa-facebook fa-3x"></i></a>
                </div>
                <div className="text-white pl-6 pt-6"> <a href="https://twitter.com/Mo_Mosadi">
                    <i className="fa-brands fa-twitter fa-3x"></i></a>
                </div>
            </div>
        </div>
        {/* <div className='flex md:block h-screen'>
            <div className='mt-5'><a href='https://www.instagram.com/iam_portable_mo/' /> <InstagramOutlined style={{ fontSize: '80px', color: 'white' }} /> </div>
            <div className='mt-5'><TwitterOutlined style={{ fontSize: '80px', color: 'white' }} /></div>
            <div className='mt-5'><Link to={{ instagram: "https://www.instagram.com/iam_portable_mo/" }} target="_blank" /> <GithubOutlined style={{ fontSize: '80px', color: 'white' }} /> </div>
            <div className='mt-5'><Link to={{ instagram: "https://www.instagram.com/iam_portable_mo/" }} target="_blank" /> <LinkedinOutlined style={{ fontSize: '80px', color: 'white' }} /> </div>
        </div> */}
        
           {/* <div class="social-icons"> <Link to="https://www.instagram.com/iam_portable_mo/"></Link></><i class="fa-brands fa-instagram"></i></div>
                <div class="social-icons"> <a href="https://web.facebook.com/enitan.oyakelvin/"><i class="fa-brands fa-facebook"></i></div>
                <div class="social-icons"> <a href="https://twitter.com/Mo_Mosadi"><i class="fa-brands fa-twitter"></i></div> */}

        </>
    )
}
export default RightBar;