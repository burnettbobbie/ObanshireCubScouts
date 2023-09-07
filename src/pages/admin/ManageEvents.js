import AdNav from "../../components/admin/NavBar";
import Footer from "../../components/navigation/Footer";
import CreateEvent from "../../components/admin/PostEvent";
import ShowEvents from "../../components/ShowEvents";

const ManageEvents = () => {
  return (
    <>
      {/* Render the admin navigation bar */}
      <AdNav pageTitle='Event Manager' />
   
      <div className="event-manager-container">
        <div className="create-event-section">
          <h2>Create Event</h2>
          {/* Render the component for creating events */}
          <CreateEvent />
        </div>
        <div className="event-list-section">
          {/* Render the component for displaying events */}
          {/* Pass the showUpdateButton prop as true to show the update button */}
          <ShowEvents showUpdateButton={true} />            
        </div>
      </div>
      
      <Footer/>
    </>
  );
};

export default ManageEvents;
