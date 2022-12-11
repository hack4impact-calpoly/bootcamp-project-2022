import './About.css'

export default function About() {
    return(
        // A "card" providing information regarding the website's creator 
        <div className="page-layout">
            <div className="card-layout">
                <h1 className="card-title">About the Chef</h1>
                <p className="card-text">I <em>really</em> can't cook.
                    So when Hack4Impact informed me that I was to create a 
                    recipe site, I drew on my life experiences and general
                    appreciation of the truth of Murphy's Law to create a 
                    recipe site like no other--one with relatable and replicable
                    recipes that literally <em>anyone</em> can try at home.
                </p>
            </div>
        </div>
    );
}