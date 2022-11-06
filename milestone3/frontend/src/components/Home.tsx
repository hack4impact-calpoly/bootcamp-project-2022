import Navbar from "./navbar";

export default function Home() {
    return (
    <body>
        {/* <!-- page header --> */}
        <Navbar />
        {/* <!-- page content --> */}
        <main>
            <div className="recipe-box">
                <a className="recipe-title" href="pumpkinpie.html">Pumpkin Pie</a>
                <img className="image" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/0/FN_Pumpkin-Pie_s4x3.jpg.rend.hgtvcom.616.462.suffix/1386172256183.jpeg" alt="Pumpkin pie image." />
            </div>
            <div className="recipe-box">
                <a className="recipe-title" href="candyapple.html">Candy Apple</a>
                <img className="image" src="https://www.thespruceeats.com/thmb/GHEiVqS3sBJEzaJIVHHAyh-FrFA=/1500x1000/filters:fill(auto,1)/candy-apples-520804-hero-01-a95f67ad68994b0c9c7bf4812ab42e93.jpg" alt="Candy apple image." />
            </div>
            <div className="recipe-box">
                <a className="recipe-title" href="mashedpotato.html">Mashed Potato</a>
                <img className="image" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/10/12/0/FNM-110111_Neelys-Thanksgiving-045b_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382540862209.jpeg" alt="Mashed potato image." />
            </div>
        </main>
    </body>
    );
}