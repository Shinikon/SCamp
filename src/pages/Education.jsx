import '../scss/app.scss';
import FacultyList from '../components/FacultyList';


function Education() {

    return (
        <div className='main'>
            <div className="main__edtitle">
                <h1>
                    Наши факультеты
                </h1>
            </div>
            <div className="main__faculties">
                <div className="main__faculties_box">
                    <div>
                        <FacultyList />
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Education;