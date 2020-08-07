import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash'

import {
  faCode,
  faCodeBranch,
  faGlobeAsia,
} from '@fortawesome/free-solid-svg-icons'

let projectDataListing = (group, year) => (
  <div className="content column is-8 piccenter">
    <h4 className="title is-5"> {year} </h4>
    <ul>
      {group[year].map((project) => (
        <div className="project-list">
          {project.name} - {project.describe} <br />
          {project.stack.map((stack) => (
            <span>
              <span className="tag is-light"> {stack.toUpperCase()} </span>{' '}
            </span>
          ))}
          {project.repository != '' ? (
            <span className="tag is-info is-light">
              <a href="${project.repository}">
                <FontAwesomeIcon icon={faCodeBranch} /> Repository
              </a>
            </span>
          ) : (
            ''
          )}
          {'  '}
          {project.website != '' ? (
            <span className="tag is-success is-light">
              <a href={project.website} className="has-text-success">
                <FontAwesomeIcon icon={faGlobeAsia} /> Deploy Site
              </a>
            </span>
          ) : (
            ''
          )}
        </div>
      ))}
    </ul>
    <hr />
  </div>
)

function project({ projectData }) {
  let group = _.groupBy(projectData, 'year')
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  let allProjectList = []
  for (let yearIndex = 2016; yearIndex <= currentYear; yearIndex++) {
    let currentYearList = projectDataListing(group, yearIndex)
    allProjectList.push(currentYearList)
  }
  return (
    <div>
      <section className="section" id="project">
        <div className="container acenter content is-medium">
          <h3 className="title is-3 ">Project</h3>
          {allProjectList}
        </div>
      </section>
    </div>
  )
}

export default project
