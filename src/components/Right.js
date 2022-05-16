import profile from '../img/dian.jpg'
const Right = () => {
    return (
        <div className="new">
            <div className="right__pic">
                <div className="profile__image">
                    <img src={profile} alt="profile" />
                </div>
                <div className="profile__education">
                    <h2 className="field-label">Education</h2>
                    <ul>
                        <li>Bachelor Degree of
Environmental studies,University of Lay Adventist of Kigali</li>
                        <li>Diploma in Management of
Olympic Sport organizations,International Olympic committee</li>
<li>Diploma in Sports
Management,Leipzig University-Germany
</li>
<li>Masters degree in Sports
Management,Institute of sports science and
technology-pune India</li>
<li>International Master in
Sports Management
,FIFA Master-England, Italy and Switzerland</li>
                    </ul>
                </div>
            </div>
            <div className="right__data">
                <ul className="details">
                    <li><p>Email:</p>
                        <a href="#email">email@gmail.com</a>
                        <hr />
                    </li>
                    <li><p>LANGUAGES</p><p>English and French</p><hr /></li>
                    <li><p>SKILLS</p><p>Sports management, Event Management, Computer literacy, Conflict resolutions,Leadership skills</p><br></br><hr /></li>
                    <li><p>MEMBERSHIPS</p><br></br><hr /></li>
                    <li><p>PHONE</p><a href="#email">+250788298096</a><hr /></li>
                </ul>
            </div>
        </div>
    )
}
export default Right;