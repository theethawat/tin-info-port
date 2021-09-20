import Plyr from "react-plyr";

function Front({ data }) {
  if (data)
    return (
      <div>
        <div className='title-hero hero is-medium'>
          <div className='hero-body'>
            <h3 className='subtitle is-3 acenter  has-text-light is-italic'>
              /*<span className='has-text-primary'> @TheethawatSpace </span>is
              space of{" "}
              <span className='kanitlight'>ธีร์ธวัช สวาสดิ์ธรรม */</span>
            </h3>
          </div>
        </div>

        <div className='video-profile-hero'>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <div className='video-player'>
                  <Plyr
                    type='youtube'
                    resetOnEnd={true}
                    autoplay={true}
                    muted={true}
                    title='Theethawat Photo'
                    controls={true}
                    videoId='https://youtu.be/UzKTadfPrkQ'
                  />
                </div>
              </div>
              <div className='column'>
                <div className='content has-text-warning'>
                  <ul>
                    <h5 className='subtitle is-3  has-text-black kanitlight'>
                      {data.name} {data.surname} ({data.nickname}) <br />
                      <span className='subtitle is-5 '>
                        {data.thaiName} {data.thaiSurname} ({data.thaiNickname}){" "}
                      </span>
                    </h5>
                    <h6 className='has-text-danger'>$ cat biography.yaml</h6>
                    <li>
                      position :
                      <ul className=' has-text-black'>
                        <li>Computer Engineering Student</li>
                        <li>
                          {" "}
                          Full Stack Jounior Developer @{" "}
                          <a
                            href='https://iarc.psu.ac.th'
                            className=' has-text-black'
                          >
                            IARC
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      hometown :
                      <span className=' has-text-black'>
                        {" "}
                        {data.hometowm}, Thailand
                      </span>{" "}
                    </li>
                    <li>
                      birthday :{" "}
                      <span className=' has-text-black'> {data.birthday}</span>{" "}
                    </li>
                    <li>
                      schools :
                      <ul className=' has-text-black'>
                        {Array.isArray(data.school) &&
                          data.school.map((_school) => <li>{_school}</li>)}
                      </ul>
                    </li>
                    <li>
                      email :{" "}
                      {data.email !== undefined &&
                      data.email.work !== undefined ? (
                        <>
                          <a
                            className=' has-text-black'
                            href={"mailto:" + data.email.work}
                          >
                            <u> {data.email.work}</u>
                          </a>{" "}
                        </>
                      ) : (
                        <></>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='section'>
          <div className='container '>
            <h3 className='title is-3 acenter'>
              $<span className='has-text-success'> node </span>About.ts
            </h3>
            <div className='content is-medium column is-10 mgh-medium piccenter acenter'>
              <p className=''>{data.introduction}</p>
            </div>
            <p className='acenter column is-10 piccenter kanitlight'>
              {data.thaiIntro}
            </p>
          </div>
        </section>
      </div>
    );
  else {
    return <div></div>;
  }
}

export default Front;
