import Footer from "./Footer";

const Section = () => {
    return (
        <section>
            <div className="section__header">
                <h1>Name of Bio</h1>
            </div>
            <div className="summary">
                <article >
                    <h2>Name of Bio</h2>
                    <p>Name of Bio has always seen her work as the
                        realization of her sport passions put at the service of others. I
                        combine proactive, dynamic, motivation and optimistic with
                        the knowledge and skills I have received during my different
                        sport studies and experiences in management of sports and
                        football coaching
                        </p>
                </article>
                <article >
                    <h2>Work Highlights</h2>
                    <ul>
                        <li>Planning events and programs.Managing risks. Creatingbudgets, and monitoring financial performance</li>
                        <li>leading training sessions, providing
motivation and advice during
gameplay, developing game plans,
attending tryouts, as well as
scheduling team meetings
</li>
                        <li>handles administrative tasks for the
project and team members to keep
the project running smoothly</li>
                        <li>organize talent identification for
boys and girls who want to play
soccer and study in USA high school
and colleges
</li>
                        <li>planning and handle all issues
related to women football in
Rwanda
</li>
                        <li>The Technical Commission and
preparation of national and
Olympic teams
</li>
                        <li>The committee shall be responsible for
organizing and supervising matches of
women's, Africa nation cup
(qualification and final phase, as well
as all continental football competitions
organized by CAF in these categories</li>
                        
                    </ul>
                    <div className="button-container"><button>Download My Resume</button></div>
                </article>
                <Footer />
            </div>
            <div className="profile">
            </div>
        </section>
    )
}
export default Section;