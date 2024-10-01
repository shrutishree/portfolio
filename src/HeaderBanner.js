import './App.css';


const contactList = [
    { 
        id: 1,
        name: "Contact"
    },
    {
        id: 2,
        name: "Resume"
    },
    {
        id: 3,
        name: "Project"
    }
]
const HeaderComponent = () => {
  return (
    <div className='headerComponent'>
    <h2>Shruti Shree</h2>
    <div className='contactList'>
        {contactList.map((data) => {
            return(
                <div>{data.name}</div>
            )
        })}
    </div>
    </div>
  )
}

function HeaderBanner() {
  return (
    <div className="headerBanner">
      <header>
        <HeaderComponent />
      </header>
      <div className='profileSection'>
      <div className='profile'>
      <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt='shruti' />
        <h3>Graduate of USC’s Master of Science in Entrepreneurship and Innovation program and UPenn alum, passionate about a career in tech, sports, and music.</h3>
      </div>
      <div className='introSection'>
        <hr />
        <h3>Intro</h3>
        <p>I was born and raised in Southern California where I grew up in a Lakers town and always had good music playing around the house. These threads of family, basketball, and music have defined my life path and experiences. I received a Master of Science in Entrepreneurship and Innovation degree from the University of Southern California’s Marshall School of Business in tandem with being a member on the Trojans Women’s Basketball Team. This follows the completion of my undergraduate degree at the University of Pennsylvania where I earned a Bachelor of Science in Economics with concentrations in Finance and Management from the Wharton School of Business. At Penn, I was also a four-year member on the Quakers Women’s Basketball Team and two-time captain.</p>
      </div>
      </div>
    </div>
  );
}

export default HeaderBanner;
