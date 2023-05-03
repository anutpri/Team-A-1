import { useState, useEffect } from 'react';
import Layout from './Layout';
import './Card.css';

const ActivityCard = () => {
  //Mock database on localhost
  const [userActivity, setUserActivity] = useState([]);

  const Card = [
    {
      id: 1,
      userName: 'WARUT NIYOMKA',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, numquam eveniet vero assumenda odio, similique repellendus reiciendis illum ad quas velit ducimus, quam dolorum nostrum doloribus voluptate quasi maiores. Unde!',
      activityType: 'Walking',
      startDateTime: '04/09/2023',
      finishDateTime: '04/09/2023',
      durationTime: '00:53:41',
      distance: '4.0 KM',
    },
  ];

  //Get data in local database
  useEffect(() => {
    const storedActivity =
      JSON.parse(localStorage.getItem('userActivity')) || [];
    setUserActivity(storedActivity);
  }, []);

  return (
    <Layout>
      <div>
        {userActivity.map((user) => (
          <div className='card' key={user.id}>
            <div className='cardHeader'>
              <h2 className='userName'>WARUT NIYOMKA</h2>
              <span>
                <img
                  className='editIcon'
                  src='https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/edit-259.png'
                  width='45px'
                  heigth='45px'
                />
                <img
                  className='deleteIcon'
                  src='https://www.svgrepo.com/show/244044/delete.svg'
                  width='40px'
                  heigth='40px'
                />
              </span>
            </div>
            <table className='typeAndName'>
              <td className='activityype'>{user.activityType}</td>
              <td>
                <h4 className='activity-name'>{user.activityName}</h4>
              </td>
            </table>
            <hr />
            {/* <ion-icon color="primary" size="large" name="create-outline"></ion-icon> */}
            {/* <ion-icon color="danger" size="large" name="trash-outline"></ion-icon> */}

            <div className='cardBody'>
              {/* <p className='name'>WARUT NIYOMKA</p> */}
              <label className='description'>{user.description}</label>
            </div>

            <div className='activityTab'>
              <div className='activity-left-tab'>
                {/* <img className='activity-image' src={item.image} /> */}
                {/* <p className='activity-type'>{user.activityType}</p> */}
                <div className='detailHeader'>
                  <table>
                    <th>startDateTime</th>
                    <th>finishDateTime</th>
                  </table>
                  <span>{user.startDateTime}</span>
                </div>
                <div className='detail'>
                  <p>Duration</p>
                  <span>{user.durationTime}</span>
                </div>
              </div>
              <div className='activity-right-tab'>
                <div className='detail'>
                  {/* <p>finishDateTime</p> */}
                  <span>{user.finishDateTime}</span>
                </div>
                <div className='detail'>
                  <p>Distance</p>
                  <span>{user.distance}</span>
                </div>
              </div>
              {/* <hr /> */}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ActivityCard;
