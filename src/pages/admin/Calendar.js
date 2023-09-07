import EventCalendar from '../../components/admin/EventCalendar';
import AdNav from "../../components/admin/NavBar";
import Footer from "../../components/navigation/Footer";

const Calendar =()=>{
    return(
        <>
        <AdNav pageTitle='Event Calendar'/>
        <div className="calendar-container">
        <div className="side-block"></div>
        <EventCalendar/>
        </div>
        <Footer/>
        </>
    )
}

export default Calendar;