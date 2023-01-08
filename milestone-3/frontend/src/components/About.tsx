import './About.css';
import Preview from './RecipePreview';

export default function About() {
    return (
        <div className='center'>
        {/* center cards */}
        <Preview 
			name={'Angel Jeen'} 
            image= {'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'} 
            description={'I cant cook low FODMAP because I love garlic too much.'} />
        </div>
    );
}
