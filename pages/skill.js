function Skill(data) {
  if (data)
    return (
      <div>
        <section className="section" id="skill">
          <div className="container">
            <div className="columns acenter">
              <div className="content column is-6">
                <div>
                  <h3 className="title is-3 ">Skill</h3>
                  {Array.isArray(data) &&
                    data.map((skill) => (
                      <div className="column is-9 piccenter">
                        {' '}
                        {skill.name} <br />
                        <progress
                          className="progress is-primary"
                          value={skill.skillPercent}
                          max="100"
                        >
                          {' '}
                          {skill.skillPercent} %{' '}
                        </progress>
                      </div>
                    ))}
                </div>{' '}
              </div>
              <div className="column is-5">
                <h3 className="title is-3">Online Badge</h3>
                <p>Nothing to show now.</p>
                <br />
                <h3 className="title is-3">Certificate</h3>
                <p>Nothing to show now.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Skill
