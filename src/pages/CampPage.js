import React from 'react' 
import { Link } from 'react-router-dom'




function CampPage ({ direct }) {
    const items = [
        {
            Image: './Mount-Ulap.png',
            Tittle: 'Mount Ulap',
            Description: "One of the most famous hikes in Benguet Mt Ulap Itogon",
            button: "View Campground"
        },
        {
            Image: './Calagus Islands.jpg',
            Tittle: 'Calagus Islands',
            Description: "A paradise of islands that can rival the white sand beauty of Boracay",
            button: "View Campground"
        },
        {
            Image: './Onay Beach.jpg',
            Tittle: 'Onay Beach',
            Description: "This is one of the best camping sites, beautiful and pristine.",
            button: "View Campground"
        },
        {
            Image: './Latik Riverside.jpg',
            Tittle: 'Latik Riverside',
            Description: "Philippines is one of the most dazzling countries in all Asia.",
            button: "View Campground"
        },
        {
            Image: './Buloy Springs.jpg',
            Tittle: 'Buloy Springs',
            Description: "This is one of the best beach camping sites, beautiful and pristine.",
            button: "View Campground"
        },
        {
            Image: './Seven.jpg',
            Tittle: 'Seven Sisters Waterfall',
            Description: "The Seven Sisters is the 39th tallest waterfall in Norway",
            button: "View Campground"
        }
      ];
    return (
        <>
        <div className="camp-page-container">
            
            {
                items
                .map((val, index) => {
                    return (
                        <div className="results" key={index}>
                               <img src={val.Image} alt="camping" className='image-camp'/>
                               <h4>{val.Tittle}</h4>
                               <p>{val.Description}</p>

                               <Link to='/Search-Page' className='ground-link'>
                                   Back To Search Page
                               </Link>
                           </div>
                    )
                })
            }
        </div>
        </>
    );
}

export default CampPage